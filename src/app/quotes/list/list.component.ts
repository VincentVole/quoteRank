import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() quotesList:Quote[];

  @Output() voteEmitter = new EventEmitter();
  @Output() deleteVoteEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteChg($event, index, direction){
  	this.voteEmitter.emit({index: index, direction: direction});
  }

  deleteVote($event, index){
  	this.deleteVoteEmitter.emit(index);
  }
}
