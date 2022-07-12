import { ContabilityService } from './contability.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Function } from './model/user/user.model';
import { Component, OnInit } from '@angular/core';
import { DialogAnimationsExampleDialog } from 'src/app/utilities/dialog.component';

@Component({
  selector: 'app-contability',
  templateUrl: './contability.component.html',
  styleUrls: ['./contability.component.css'],
  providers: [ContabilityService]
})
export class ContabilityComponent implements OnInit {

  deleted = false;
  isLoggedIn: boolean = false;
  functions: Function[] = [];
  function: string = '';
  resultValue?: any;
  value?: number;
  username = '';

  openTab = 1;
  toggleTabs($tabNumber: number) {
    this.openTab = $tabNumber;
  }

  constructor(public dialog: MatDialog, private service: ContabilityService) { }

  ngOnInit() {
    if (localStorage.getItem("session")) {
      this.isLoggedIn = true;
    }
  }

  add(name: string, value?: number) {
    var model: Function = {
      name: name,
      value: value
    }
    this.functions.push(model)

    if (this.functions.length > 1) {
      var arr = this.functions.map(x => Number(x.value))
      this.resultValue = arr.reduce((total, numero) => total - numero);
    }
  }

  delete(index: number) {
    this.service.onDeleted.subscribe(x => {
      if (x == true) [

      ]
    })

  }

  result() {
    var arr = this.functions.map(x => Number(x.value))
    this.resultValue = arr.reduce((total, numero) => total - numero);
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '450px',
      height: '180px',
      enterAnimationDuration,
      exitAnimationDuration,
    });



  }
}