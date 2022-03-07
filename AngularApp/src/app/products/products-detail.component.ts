import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  // selector: 'pm-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  pageTitle: string = 'Product Details';
  product: IProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id'); //get parameter from url -- the + is to conver it to number
    this.pageTitle += `: ${id}`;
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
      },
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
