import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  info: any = {}
  saveData() {
    console.log(this.info);
  }
  constructor(private route: Router) {}
  scorePage() {
    this.route.navigate(['/score']);
  }
}