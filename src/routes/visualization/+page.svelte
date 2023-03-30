<script>
    
    
    export let data;
    let notes = data.notes;
    /*import { app } from '../../firebase'*/
    import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";

    const db = getFirestore();

    console.log(db);
    onSnapshot(collection(db, 'notes'), snapshot => {
        let changes = snapshot.docChanges();
        console.log(changes)
    })
</script>

<ul>
	{#each notes as note}
		<li>{note.note}</li>
	{/each}
</ul>