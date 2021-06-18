import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { DataService } from '../data.service';
import { Question } from '../question.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [MessageService],
})
export class AdminComponent implements OnInit {
  public questions: Question[] | undefined;
  public selectedQuestion: Question | undefined;
  public newQuestion: Question | undefined;

  constructor(
    private dataService: DataService,
    private messageService: MessageService
  ) {}

  public ngOnInit(): void {
    this.dataService.getQuestions().subscribe((data: Question[]) => {
      this.questions = data;
    });
  }

  public viewQuestion(question: Question): void {
    console.log('view Question', question);
    this.selectedQuestion = question;
  }

  public getSelectedClass(question: Question): string {
    if (!this.selectedQuestion) {
      return '';
    }
    return this.selectedQuestion.id === question.id
      ? 'selected'
      : 'nonSelected';
  }

  public addQuestion(): void {
    console.log('addQuestion');
    this.newQuestion = {
      id: 0,
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: 0,
    };
  }

  public cancelAddQuestion(): void {
    this.newQuestion = undefined;
    this.messageService.add({
      severity: 'info',
      summary: 'Thông báo',
      detail: 'Đã hủy',
    });
  }

  public saveQuestion(): void {
    console.log('save Question', this.newQuestion);
    if (!this.newQuestion) {
      return;
    }
    this.dataService.postQuestion(this.newQuestion).subscribe((question) => {
      // console.log('result question', question);
      this.questions?.push(question);
      this.newQuestion = undefined;
      this.messageService.add({
        severity: 'success',
        summary: 'Thông báo',
        detail: 'Đã thêm thành công',
      });
    });
  }

  public trackByFn(index: number, item: any): number {
    return index;
  }
}
