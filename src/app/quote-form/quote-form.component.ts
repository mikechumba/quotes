import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Quotes } from './../quotes/quotes';
import { QuoteSamples } from './../quotes/sample-quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {

  quotesForm: FormGroup;

  votes: number;

  constructor(public formbuilder: FormBuilder) {
    this.quotesForm = new FormGroup ({
      name: new FormControl(),
      author: new FormControl(),
      quote: new FormControl(),
      timePublished: new FormControl(),
      upVotes: new FormControl(),
      downVotes: new FormControl()
    });
  }


  ngOnInit() {
  }

  get name() {
    return this.quotesForm.get('name');
  }

  get author() {
    return this.quotesForm.get('author');
  }

  get quote() {
    return this.quotesForm.get('quote');
  }

  currentDate() {
    return new Date();
  }

  defaultVote() {
    this.votes = 0;
    return this.votes;
  }


  publish() {
    const result: Quotes = this.quotesForm.value;

    QuoteSamples.push(result);

    console.log(this.quotesForm.value);

    this.quotesForm.reset();

  }

}
