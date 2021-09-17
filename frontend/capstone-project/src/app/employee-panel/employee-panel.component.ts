import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-employee-panel',
  templateUrl: './employee-panel.component.html',
  styleUrls: ['./employee-panel.component.css']
})
export class EmployeePanelComponent implements OnInit {

  constructor(public home: HomeComponent) { }

  ngOnInit(): void {
    this.emp = this.home.userID;
  }

  emp = this.home.userID;

}
