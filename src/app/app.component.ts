import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TEXTS } from '../../text.js';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {

  text = TEXTS;

  firstNumber: number = 0;
  secondNumber: number = 0;
  result: number = 0;

  addNumbers() {
    this.result = this.firstNumber + this.secondNumber;
  }

  subtractNumbers(){
    this.result = this.firstNumber - this.secondNumber;
  }

  multiplyNumbers(){
    this.result =  this.firstNumber * this.secondNumber;
  }

  divideNumbers(){
    this.result = this.firstNumber / this.secondNumber;
  }



}
