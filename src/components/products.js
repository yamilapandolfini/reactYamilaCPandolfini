const products = [
    {
      id:'1',
      name:'Camisa Celeste',
      price:'$1200',
      description:'Esta camisa sirve para cualquier ocasion, sumale un pantalon naranja y sos un fuego',
      priceUrl:'https://i.pinimg.com/236x/3c/33/5f/3c335f71a43e51493e1b293d20d86763--amp-other-stories-minimalist-style.jpg'
    },
    {
      id:'2',
      name:'Camisa Rosa Viejo',
      price:'$1200',
      description:'Camisa Rosa Viejo',
      priceUrl:'https://i.pinimg.com/550x/e9/b9/aa/e9b9aa9a41977b8bad0d2594cb4190cc.jpg'
    },
    {
      id:'3',
      name:'Blusa Verde',
      price:'$1300',
      description:'Blusa Verde',
      priceUrl:'https://http2.mlstatic.com/D_NQ_NP_619939-MLA47415638323_092021-W.jpg'
    }
  ]





export const getProducts = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(products)
        },2000 )
  
    })
}

export const getItem = () => {
  return new Promise((resolve, reject) =>{
      setTimeout(() => {
          resolve(products[1])
      },2000 )

  })
}
