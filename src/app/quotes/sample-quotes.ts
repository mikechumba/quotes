import { Quotes } from './quotes';
import { getLocaleTimeFormat } from '@angular/common';

export const QuoteSamples: Quotes[] = [
    {
        id: 1,
        quote: 'Insanity is doing the same thing, over and over again, but expecting different results.',
        name: 'Andrew Kein',
        author: 'Narcotics Anonymous',
        upVotes: 0,
        downVotes: 0,
        timePublished: '5 Hrs Ago',
    },
    {
        id: 1,
        quote: `Here's all you have to know about men and women: women are crazy, men are stupid. And the main reason women are crazy 
        is that men are stupid`,
        name: 'John Doe',
        author: 'George Carlin',
        upVotes: 0,
        downVotes: 0,
        timePublished: '6 Hrs Ago',
    },
    // {
    //     id: 1,
    //     quote: 'Women are crazy, men are stupid. And the main reason women are crazy is that men are stupid',
    //     name: 'John Doe',
    //     author: 'George Carlin',
    //     upVotes: 0,
    //     downVotes: 0,
    //     timePublished: '6 Hrs Ago',
    // }
];
