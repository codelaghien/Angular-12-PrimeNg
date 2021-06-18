import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [MessageService],
})
export class TestComponent implements OnInit {
  public questions: Question[] | undefined;
  public collapsed: boolean = true;
  public answers: number[] = [];
  public percentCorrect: string = '';

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.dataService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
      this.answers = [];
      this.questions.forEach((question, index) => {
        this.answers[index] = 0;
      });
      console.log('data', this.questions, this.answers);
    });
  }

  public test(): void {
    console.log('test', this.answers);
  }

  public traLoiHet(): boolean {
    return this.answers && !this.answers.includes(0);
  }

  public kiemTraKetQua(): void {
    if (this.traLoiHet() && this.questions) {
      let dung = 0;
      this.questions.forEach((question, index) => {
        if (+question.correctAnswer === +this.answers[index]) {
          dung++;
        }
        console.log(
          'Câu số ' +
            (index + 1) +
            ': ' +
            (+question.correctAnswer === +this.answers[index] ? 'đúng' : 'sai')
        );
      });
      this.percentCorrect = (dung * 100) / this.answers.length + '%';
    }
  }
}
