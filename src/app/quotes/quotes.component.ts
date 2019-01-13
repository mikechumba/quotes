import { Component, OnInit } from '@angular/core';
import { QuoteSamples } from './sample-quotes';


@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})

export class QuotesComponent implements OnInit {

  add = true;

  constructor() { }

  quotes = QuoteSamples;

  ngOnInit() {
  }

  showForm() {
    $('.row').toggle();
    $('.form-group').toggle();
    this.add = !this.add;
  }

}
