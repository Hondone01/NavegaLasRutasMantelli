import { products } from '../tempData/productos'

export function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, )
  })
}

export function fetchDataById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products.find(prod => prod.id === parseInt(id)))
    }, )
  })
}

//Funcion para llamar a la lista completa
//Funcion para obener detalle
//Funcion para llamar por categoria
//Funcion para crear ordenes