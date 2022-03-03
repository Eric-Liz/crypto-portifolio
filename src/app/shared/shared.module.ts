import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CategoryPipe } from './pipes/category.pipe';
import { NewItemModalComponent } from './components/new-item-modal/new-item-modal.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { EditItemModalComponent } from './components/edit-item-modal/edit-item-modal.component';


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
    FormsModule
  ],
  exports:[ErrorDialogComponent,NewItemModalComponent,CategoryPipe]
})
export class SharedModule { }
