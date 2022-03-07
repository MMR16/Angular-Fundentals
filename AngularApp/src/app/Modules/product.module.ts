import { NgModule } from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';
import { ProductsDetailComponent } from '../products/products-detail.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from '../Guards/product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductsDetailComponent, ConvertToSpacesPipe,
  ],
  imports: [
    RouterModule,
    SharedModule
  ]
})
export class ProductModule { }
