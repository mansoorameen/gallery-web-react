import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

const useStorage = (file) => {
    const [ progress, setProgress ] = useState(0); //for the progress bar on ui
    const [ error, setError ] = useState(null); 
    const [ url, setUrl ] = useState(null); //url of the image after it is uploaded

    //useeffect fires when app.js is loaded
    useEffect(() => {
        //making reference
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({ url: url, createdAt});
            setUrl(url);
         } )

    }, [file]); //useeffect fires everytime dependency(file) is changed to upload that file

    return { progress, url, error }
}

export default useStorage;