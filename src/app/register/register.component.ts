import { Component, OnInit } from '@angular/core';
import { RegisterModel } from '../Models/register-model';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserForm:any;
submitted:boolean=false;
registerModel:RegisterModel | undefined;
  constructor(private formBuilder: FormBuilder, private _service: FlightServiceService) { }
  ngOnInit(): void {
    this.registerUserForm=this.formBuilder.group({
      userName:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
      role:['',Validators.required]
          });

}
get f(){return this.registerUserForm.controls;}
  onSubmit()
  {
    this.submitted=true;

    if(this.registerUserForm.invalid)
    {
      return;
    }
    let registerInputs = this.registerUserForm.value;
    this.registerModel = {
      "userName": registerInputs.userName,
      "password": registerInputs.password,
      "email": registerInputs.email,
      "role": registerInputs.email
    }
    this._service.adduser(this.registerModel).subscribe(data => {
      //if(data != null || data != undefined){
        alert(data);
      //}
      console.log(data);
    })
    //alert('SUCCESS)\n\n' + JSON.stringify(this.addAirlineForm.value,null,4));
  }
onReset()
{
  this.submitted=false;
  this.registerUserForm.reset();
}
}
