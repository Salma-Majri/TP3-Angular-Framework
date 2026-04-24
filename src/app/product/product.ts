import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css'
})
export class Product implements OnInit {
  products: any;
  constructor(private productService: ProductService){
    }

  ngOnInit(): void {
   this.getAllProducts();
  }
  getAllProducts():void {
    this.products=this.productService.getAllProducts();
    }
handleDelete(product: any) {
  let v = confirm('Êtes-vous sûr de vouloir supprimer ?');
  if (v == true) {
    this.productService.deleteProduct(product);
    this.getAllProducts();

  }
}
}
