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


}
