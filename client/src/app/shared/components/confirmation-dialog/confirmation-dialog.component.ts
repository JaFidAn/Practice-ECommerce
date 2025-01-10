import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-confirmation-dialog',
  imports: [MatButton],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss',
})
export class ConfirmationDialogComponent {
  dialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  data = inject(MAT_DIALOG_DATA);

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
