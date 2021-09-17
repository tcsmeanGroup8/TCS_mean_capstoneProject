import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms';
import{UserService} from '../services/user.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {

  msg?:String;

  ticketRef = new FormGroup({
    userId:new FormControl(''),
    description:new FormControl('')
  });


  constructor(public userSer:UserService) { }

  ngOnInit(): void {
  }

  submitTicket(){
    let ticket = this.ticketRef.value;
    this.userSer.raiseTicket(ticket).subscribe(result=>this.msg=result,error=>console.log(error));
    this.ticketRef.reset();
  }

}
