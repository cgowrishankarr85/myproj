import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-directive-sample',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './directive-sample.component.html',
  styleUrl: './directive-sample.component.css'
})
export class DirectiveSampleComponent {
  num: number;
  colors: string[];
  products:Product[];
  selectedColor:string='red';
  constructor()
  {
    this.num =0;
    this.colors=["Red", "Blue", "Green"];

    let p1= new Product(101, 'Pencil', 'P101', 2);
    let p2= new Product(102, 'Pen', 'P102', 10);
    let p3= new Product(103, 'Bag', 'P103', 200);
    this.products=[];
this.products.push(p1);
this.products.push(p2);
this.products.push(p3);
  }

  addNewProduct()
  {
    let p4= new Product(104, 'Box', 'P104', 50);
    this.products.push(p4);
  }
}
