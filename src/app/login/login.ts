import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  handleclick(){
    alert("function called ggvv ddd gg   ")
  }
  handleevent(event:any){
    console.log(event)

  }
  
}
