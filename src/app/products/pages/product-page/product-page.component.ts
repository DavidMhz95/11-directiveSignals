import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  //Otra forma de inyectar sin constructor
  private fb = inject(FormBuilder);
  public color: string = 'green'

  public myForm = this.fb.group({
    name: ['',[Validators.required, Validators.minLength(6), Validators.email]],
  })


  changeColor(){
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


}
