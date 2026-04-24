import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

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
   this.products=this.productService.getAllProducts();
  }
handleDelete(product: any) {
  let v = confirm('Êtes-vous sûr de vouloir supprimer ?');
  if (v == true) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}
}
