import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  quote:Quote = {
  	quote:'',
  	author:'',
  	votes:0
  }


  @Output() quoteEventEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addQuoteEvent(){
  	this.quoteEventEmitter.emit(this.quote);
    this.quote = new Quote('','');
  }

}
