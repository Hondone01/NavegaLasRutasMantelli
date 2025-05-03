import {addDoc, collection, doc, getDocs, getDoc, query, where} from "firebase/firestore"
import{db} from "../config/firebaseConfig"

export const getProducts = async () => {
  const prodCollection =collection(db, 'Productos')
  const productos = await getDocs (prodCollection)
  return productos.docs.map(doc => ({id: doc.id, ...doc.data()}))
}

export const getProductById = async id => {
    const prodDoc = doc(db, 'Productos', id)
    const producto = await getDoc(prodDoc)
    return { id: producto.id, ...producto.data()}
}

//Servicio para filtrar por category

//Servicio para crear orden
export const createOrder = async (newOrder) => {
    try{
        const orderCollection = collection(db, "Ordenes")
        const OrderDoc = addDoc(orderCollection, newOder)
        console.log(OrderDoc)
        return orderDoc
    } catch(err){
        console.log(err)
    }
}