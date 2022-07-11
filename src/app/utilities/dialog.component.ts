import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'dialog.html',
})
export class DialogAnimationsExampleDialog {
    constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>) { }
}