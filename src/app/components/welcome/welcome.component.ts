import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild("name") nameKey!: ElementRef;
  nameValue: string;
  constructor(private route: Router) { }

  ngOnInit(): void {
    localStorage.clear();
  }

  startQuiz() {
    this.nameValue = this.nameKey.nativeElement.value;
    localStorage.setItem("name", this.nameKey.nativeElement.value);
    this.route.navigate(['/quiz']);
  }

}
