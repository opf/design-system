import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OpOptionListComponent } from './option-list.component';

@NgModule({
  declarations: [
    OpOptionListComponent,
  ],
  imports: [
    FormsModule,
  ],
  exports: [
    OpOptionListComponent,
  ],
})
export class OpOptionListModule { }

