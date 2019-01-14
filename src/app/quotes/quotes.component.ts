import { Component, OnInit } from '@angular/core';
// import { QuoteSamples } from './sample-quotes';
import { Quotes } from './quotes';
import { QuoteFormComponent } from './../quote-form/quote-form.component';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  add = true;

  constructor() { }

  quotes = [
    new Quotes('Andrew Kein', 'Narcotics Anonymous',
      'Insanity is doing the same thing, over and over again, but expecting different results.', 0, 0, '5 Hrs Ago'),
    new Quotes('Andrew Kein', 'Narcotics Anonymous',
      'Insanity is doing the same thing, over and over again, but expecting different results.', 0, 0, '5 Hrs Ago')
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

  ngOnInit() {
  }

  showForm() {
    $('.form-group').toggle();
    this.add = !this.add;
  }

}
