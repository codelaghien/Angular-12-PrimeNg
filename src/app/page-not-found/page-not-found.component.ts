import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  public counter = 5;
  public link = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('PageNotFound =', this.router.url);
    this.link = 'https:/' + this.router.url;
    const interval = setInterval(() => {
      this.counter--;
      if (this.counter === 0) {
        clearInterval(interval);
        console.log('Open link: ', this.link);
        // window.open(this.link, '_self');
      }
    }, 1000);

    // http://localhost:4200/google.com
    // http://localhost:4200/yahoo.com
    // http://localhost:4200/apple.com
  }
}
