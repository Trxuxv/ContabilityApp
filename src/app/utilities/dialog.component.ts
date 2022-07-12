import { ContabilityService } from './../pages/contability/contability.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, Injectable} from '@angular/core';

@Component({
    selector: 'dialog-animations-example-dialog',
    templateUrl: 'dialog.html',
})
@Injectable({
    providedIn: 'root',
})
export class DialogAnimationsExampleDialog {

    constructor(public dialogRef: MatDialogRef<DialogAnimationsExampleDialog>, private service: ContabilityService) { }

    onDelete() {
        this.service.onDeleted.next(true);
    }
}