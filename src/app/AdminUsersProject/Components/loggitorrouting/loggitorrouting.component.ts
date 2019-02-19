import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loggitorrouting',
  templateUrl: './loggitorrouting.component.html',
  styleUrls: ['./loggitorrouting.component.css']
})
export class LoggitorroutingComponent implements OnInit {

  routid: string;
  constructor( private route: ActivatedRoute) {
   }

  ngOnInit() {

    this.routid = this.route.snapshot.queryParamMap.get('id');
    console.log('this.routid ' + this.routid);
    this.sendToActionHomewithId(this.routid);
  }


  sendToActionHomewithId(routid: string): void {
    if (this.routid != null) {
      window.location.href =
      'https://loggitor1.herokuapp.com/src/' + this.routid;
    }
  }

}
