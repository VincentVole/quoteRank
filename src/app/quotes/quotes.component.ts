import { Component, OnInit } from '@angular/core';
import { Quote } from './quote'

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];

  constructor() { }

  ngOnInit() {
  	this.quotes.push(new Quote("To be, or not to be", "Prince Hamlet"));
  	this.quotes.push(new Quote("Let's get fucked.", "Maxwell Gibbard"));
  }

  addQuote(eventData){
  	this.quotes.push(eventData);
  }

  voteChg(eventData){
  	if(eventData.direction == 'up'){
  		this.quotes[eventData.index].votes++;
  	}
  	else if(eventData.direction == 'down'){
  		this.quotes[eventData.index].votes--;
  	}
  	this.quotes.sort((a,b)=>{
  		if(a.votes>b.votes){
  			return -1;
  		}else if( a.votes < b.votes){
  			return 1;
  		}else{
  			return 0;
  		}

  	});
  }

  deleteVote(eventData){
  	this.quotes.splice(eventData, 1);
  }
}
