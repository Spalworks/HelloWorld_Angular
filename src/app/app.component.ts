import { Component } from '@angular/core';
import { delay, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello {{this.username}} !! Welcome to Bridgelabz.';
  imgUrl = "../assets/BL_logo.jpg"
  url = "https://www.bridgelabz.com/"
  userName: String = ""
  
  ngOnInit(): void{
    this.title = "Hello From Bridgelabz.";
  }

  onClick($event : any){
    console.log("Clicked on bridgelabz logo!!!", $event)
    window.open(this.url, "_blank");
  }

}
