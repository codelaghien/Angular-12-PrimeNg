import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { DataService } from './data.service';
import { Note } from './note.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public title = 'Angular12PrimeNg';
  public items: MenuItem[] = [];
  public notes: Note[] | undefined;
  public selectedNote: Note | undefined;
  private authorId = 1;

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

    this.dataService.getNotes(this.authorId).subscribe((data: Note[]) => {
      this.notes = data;
    });
  }

  public viewNote(note: Note) {
    console.log('view note', note);
    this.selectedNote = note;
  }
}
