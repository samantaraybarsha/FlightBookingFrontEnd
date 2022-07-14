import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { LoginModel } from '../Models/login-model';
import { Router} from '@angular/router';



// const routes:Routes=[
//   {
// path:'adminModule',component:AdminMenuComponent
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  loginUserForm:any;
  submitted:boolean=false;
  loginModel:LoginModel | undefined;
    constructor(private formBuilder: FormBuilder, private _service: FlightServiceService,private router:Router) { }
    ngOnInit(): void {
      this.loginUserForm=this.formBuilder.group({
        userName:['',Validators.required],
        password:['',Validators.required]
            });
  
  }
  get f(){return this.loginUserForm.controls;}
    onSubmit()
    {
      this.submitted=true;
  
      if(this.loginUserForm.invalid)
      {
        return;
      }
      let loginInputs = this.loginUserForm.value;
      this.loginModel = {
        "userName": loginInputs.userName,
        "password": loginInputs.password
      }
       this._service.loginuser(this.loginModel).subscribe(data => {
         if(data=="User does not exist")
         {
         alert("User does not exist");
         }
         else if(data=="Wrong Password")
         {
         alert("Wrong Password");
         }
         else{
          localStorage.setItem('Token',data);
          console.log(data);
          alert("Logged In successfully");
         }
         //console.log(data);
         
        //if(data != null || data != undefined){
          //alert(data);
        //}
        //console.log(data);
       }//,
      // error=>console.log(error)
      )
      
      //)
      //this.router.navigate(['/adminModule']);
      //alert('SUCCESS)\n\n' + JSON.stringify(this.addAirlineForm.value,null,4));
    }
  onReset()
  {
    this.submitted=false;
    this.loginUserForm.reset();
  }
  }
  