import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-comments',
  templateUrl: './landing-comments.component.html',
  styleUrls: ['./landing-comments.component.scss'],
})
export class LandingCommentsComponent {
  comments: {
    comment: string;
    username: string;
    link: string;
  }[] = [
    {
      comment:
        "I've been using a spreadsheet someone made where you can pretty easily copy/paste, but this may be even simpler.",
      username: 'u/Cunningcory',
      link: '',
    },
    {
      comment: 'You’re the hero we needed but did not deserve.',
      username: 'u/AmBlackout',
      link: '',
    },
    {
      comment: 'Doing god’s work dudes.',
      username: 'u/sa1thy',
      link: '',
    },
    {
      comment:
        'Thank you so much for this! Trying to calculate pities and such is such a pain.',
      username: 'u/TheresNoThe_Sis',
      link: '',
    },
    {
      comment: 'You are a god send I lost track of my pity for Venti.',
      username: 'u/Thumpkin2',
      link: '',
    },
    {
      comment: 'Been using it for a few months and I recommend it!',
      username: 'u/Tchainese',
      link: '',
    },
  ];

  page = 0;
  readonly numberPerPage = 2;
}
