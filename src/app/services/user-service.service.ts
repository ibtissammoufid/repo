import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable, pipe } from 'rxjs';
import {map} from 'rxjs/operators';

export interface User{
  email: string;
  id?: string;
  password: string;
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private usersCollection: AngularFirestoreCollection<User>; 

  private users: Observable<User[]>;

  constructor(db: AngularFirestore) {
    this.usersCollection=db.collection<User>('users');
    this.users=this.usersCollection.snapshotChanges().pipe(
      map(actions=>{
        return actions.map(a=>{
          const data=a.payload.doc.data();
          const id=a.payload.doc.id;
          return {id, ...data};
        })
      })
    );
   }

   getusers() {
    return this.users;
  }
 
  getUser(id) {
    return this.usersCollection.doc<User>(id).valueChanges();
  }
 
  updateUser(User: User, id: string) {
    return this.usersCollection.doc(id).update(User);
  }
 
  addUser(User: User) {
    return this.usersCollection.add(User);
  }
 
  removeUser(id) {
    return this.usersCollection.doc(id).delete();
  }
}
