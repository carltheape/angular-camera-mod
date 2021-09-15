import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent implements OnInit {
  cameraControl = new FormControl('', Validators.required);
  vehicleControl = new FormControl('', Validators.required);
  cameraList = [];
  chosenCamera = '';
  vehicleList = [];
  chosenVehicle = '';
  assignments = [];
  cameraAssignments = [];
  vehicleAssignments = [];
  constructor(public dialog: MatDialog, private helperService: HelperService) {}
  confirmSelection() {
    this.helperService.assign(
      parseInt(this.chosenCamera),
      parseInt(this.chosenVehicle)
    );
    this.dialog.closeAll();
  }
  ngOnInit(): void {
    this.helperService.getAssignments().subscribe((allAssignments: any[]) => {
      this.assignments = allAssignments;
    });
    this.helperService.getCameras().subscribe((allCameras: any[]) => {
      this.cameraList = allCameras;
    });
    this.helperService.getVehicles().subscribe((allVehicles: any[]) => {
      this.vehicleList = allVehicles;
    });
    this.assignments.forEach(element => {
      this.cameraAssignments.push(element.cameraId);
      this.vehicleAssignments.push(element.vehicleId);
    });
    this.cameraAssignments.forEach(cam => {
      this.cameraList.forEach(listitem => {
        if (cam === listitem.id) {
          const index = this.cameraList.indexOf(listitem);
          this.cameraList.splice(index, 1);
        }
      });
    });
    this.vehicleAssignments.forEach(veh => {
      this.vehicleList.forEach(listitem => {
        if (veh === listitem.id) {
          const index = this.vehicleList.indexOf(listitem);
          this.vehicleList.splice(index, 1);
        }
      });
    });
  }
}
