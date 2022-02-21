import { AfterViewChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {

  loggedIn : BehaviorSubject<boolean> | undefined ;
  status! : boolean
  constructor(private auth: AuthService) { }


 
  ngOnInit(): void {

    this.stausCheck();
  }


  stausCheck(){

    this.status = true; 


    // this.auth.loggedIn.subscribe((data)=>{
    //   this.status = data
    //   console.log( "status" +this.status);
      
    // });
  }



}
