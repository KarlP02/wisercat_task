import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
  id: any;
  pet: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  onPetsEdit(pets: {name: string; code: number; type: string; furcolor: string; country: string}){
    return this.http.put("http://localhost:8080/pets/" + this.id, pets).subscribe();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get("id");
    })
    return this.http.get("http://localhost:8080/pets/" + this.id).subscribe((data) => this.pet = data);
  }
}
