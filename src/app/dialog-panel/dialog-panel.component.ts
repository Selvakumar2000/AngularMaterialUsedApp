import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-panel',
  templateUrl: './dialog-panel.component.html',
  styleUrls: ['./dialog-panel.component.css']
})
export class DialogPanelComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  //spinner
  showSpinner = true;

  
}
