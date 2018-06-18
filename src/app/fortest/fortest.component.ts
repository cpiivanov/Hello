import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fortest',
  templateUrl: './fortest.component.html',
  styleUrls: ['./fortest.component.css']
})
export class FortestComponent implements OnInit {
  showPass = false;
  masiv = [];
  constructor() { }

  ngOnInit() {
  }

  toggleShowPass(){
    this.showPass = !this.showPass;
    this.masiv.push(Date());
  }
}
