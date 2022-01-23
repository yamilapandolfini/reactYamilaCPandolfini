import React from 'react';
import { useContext, useState, useRef } from 'react';
import CartContext from '../../context/CartContext'
import ContactForm from '../ContactForm/ContactForm';
import CartItem from '../CartItem/CartItem'
import { db } from '../../services/firebase/firebase'
import { collection, addDoc, doc, writeBatch, Timestamp, getDoc } from 'firebase/firestore'
import Togglable from '../Togglable/Togglable'
import './Cart.css';
import { Link } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';




const Cart = () => {

    const [processingOrder, setProcessingOrder] = useState(false)
    const [contact, setContact] = useState({
        phone: '',
        address: '',
        comment: ''
    })
    const { products, clearCart, getTotal } = useContext(CartContext)
    const contactFormRef = useRef()

    const [orderId, setOrderId] = useState();



    const confirmOrder = () => {
        setProcessingOrder(true)

        const objOrder = {
            items: products,
            total: getTotal(),
            phone: contact.phone,
            address: contact.address,
            comment: contact.comment,
            date: Timestamp.fromDate(new Date())
        }

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((documentSnapshot) => {
                if(documentSnapshot.data().stock >= prod.quantity) {
                    batch.update(doc(db, 'items', documentSnapshot.id), {
                        stock: documentSnapshot.data().stock - prod.quantity
                    })
                } else {
                    outOfStock.push({ id: documentSnapshot.id, ...documentSnapshot.data()})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(({id}) => { 
                setOrderId(id);
                batch.commit().then(() => {
                    console.log('success', `El id de su orden es: ${id}`)
                })
            }).catch((error) => {
                console.log('error', `Error ejecutando la orden: ${error}`)
            }).finally(() => {
                setProcessingOrder(false)
                clearCart()
            })
        }

    }

    if(processingOrder) {
        return (
            <div>
                <h1>Se esta procesando su orden</h1> 
                <CircularProgress />
            </div>
                
        )

    }

    if(products.length === 0) {
        return (
            <div>
                <h1>Muchisimas gracias!!</h1>
                <h2>El id de su orden es: {orderId}</h2>
                <Link to='/' className='Optioncard'>seguir comprando</Link>
            </div>
        )
    } else{
        <div>
                <h1>Carrito vacio
                </h1>
                <Link to='/' className='Optioncard'>seguir comprando</Link>
            </div>
    }

    return ( 
        <div>
            <h1>Cart</h1>
            {   !processingOrder && products.length > 0
                    ? 
                    products.map(p => <CartItem key={p.id} product={p}/>)
                    :   'Procesando Orden'
            }
            {(products.length > 0 && !processingOrder) && <h3>Total: ${getTotal()}</h3>}
            {(!processingOrder && products.length > 0) && <button onClick={() => clearCart()} className="Button">Cancelar compra</button>}
            {(!processingOrder && products.length > 0) && <button onClick={() => confirmOrder()} className="Button">Confirmar Compra</button>}
            {(!processingOrder && contact.phone !== '' && contact.address !== '' && contact.comment !== '') &&
                <div>
                    <h4>Telefono: {contact.phone}</h4>
                    <h4>Direccion: {contact.address}</h4>
                    <h4>Comentario: {contact.comment}</h4>
                    <button onClick={() => setContact({ phone: '', address: '', comment: ''})} className='Button'>Borrar datos de contacto</button>
                </div>    
            }
            {(!processingOrder && products.length) > 0 && <Togglable buttonLabelShow={(contact.phone !== '' && contact.address !== '' && contact.comment !== '') ? 'Editar contacto' : 'Agregar contacto'} ref={contactFormRef}>
                                                            <ContactForm toggleVisibility={contactFormRef} setContact={setContact} />
                                                          </Togglable> }
        </div>
    )
}

export default Cart;