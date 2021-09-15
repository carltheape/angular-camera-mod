import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AppComponent } from "../../app.component";
import { HelperService } from '../../services/helper.service';
import { DataService } from "../../services/data.service";
import { PopupContentComponent } from "../popup-content/popup-content.component";
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Input() text: string;
  @Input() className: string;
  @Input() title: string;
  chosen = "";
  @Output() popupClosed = new EventEmitter();
  onClick(){
  }
  constructor(public dialog: MatDialog, private helperService: HelperService) {}

  openDialog() {
    const dialogRef = this.dialog.open(PopupContentComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.popupClosed.emit();
    });
  }

  ngOnInit(): void {
  }

}

