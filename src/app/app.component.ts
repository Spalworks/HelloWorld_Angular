import { IfStmt } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello {{this.username}} !! Welcome to Bridgelabz.';
  imgUrl = "../assets/BL_logo.jpg"
  url = "https://www.bridgelabz.com/"
  userName: string = ""
  nameError: string = "";
  
  ngOnInit(): void{
    this.title = "Hello From Bridgelabz.";
  }

  onClick($event : any){
    console.log("Clicked on bridgelabz logo!!!", $event)
    window.open(this.url, "_blank");
  }

  onInput($event: any){
    console.log("Change Event occured!!!", $event.data)
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')

    if (nameRegex.test(this.userName)) {
      this.nameError = '\u2714'  //what to do if i want to change color of this symbol ONLY
      return
    }
    this.nameError = "Incorrect Name!!!"
    if (this.userName.length == 0) {
      this.nameError = ""
    }
  }

}
