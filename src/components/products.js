const products = [
    {
      id:'1',
      name:'Camisa Celeste',
      category:'camisa',
      price:'$1200',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://i.pinimg.com/236x/3c/33/5f/3c335f71a43e51493e1b293d20d86763--amp-other-stories-minimalist-style.jpg'
    },
    {
      id:'2',
      name:'Camisa Rosa Viejo',
      category:'camisa',
      price:'$1200',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://i.pinimg.com/550x/e9/b9/aa/e9b9aa9a41977b8bad0d2594cb4190cc.jpg'
    },
    {
      id:'3',
      name:'Blusa Verde',
      category:'blusa',
      price:'$1300',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://http2.mlstatic.com/D_NQ_NP_619939-MLA47415638323_092021-W.jpg'
    },
    {
      id:'4',
      name:'Remera Negra',
      category:'remera',
      price:'$950',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://http2.mlstatic.com/D_NQ_NP_744556-MLA45767027988_042021-W.jpg'
    },
    {
      id:'5',
      name:'Remera Blanca',
      category:'remera',
      price:'$950',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://http2.mlstatic.com/D_NQ_NP_830458-MLA46119084116_052021-W.jpg'
    },
    {
      id:'6',
      name:'Remera Gunner',
      category:'remera',
      price:'$1000',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://img.avellanedaaltoque.com/productos/374585/1_thumb.jpg'
    },
    {
      id:'7',
      name:'Remera Batic',
      category:'remera',
      price:'800',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/img_4888_1566218211.jpg?itok=IGW6dtVi'
    },
    {
      id:'8',
      name:'Vestido Flores Otoño',
      category:'vestido',
      price:'$1300',
      description:'Con este vestido te vas a sentir comoda, ponete unas buenas zapas y estaras lista para cualquier ocasion',
      priceUrl:'https://i.linio.com/p/771d9b37f74027296429d64ad05239f4-product.jpg'
    },
    {
      id:'9',
      name:'Vestido Playa Blanco',
      category:'vestido',
      price:'$1800',
      description:'Esta vestido es ideal para esos dias de calor intensos, sumale unas zandalias comodas color camel',
      priceUrl:'https://www.katia.com/files/mod/6165/patron-tejer-punto-ganchillo-mujer-vestido-primavera-verano-katia-6165-59-g.jpg'
    },
    {
      id:'10',
      name:'Vestido Noche Sastrero',
      category:'vestido',
      price:'$1900',
      description:'Ideal para una primera cita, sumale unas chatas color rojo',
      priceUrl:'https://m.media-amazon.com/images/I/31BMne0e2YL.jpg'
    },
    {
      id:'11',
      name:'Blusa Azul Flores',
      category:'blusa',
      price:'$900',
      description:'Blusa estrapples ideal para dias de calor',
      priceUrl:'https://i.pinimg.com/originals/3b/44/ca/3b44caf368e7375f5dce4a3c1883a641.jpg'
    },
    {
      id:'12',
      name:'Camisa Leñador',
      category:'camisa',
      price:'$1500',
      description:'Camisa versatil si las hay, va con TODO!',
      priceUrl:'https://i.pinimg.com/originals/96/12/72/9612727c1520499dd83a428fa50a421c.jpg'
    }

  ]


export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        },1000 )
  
    })
}

// export const getItem = () => {
//   return new Promise((resolve, reject) =>{
//       setTimeout(() => {
//           resolve(products[0])
//       },2000 )

//   })
// }

export const getProductById = (id) => {  
  return new Promise((resolve, reject) => {
      const product = products.find(prod => parseInt(prod.id) === parseInt(id))
      setTimeout(() => resolve(product), 1000)
  })
}

export const getCategories = (category) => {
  
  return new Promise ((resolve, reject) => {

      const product = products.find(prod => prod.category=== category)
      setTimeout(() => resolve(product), 2000)
  })
}