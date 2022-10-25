import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appGmail][ngModel]',
  providers:[{
    provide : NG_VALIDATORS,
    useValue : new GmailDirective(),
    multi:true
  }]
})
export class GmailDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl):   {  [key:string]      : boolean } | null {
    let value:string = control.value;                // "madan@yahoo.com"
    if( value != null){
       let emailValue = value.split("@");                    //;["madan","yahoo.com"]
       if(emailValue[1] != "gmail.com"){
            return {
               "isNotValidDomain" : true
            }
       }
    }
    return null;
  }


}
