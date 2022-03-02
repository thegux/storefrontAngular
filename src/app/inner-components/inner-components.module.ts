import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../inner-components/header/header.component';
import { ProductComponent } from "../inner-components/product/product.component";
import { ProductListComponent } from '../inner-components/product-list/product-list.component';


@NgModule({
  declarations: [HeaderComponent, ProductComponent, ProductListComponent],
  exports: [HeaderComponent, ProductComponent, ProductListComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class InnerComponentsModule { }
