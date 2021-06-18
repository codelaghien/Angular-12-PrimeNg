import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Link } from '../link.model';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
})
export class PageNotFoundComponent implements OnInit {
  public counter = 5;
  public link: string = '';
  private authorId = 1;
  public links: Link[] | undefined;
  public name: string = '';

  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    console.log('PageNotFound =', this.router.url);
    this.name = this.router.url.toLowerCase().substr(1);
    this.dataService.getLinks(this.authorId).subscribe((data: Link[]) => {
      this.links = data;
      // console.log('this.links =', this.links, this.name);
      const link = this.links.find(
        (link) => link.title.toLowerCase() === this.name
      )?.link;
      this.link = link ? link : '';
      if (this.link !== '') {
        const interval = setInterval(() => {
          this.counter--;
          if (this.counter === 0) {
            clearInterval(interval);
            console.log('Open link: ', this.link);
            window.open(this.link, '_self');
          }
        }, 1000);
      }
    });
    // http://localhost:4200/
    // http://localhost:4200/google
    // http://localhost:4200/yahoo
    // http://localhost:4200/codelaghien
    // http://localhost:4200/apple
  }
}
