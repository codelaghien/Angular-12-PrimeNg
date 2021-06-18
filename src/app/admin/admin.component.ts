import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Link } from '../link.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService],
})
export class AdminComponent implements OnInit {
  public links: Link[] | undefined;
  public selectedLink: Link | undefined;
  private authorId = 1;
  public newLink: Link | undefined;

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {}

  public viewLink(link: Link): void {
    console.log('view Link', link);
    this.selectedLink = link;
  }

  public getSelectedClass(link: Link): string {
    if (!this.selectedLink) {
      return '';
    }
    return this.selectedLink.id === link.id ? 'selected' : 'nonSelected';
  }

  public addLink(): void {
    console.log('addLink');
    this.newLink = {
      id: 0,
      title: '',
      link: '',
      author: 'Huy Nguyễn',
      authorId: this.authorId,
    };
  }

  public cancelAddLink(): void {
    this.newLink = undefined;
    this.messageService.add({
      severity: 'info',
      summary: 'Thông báo',
      detail: 'Đã hủy',
    });
  }

  public saveLink(): void {
    // console.log('save Link', this.newLink);
    if (!this.newLink) {
      return;
    }
    this.dataService.postLink(this.newLink).subscribe((link) => {
      // console.log('result ', Link);
      this.links?.push(link);
      this.newLink = undefined;
      this.messageService.add({
        severity: 'success',
        summary: 'Thông báo',
        detail: 'Đã thêm thành công',
      });
    });
  }
}
