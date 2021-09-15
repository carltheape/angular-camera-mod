import { Component, VERSION } from "@angular/core";
import { DataService } from "./services/data.service";
import { HelperService } from './services/helper.service';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;
  assignmentTitle: string = "Current Assignments";
  assignments = [];
  assignedVehicles = [];
  assignedCameras = [];
  cameraList = [];
  vehicleList = [];
  filterText: '';
  constructor(private data: DataService, private helperService: HelperService) {}
  removeAssign = function(el){
    this.helperService.removeAssignment(el);
    this.updateStoredValues();
  };
  updateStoredValues = function(){
    this.helperService.getAssignments().subscribe((allAssignments: any[]) => {
      this.assignments = allAssignments;
      this.assignments.forEach((assignment, i) => {
        this.helperService.getCameraById(assignment.cameraId).subscribe((Cams: any[]) => {
          this.assignments[i].cameraName = Cams.deviceNo;
          // console.log(this.assignments);
        });
        this.helperService.getVehicleById(assignment.vehicleId).subscribe((Veh: any[]) => {
          this.assignments[i].vehicleName = Veh.name;
          // console.log(this.assignments);
        });
        
      });
    });
    this.helperService.getCameras().subscribe((allCameras: any[]) => {
      this.cameraList = allCameras;
      // console.log(this.cameraList);
    });
    this.helperService.getVehicles().subscribe((allVehicles: any[]) => {
      this.vehicleList = allVehicles;
      // console.log(this.vehicleList);
    });
  };
  ngOnChanges(): void {
    console.log("change");
  };
  ngOnInit(): void {
    this.updateStoredValues();
  }
}
