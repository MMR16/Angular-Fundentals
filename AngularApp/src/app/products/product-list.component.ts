import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  // properties
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  products: IProduct[];
  filteredProducts: IProduct[];
  errorMsg: string;

  private proName: string;
  private _listFilter: string;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.perfomFilter(this.listFilter)
      : this.products;
  }

  constructor(private productService: ProductService) {
    console.log('from constructor');
    this._listFilter = '';
  }

  perfomFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (e) => e.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = this.products;
      },
      error: (err) => (this.errorMsg = err),
      // error(err){this.errorMsg = err},
    });
  }

  onRatingClicked(data: number): void {
    this.proName = this.products.find((e) => e.starRating == data).productName;
    this.pageTitle = `The ${this.proName} rating is: ${data}`;
  }
}
