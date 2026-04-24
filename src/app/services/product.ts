import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products = [
      {id: 1, name: "PC", price: 2900, selected: true},
          {id: 2, name: "Tablet", price: 3600, selected: false},
          {id: 3, name: "Printer", price: 3400, selected: true}
    ];
  constructor(){ }
  getAllProducts(){
    return this.products;
    }
  deleteProduct(product : any):void{
     this.products = this.products.filter(p => p.id !== product.id);
     }
  }
