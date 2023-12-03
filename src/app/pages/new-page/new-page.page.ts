import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.page.html',
  styleUrls: ['./new-page.page.scss'],
})
export class NewPagePage implements OnInit {

  constructor(private router: Router) { }

  goToChat() {
    this.router.navigate(['/chat']);
  }

  ngOnInit() {
  }

}
