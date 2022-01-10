import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  correctAnswer: string = '';
  inCorrectAnswer: string = '';
  points: string = '';

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.correctAnswer = localStorage.getItem("correctAnswer");
    this.inCorrectAnswer = localStorage.getItem("inCorrectAnswer");
    this.points = localStorage.getItem("points");
  }

  reviewQuiz() {
    this.route.navigate(['/review']);
    
  }

  resetQuiz() {
    this.route.navigate(['/welcome']);
    localStorage.clear();
  }

}
