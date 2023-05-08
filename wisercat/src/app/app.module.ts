import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { TableComponent } from './components/table/table.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';
import { EditFormComponent } from './components/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    AddPetComponent,
    TableComponent,
    PetListComponent,
    FormComponent,
    EditPetComponent,
    EditFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
