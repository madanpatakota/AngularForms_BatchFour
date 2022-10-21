import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveapproach',
  templateUrl: './reactiveapproach.component.html',
  styleUrls: ['./reactiveapproach.component.css']
})
export class ReactiveapproachComponent implements OnInit {

  constructor() { }

  // 1. create the form group 
  // and you have to register the controls withinit
  // formcontrol

  // i am preparing the fom group
  // needs to configure to the html

  //prepare and configure to the html
  schoolForm : FormGroup

  ngOnInit(): void {
      this.schoolForm = new FormGroup({
        SchoolName : new FormControl(null,
          [ Validators.required, 
            Validators.minLength(10)]),
        PrinicipleName : new FormControl(null,
          [ Validators.required, 
            Validators.minLength(15)]),
        PrinicipleEmailID : new FormControl(null,
              [ Validators.required, 
                Validators.email]),
        LocationName : new FormControl(null,
              [ Validators.required])
      })
  }

  evtSubmit(){
    console.log(this.schoolForm);
  }




}
