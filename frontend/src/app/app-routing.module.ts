import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { VehicleComponent } from './views/vehicle/vehicle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },      
  { path: 'vehicle', component: VehicleComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
