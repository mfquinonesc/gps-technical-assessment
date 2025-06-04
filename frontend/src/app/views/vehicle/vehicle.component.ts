import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/models/vehicle';
import { VehicleService } from 'src/app/services/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css'],
})
export class VehicleComponent {
  vehicleForm = this.fb.group({
    id: [0],
    brand: ['', Validators.required],
    applicant: ['', Validators.required],
    company_brand: ['', Validators.required],
  });

  selectedVehicle: Vehicle | undefined = undefined;
  vehicles: Vehicle[] = [];
  isEditing: boolean = false;
  isCreating: boolean = false;

  constructor(private service: VehicleService, private fb: FormBuilder) {
    this.getAll();
  }

  get id() {
    return this.vehicleForm.controls.id;
  }

  get brand() {
    return this.vehicleForm.controls.brand;
  }

  get applicant() {
    return this.vehicleForm.controls.applicant;
  }

  get company_brand() {
    return this.vehicleForm.controls.company_brand;
  }

  addNew() {
    this.isCreating = true;
    this.isEditing = false;
    this.vehicleForm.reset();
  }

  edit(id: number) {
    this.isCreating = false;    
    this.selectedVehicle = this.vehicles.find((v) => {
      return v.id == id;
    });

    this.isEditing = this.selectedVehicle != undefined;

    if (this.isEditing) {
      this.vehicleForm.patchValue({ ...this.selectedVehicle });
    }
  }

  getAll() {
    this.service.getAll().subscribe({
      next: (value) => {
        this.vehicles = value as Vehicle[];
      },
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe({
      next: (value) => {
        this.getAll();
      },
    });
  }

  create() {
    const vehicle = this.vehicleForm.value as Vehicle;

    if (this.vehicleForm.valid) {
      this.service.create(vehicle).subscribe({
        next: (value) => {
          this.getAll();
        },
        complete:() =>{
          this.cancel();
        },
      });
    }
  }

  update() {
    const vehicle = this.vehicleForm.value as Vehicle;

    if (this.vehicleForm.valid) {
      this.service.update(this.selectedVehicle?.id!, vehicle).subscribe({
        next: (value) => {
          this.getAll();
          this.selectedVehicle = undefined;
        },
        complete:()=> {
          this.cancel();
        },
      });
    }

   
  }

  cancel() {
    this.vehicleForm.reset();
    this.isCreating = false;
    this.isEditing = false;
  }
}
