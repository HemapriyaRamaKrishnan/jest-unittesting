import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchers',
  templateUrl: './matchers.component.html',
  styleUrls: ['./matchers.component.css']
})
export class MatchersComponent implements OnInit{
timeOutVal: string = 'test';
  shpooingList: any[] = [];


ngOnInit(): void {
  this.checkSetTimeOut();
}
compileErrorCode () {
  throw new Error('You are using old version of angular')
}

checkSetTimeOut() {
  setTimeout(() => {
    this.timeOutVal = 'SetTimeOutCheck'
  },1000)
}

}
