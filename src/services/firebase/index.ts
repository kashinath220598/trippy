import {
  Firestore,
  getFirestore,
  doc,
  setDoc,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import { User } from "../jwt/interfaces";

export class FireStoreDb {
  fireStore: Firestore;

  constructor() {
    this.fireStore = getFirestore();
  }

  async setDocument(collection: string, id: string, data: any) {
    return new Promise((resolve, reject) => {
      const document = doc(this.fireStore, collection, id);
      setDoc(document, data)
        .then((data) => resolve(data))
        .catch((e) => {
          console.error(e);
          reject(e);
        });
    });
  }

  async getUser(userName: string) {
    return new Promise((resolve: (user: User) => void, reject) => {
      const userQuery = query(collection(this.fireStore, "users"));
      getDocs(userQuery)
        .then(({ docs }) => {
          const user = docs.find((user) => user.data()?.username === userName);
          if (!user) {
            throw new Error("Invalid username");
          }
          resolve({
            firstName: user?.data()?.firstName,
            lastName: user?.data()?.lastName,
            userName: user?.data()?.userName,
            password: user?.data()?.password,
          });
        })
        .catch((e) => {
          console.error(e);
          reject(e);
        });
    });
  }
}
