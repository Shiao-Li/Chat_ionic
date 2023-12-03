import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPagePageRoutingModule } from './new-page-routing.module';

import { NewPagePage } from './new-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPagePageRoutingModule
  ],
  declarations: [NewPagePage]
})
export class NewPagePageModule {}
