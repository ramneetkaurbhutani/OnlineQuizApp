import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { ResultComponent } from './components/result/result.component';
import { ReviewComponent } from './components/review/review.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: "review", component: ReviewComponent},
  {path: "result", component: ResultComponent},
  {path: "welcome", component: WelcomeComponent},
  {path: "quiz", component: QuizComponent},
  {path: "", redirectTo: "/welcome", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
