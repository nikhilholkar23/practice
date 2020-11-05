import { Component, OnInit } from '@angular/core';
import { HttpClientService, Employee } from 'src/app/service/httpclient.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.less']
})
export class ListuserComponent implements OnInit {
  //employees: Employee[];
  employees:Employee[];
  displayedColumns: string[] = ["name", "designation", "salary"];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.httpClientService
    .getEmployees()
    .subscribe(response => this.handleSuccessfulResponse(response));
}

handleSuccessfulResponse(response) {
  this.employees = response;
}


}
