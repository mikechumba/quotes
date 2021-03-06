import { Component, OnInit } from '@angular/core';
// import { QuoteSamples } from './sample-quotes';
import { Quotes } from './quotes';
import { QuoteFormComponent } from './../quote-form/quote-form.component';
import {TimeAgoPipe} from 'time-ago-pipe';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  add = true;
  voted = 0;
  notVoted = 0;

  currentUpVotes: number;

  constructor() { }

  quotes = [
    new Quotes('Andrew Kein', 'Narcotics Anonymous',
      'Insanity is doing the same thing, over and over again, but expecting different results.', 0, 0, 
      new Date('Thu Jan 4 2019 10:16:46 GMT+0300 (East Africa Time)')),
    new Quotes('John Doe', 'George Carlin',
      'Inside every cynical person, there is a disappointed idealist.', 0, 0, 
      new Date('Thu Jan 15 2019 10:16:46 GMT+0300 (East Africa Time)')),
    new Quotes('Jane Doe', 'V (Alan Moore)',
      `We are told to remember the idea, not the man, because a man can fail. 
      He can be caught, he can be killed and forgotten, but 400 years later, an idea can still change the world.`, 0, 0, 
      new Date('Thu Jan 17 2019 10:16:46 GMT+0300 (East Africa Time)')),

  ];

  addQuote(quote) {
    const quoteLength = this.quotes.length;
    this.quotes.push(quote);
  }
  // deleteQuote() {
  //   this.quotes.splice();
  // }

  deleteQuote(quoteInput) {
    const index: number = this.quotes.indexOf(quoteInput);
    if (index !== -1) {
      this.quotes.splice(index, 1);
    }
  }

  upVotes(quoteInput) {
    this.voted ^= 1;
    this.currentUpVotes--;
    const index: number = this.quotes.indexOf(quoteInput);
    this.quotes[index].upVotes += this.voted;
    // if (index !== -1 && this.voted) {
    //   this.quotes[index].upVotes = this.voted;
    //   $('#upvote').css('color', '#4EA699');
    // } else {
    //   this.quotes[index].upVotes--;
    //   $('#upvote').css('color', '#474747');
    // }
    this.currentUpVotes = this.quotes[index].upVotes;
  }

  downVotes(quoteInput) {
    this.notVoted ^= 1;
    this.currentUpVotes--;
    const index: number = this.quotes.indexOf(quoteInput);
    this.quotes[index].downVotes += this.notVoted;
    // if (index !== -1 && this.notVoted) {
    //   this.quotes[index].downVotes--;
    //   $('#downvote').css('color', '#4EA699');
    // } else {
    //   this.quotes[index].downVotes++;
    //   $('#downvote').css('color', '#474747');
    // }
    this.currentUpVotes = this.quotes[index].upVotes;
  }

  ngOnInit() {
  }

  showForm() {
    $('.form-group').toggle();
    this.add = !this.add;
  }

  highlight(quoteInput) {
    const index: number = this.quotes.indexOf(quoteInput);
    if (this.currentUpVotes > 5) {
      $('.card').css('background-color', '#C2C1C2');
    }
  }

}
