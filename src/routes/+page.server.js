import { db } from '../firebase'
import { collection, addDoc } from "firebase/firestore"; 


export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData()
        console.log(formData)

        const name = formData.get('name')
        const note = formData.get('note')
        const id = crypto.randomUUID()
        console.log(name)
        if (name.length < 2 || !name) {
            return {
                error: true,
                message: 'Name must be at least two characters.',
                name,
                note

            }
        }

        try {
            const docRef = await addDoc(collection(db, "notes"), {
                name,
                note
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
            return {
                error: true,
                message: 'server database error'
            }
          }
        return {
            success: true,
        }
    }
}