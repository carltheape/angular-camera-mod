import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { AssignmentRequest, AssignmentResponse } from "../models/assignment.model";
import { Camera } from "../models/camera.model";
import { Vehicle } from "../models/vehicle.model";
import { DataService } from "../services/data.service";
@Injectable({
  providedIn: 'root'
})
export class HelperService {
  getVehicles(): Observable<Vehicle[]> {
    return this.data.get<Vehicle[]>("vehicles");
  }

  getVehicleById(id: number): Observable<Vehicle[]> {
    return this.data.get<Vehicle[]>("vehicles/:id", { id: id });
  }

  getCameras(): Observable<Camera[]> {
    return this.data.get<Camera[]>("cameras");
  }

  getCameraById(id: number): Observable<Camera[]> {
    return this.data.get<Camera[]>("cameras/:id", { id: id });
  }

  getAssignments() {
    return this.data.get<AssignmentResponse[]>("assignments");
  }

  assign(camid: number, vehid: number) {
    this.data.post("assignments", {}, {cameraId: camid, vehicleId: vehid}).pipe(tap(r=>console.log(r))).subscribe();
  }

  removeAssignment(el){
    console.log(el);
    this.data.post("delete-assignment/:id", {id: el});
  }
  constructor(private data: DataService) {};
}
