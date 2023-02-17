import { Component, OnInit } from '@angular/core';
import { AngularFireFunctions } from '@angular/fire/compat/functions';
import { map } from 'rxjs';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(public functions: AngularFireFunctions) { }

  ngOnInit(): void {
    this.callMethod();
   
  }

  callMethod(){
    console.log("hit");
    const callable = this.functions.httpsCallable("addUser");
    callable({Email: "sanjaykrishna1203@gmail.com", Name:"Sanjay Krishna S R"}).subscribe((data: any)=>{
      console.log(data);
    })
}
}
