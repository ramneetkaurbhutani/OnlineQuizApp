import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAnswer } from '../common/user-answer';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private httpClient: HttpClient) { }

  quesUrl = "assets/questions.json";
  userAnsUrl = "http://localhost:8000/userAnswer";
  userAnswer: UserAnswer = new UserAnswer();
  correctAnswer: number = 0;
  inCorrectAnswer: number = 0;
  name: string = '';
  points: number = 0;

  questionList: any = [];
  currentQuestion: number = 1; 
  userAnswerObj: UserAnswer[] = [];

  getQuestionsFromJSON() {
    return this.httpClient.get<any>(this.quesUrl);
  }

  saveUserAnswers() {
   this.userAnswer.questionIndex = parseInt(localStorage.getItem("questionIndex"));
   this.userAnswer.answer = JSON.parse(localStorage.getItem("option"));
    return this.httpClient.post<UserAnswer>(this.userAnsUrl, this.userAnswer).pipe(map((res : any) => {
      return res;
    }));
  }
}


