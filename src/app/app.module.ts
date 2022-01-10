import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuizComponent } from './components/quiz/quiz.component'
import { HeaderComponent } from './components/header/header.component';
import { ResultComponent } from './components/result/result.component';
import { ReviewComponent } from './components/review/review.component';
import { ChangeBgDirective } from './directive/change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuizComponent,
    HeaderComponent,
    ResultComponent,
    ReviewComponent,
    ChangeBgDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
