import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.page.html',
  styleUrls: ['./score.page.scss'],
})
export class ScorePage implements OnInit {
  no: number = 0;
  constructor(private route: Router) {}
  back() {
    this.route.navigate(['/home']);
  }

  ngOnInit() {}

  up() {
    this.no++;
  }

  down() {
    if (this.no > 0) {
      this.no--;
    } else {
    }
  }
}
