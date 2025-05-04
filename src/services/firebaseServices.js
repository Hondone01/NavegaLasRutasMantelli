import {
  addDoc, 
  collection, 
  doc, 
  getDocs, 
  getDoc, 
  query, 
  where,
} from "firebase/firestore"
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
export const getByCategory = async category => {
    const prodCollection = collection(db, 'Productos')
    const q = query(prodCollection, where('category', '==', category))
    const productos = await getDocs(q)
    return productos.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  }
//Servicio para crear orden
export const createOrder = async (newOrder) => {
    try{
        const orderCollection = collection(db, 'Ordenes')
        const orderDoc = await addDoc(orderCollection, newOrder)
        console.log(orderDoc)
        return orderDoc
    } catch(err){
        console.log(err)
        throw new Error (err)
    }
}