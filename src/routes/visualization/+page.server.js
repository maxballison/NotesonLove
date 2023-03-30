import { collection,query, getDocs, where, onSnapshot } from "firebase/firestore";
import { db } from '../../firebase'


export const load = async() => {
    let colRef = collection(db,'notes');
    let data = await getDocs(query(colRef));
    let notes = [];
    data.forEach((doc) => {
        notes.push({ ...doc.data(), id: doc.id})
    })
    return {
        notes
    }
}
