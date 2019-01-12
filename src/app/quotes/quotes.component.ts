import { Component, OnInit } from '@angular/core';
import { QuoteSamples } from './sample-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  constructor() { }

  quotes = QuoteSamples;

  ngOnInit() {
  }

  showForm() {
    $('.row').hide();
    $('app-component-form').show();
  }

}
