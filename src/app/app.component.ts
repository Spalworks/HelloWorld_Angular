import { Component } from '@angular/core';
import { delay, timeInterval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  
  ngOnInit(): void{
    this.title = "Hello From Bridgelabz.";
  }
}
