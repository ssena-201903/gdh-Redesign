import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import newsData from "./news.json";

const pushDataToFirestore = async () => {
    try {
        const collectionRef = collection(db, "news");

        for (const item of newsData) {
            await addDoc(collectionRef, item);
            console.log("json item added:", item);
        }
        console.log("all documents of newsData added")
    } catch (error) {
        console.log("error adding documents: ", error);
    }
};

export default pushDataToFirestore;
