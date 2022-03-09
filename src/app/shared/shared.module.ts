import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { EditItemModalComponent } from './components/edit-item-modal/edit-item-modal.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { NewItemModalComponent } from './components/new-item-modal/new-item-modal.component';
import { CategoryPipe } from './pipes/category.pipe';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    NewItemModalComponent,
    EditItemModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ],
  exports:[ErrorDialogComponent,NewItemModalComponent,CategoryPipe]
})
export class SharedModule { }
