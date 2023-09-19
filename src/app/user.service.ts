import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
 
  getUser(){
       return [
                {UserID:'id1',name:'Name1',password:'1234', Designation:'developer',Active:'True',Department:'IT',phone:'00000',Email:'@itec',client:'name',Relese:'fulse'},
                {UserID:'id2',name:'Name2',password:'1232224', Designation:'deigner',Active:'True',Department:'finance',phone:'00000',Email:'@itec',client:'name',Relese:'fulse'},
                {UserID:'id3',name:'Name3',password:'333333', Designation:'deigner',Active:'False',Department:'HR',phone:'00000',Email:'@itec',client:'name',Relese:'fulse'}
];
}
}