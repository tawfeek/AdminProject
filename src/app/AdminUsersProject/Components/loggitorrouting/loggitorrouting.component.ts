import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loggitorrouting',
  templateUrl: './loggitorrouting.component.html',
  styleUrls: ['./loggitorrouting.component.css']
})
export class LoggitorroutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.location.href = 'https://loggitor-fe.herokuapp.com/home';
  }

}
