import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { UserAnswer } from 'src/app/common/user-answer';
import { QuizService } from 'src/app/service/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 1;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  interval$: any;
  progress: string = "0";
  
 
  

  constructor(private quizService: QuizService, private route: Router) { }

  ngOnInit(): void {
    localStorage.removeItem("correctAnswer");
    localStorage.removeItem("inCorrectAnswer");
    localStorage.removeItem("points");
    this.name = localStorage.getItem("name")!;
    this.getAllQuestions();
    this.startCounter();
    
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
    this.resetCounter();
    this.getProgressPercent();
  }

  previousQuestion() {
    this.currentQuestion--;
    this.resetCounter();
  }

  answer(currentQno: number, option:any) {
    

    if( currentQno === this.questionList.length) {
        this.stopCounter();
        this.route.navigate(['/result']);
        
    }
    if(option.correct) {
      this.points+= 10;
      this.correctAnswer++;
    } else {
      this.points-= 10;
      this.inCorrectAnswer++;
    }

    setTimeout(() => { 
      this.nextQuestion();
    },1000);

    

    localStorage.setItem("correctAnswer", JSON.stringify(this.correctAnswer));
    localStorage.setItem("inCorrectAnswer", JSON.stringify(this.inCorrectAnswer));
    localStorage.setItem("points", JSON.stringify(this.points));
    localStorage.setItem("questionIndex", JSON.stringify(currentQno));
    localStorage.setItem('option', JSON.stringify(option));
    
  }

  startCounter() {
    this.interval$ = interval(1000)
    .subscribe( val => {
      this.counter--;
      if(this.counter===0) {
        this.counter = 60;
        this.points-= 10;
        this.currentQuestion++;
        this.getProgressPercent();
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);

  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter=0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter=60;
    this.startCounter();
  }

  resetQuiz(currentQno: number) {
    if( currentQno === this.questionList.length) {
      this.stopCounter();
     this.route.navigate(['/result']);   
  }
    this.currentQuestion = 1;
    this.progress = "0";
    this.points = 0;
    this.questionList = '';
    this.getAllQuestions();
    this.resetCounter();  
   
  }

  getProgressPercent() {
    this.progress = (((this.currentQuestion - 1)/this.questionList.length)*100).toString();
    return this.progress;
  }

  submit() {
    this.route.navigate(['/result']);
  }
}
