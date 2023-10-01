import { addDoc, collection, getDocs } from 'firebase/firestore/lite';
import db from './firebase';

export interface Wish {
  createdBy: string;
  content: string;
}

const wishesCol = collection(db, 'wishes');

export async function getWishes() {
  const wishesSnapshot = await getDocs(wishesCol);
  const wishesList = wishesSnapshot.docs.map((doc) => doc.data());

  return wishesList;
}

export async function createWish(wish: Wish) {
  const docRef = await addDoc(wishesCol, wish);

  console.log('Creating a new wish with id ', docRef.id);
}
