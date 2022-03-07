import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/products/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  products: IProduct[]
  errorMsg: string;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.getTopProduct().subscribe({
      next: (data) => { this.products = data },
      error: (err) => { this.errorMsg = err }
    })
  }

}
