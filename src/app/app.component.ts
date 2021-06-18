import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Link } from './link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular12PrimeNg';
  items: MenuItem[] = [];
  public links: Link[] | undefined;
  public selectedLink: Link | undefined;
  private authorId = 1;
  public newLink: Link | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [{ label: 'Project' }, { label: 'Other' }],
          },
          { label: 'Open' },
          { label: 'Quit' },
        ],
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        items: [
          { label: 'Delete', icon: 'pi pi-fw pi-trash' },
          { label: 'Refresh', icon: 'pi pi-fw pi-refresh' },
        ],
      },
    ];
  }

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
