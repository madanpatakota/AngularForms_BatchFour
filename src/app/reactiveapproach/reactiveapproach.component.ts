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
        PrinicipleEmailID : new FormControl(null,     // gmail yahoo hotmail microsoft 
              [ Validators.required, 
                Validators.email , this.EmailDomain]),
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

  // 1. custom validator based on the ra
  // you should create thef unction

  // configure that function to the validators section
  // we are targinng the schoole mail is the formcontrol

  //any                                          { "isNotValidDomain" : true}
  EmailDomain(schoolemailControl:FormControl) :  {  [key:string]      : boolean } | null {
    let value:string = schoolemailControl.value;                // "madan@yahoo.com"
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
