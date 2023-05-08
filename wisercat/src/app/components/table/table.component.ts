import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pets: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    return this.http.get("http://localhost:8080/pets").subscribe((data) => this.pets = data);
  }
}
