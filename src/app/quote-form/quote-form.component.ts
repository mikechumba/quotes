import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Quotes } from './../quotes/quotes';
import { QuoteSamples } from './../quotes/sample-quotes';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss']
})
export class QuoteFormComponent implements OnInit {

  constructor() { }

  quotesForm = new FormGroup ({
    name: new FormControl('',
      [Validators.required]
    ),
    author: new FormControl('',
      [Validators.required]
      ),
    quote: new FormControl('',
      [Validators.required]
    )
  });

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

  publish() {
    console.log(this.quotesForm.value);
  }
}
