import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  public questionList: any = [];
  public currentQuestion: number = 1;
  progress: string = "0";


  constructor(private quizService: QuizService, private route: Router) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.quizService.getQuestionsFromJSON().subscribe(
      res => {
        this.questionList = res.questions;
      }
    );
  }

  nextQuestion() {
    this.currentQuestion++;
    this.getProgressPercent();
  }

  previousQuestion() {
    this.currentQuestion--;
    this.getProgressPercent();
  }

  getProgressPercent() {
    this.progress = (((this.currentQuestion)/this.questionList.length)*100).toString();
    return this.progress;
  }

  backToWelcomePage() {
    if(this.currentQuestion === this.questionList.length) {
      localStorage.clear();
      this.route.navigate(['/welcome']);
    }
  }
}
