import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  constructor(private http: HttpClient){}
  
  onPetsCreate(pets: {name: string; code: number; type: string; furcolor: string; country: string}){
    return this.http.post("http://localhost:8080/pets", pets).subscribe();
  }
}