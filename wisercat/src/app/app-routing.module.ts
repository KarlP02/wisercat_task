import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPetComponent } from './components/add-pet/add-pet.component';
import { PetListComponent } from './components/pet-list/pet-list.component';
import { EditPetComponent } from './components/edit-pet/edit-pet.component';

const routes: Routes = [
  {path: '', component: AddPetComponent},
  {path: 'table', component: PetListComponent},
  {path: 'edit/:id', component: EditPetComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
