import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IAuth } from '../modals/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = environment.apiUrl;


  loggedIn : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

constructor( private http : HttpClient) { }

// geneRALLI SHUD TO CONNECT TO API AND IF SUCSSEEDDED AND THE TER RESPONDED TOKEN TO LOCAL-STOREGE
loging(model : any){

  console.log( 'in service beefore -'  +this.loggedIn.value);
  
  if(model.username === 'admin' && model.password === '1234'){
    localStorage.setItem('username' , JSON.stringify(model));
    this.loggedIn = new BehaviorSubject<boolean>(true);
  }

  return new Observable<boolean>() ; 



  // return this.http.post(this.baseUrl +'login' , model).pipe(
  //   map((res: any)=> {
  //     const user = res ;
  //     if(user.result.succeeded){
  //       localStorage.setItem('token' , user.token);
  //     }
  //   })
  // )


}

getStatus() : BehaviorSubject<boolean>{
  console.log( 'in service after -'  +this.loggedIn.value);

  return this.loggedIn ; 

  
}

// setStatus(status : boolean) : BehaviorSubject<boolean>{
//   this.loggedIn
// }

}
