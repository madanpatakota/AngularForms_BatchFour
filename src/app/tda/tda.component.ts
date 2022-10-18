import { Component, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tda',
  templateUrl: './tda.component.html',
  styleUrls: ['./tda.component.css']
})
export class TdaComponent implements OnInit {

  constructor() { }
  name = "";

  ngOnInit(): void {
  }

  // evtClick(schoolname:HTMLInputElement){
  //   console.log(schoolname);
  // }

  evtClick(form:NgForm){
    console.log(form);
    console.log("********");
    console.log(form.controls['schoolName'].value);
    console.log(form.value.schoolName);
    console.log(form.value.PrinicipleName);
  }

  evtSubmit(form:NgForm){
    console.log("submit the form...");
    console.log(form);
  }

  // ex : textbox you are expecting atleast 4 charcters
  // but user might be given 2 charcterfs
  // minlenght maxlength pattern (email , numbers)
  // Please enter atleast 4 charcters

}
