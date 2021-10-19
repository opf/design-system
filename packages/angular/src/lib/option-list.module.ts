import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpOptionListComponent } from './option-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    OpOptionListComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    OpOptionListComponent,
  ],
})
export class OpOptionListModule { }
