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
  products: any[] = [];

  ngOnInit(): void {
    this.products = [
      {id: 1, name: "PC", price: 2900, selected: true},
          {id: 2, name: "Tablet", price: 3600, selected: false},
          {id: 3, name: "Printer", price: 3400, selected: true}
    ];
  }
}
