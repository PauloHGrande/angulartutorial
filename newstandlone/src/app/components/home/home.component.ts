import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReversePipe } from '../reverse.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, MatCardModule, ReversePipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Angular 19 Tutorial';
  subtitle = 'Angular for begginers';
  todaydate = new Date();
  salary = 1000;
  _obj={"name":"NT"}

  isdisabled = true;

  Changetitle() {
    this.title = "Angular 19 Full Tutorial..."
  }

  updatetitle(event:any) {
    this.title = event.target.value;
  }
}
