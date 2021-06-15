import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular12PrimeNg';
  public items: MenuItem[] = [];
  public notes = null;
  public selectedNote: any;

  constructor(private dataService: DataService) {}

  public ngOnInit() {
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

    this.dataService.getNotes(1).subscribe((data) => {
      this.notes = data;
    });
  }

  public editNote(note: any) {
    console.log('edit note', note);
    this.selectedNote = note;
  }
}
