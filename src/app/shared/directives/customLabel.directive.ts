import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]',
})
export class CustomLabelDirective implements OnInit {

  private htmlElement: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

  @Input() set color (value:string){
    this._color = value;
    this.setStyle();
  }

  @Input() set errors (value:ValidationErrors | null | undefined){
    this._errors = value;
    this.setErrorMessage();
  }

  constructor(private element: ElementRef<HTMLElement>) {
    // console.log('CustomLabelDirective');
    this.htmlElement = element;
    // this.htmlElement.nativeElement.innerHTML = 'Hello world';

  }

  ngOnInit(): void {
    // console.log('CustomLabelDirective ngOnInit');
    this.setStyle();

  }

  setStyle() {
    if(!this.htmlElement) return
    this.htmlElement!.nativeElement.style.color = this._color;
   }


   setErrorMessage(){
    if(!this.htmlElement) return
    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = 'No errors';
      return
    }
    const errors = Object.keys(this._errors);

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'This field is required';
      return
    }
    if(errors.includes('minlength')){
      const {requiredLength, actualLength} = this._errors['minlength'];
      const number = requiredLength - actualLength;
      this.htmlElement.nativeElement.innerHTML = `This field must have at least ${number} characters`;
      return
    }
    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'This field must be a valid email';
      return
    }



   }



}
