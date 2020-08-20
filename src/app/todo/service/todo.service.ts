import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireList} from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList : AngularFireList<any>;
  constructor(private firebasedb : AngularFireDatabase) { }

  getToDoList()  {
  	this.toDoList= this.firebasedb.list('titles');
  	return this.toDoList;
  }
  addTitle(title: string)  {
  	this.toDoList.push({ 
  		title:title,
  		isChecked: false
  	});
  }
  checkOrUncheck(key:string, flag: boolean) {
  	this.toDoList.update( key, {isChecked:flag});
  }

  removeTitle(title:string) {
  	this.toDoList.remove(title);
  }
}
