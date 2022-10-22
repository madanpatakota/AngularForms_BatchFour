import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
  schoolForm : FormGroup;
  studentFormGroup : FormGroup;

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

      // 1. i am going to create the studentname and studentclass
      
      // Array of students
      //  {
      // Ex : [ Sreeni    1ststandard   --- 1st group
      //      Anji      UKG           --  2nd group
      //      Praveen    Lkg
      //      trivikarm  Lkg   ]
      //  }

      // prepare the code .. i need to configure
      this.studentFormGroup = new FormGroup({
        StudentDetails : new FormArray([
          new FormGroup({
              'StudentName' : new FormControl(),
              'StudenClass' : new FormControl()
          })
        ])
      })
  }

  get studentFormArray() : FormArray{
    return this.studentFormGroup.get('StudentDetails') as FormArray;
  }


 

  evtSubmit(){
    console.log(this.schoolForm);
  }

  evtAdd(){
     let studentarray = this.studentFormGroup.get('StudentDetails') as FormArray;
     studentarray.push(
          new FormGroup({
            'StudentName' : new FormControl(null,[Validators.required]),
            'StudenClass' : new FormControl()
          })
     )
      console.log(this.studentFormGroup);
  }




}
