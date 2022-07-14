import { Component, OnInit } from '@angular/core';
import { FormBuilder,AbstractControl,FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../flight-service.service';
import { DiscountModel } from '../Models/discount-model';


@Component({
  selector: 'app-manage-discount',
  templateUrl: './manage-discount.component.html',
  styleUrls: ['./manage-discount.component.css']
})
export class ManageDiscountComponent implements OnInit {
  addDiscountForm:any;
  submitted:boolean=false;
  discountModel:DiscountModel | undefined;
    constructor(private formBuilder: FormBuilder,private _service: FlightServiceService) { }
    ngOnInit(): void {
      this.addDiscountForm=this.formBuilder.group({
        discountType:['',Validators.required],
        discountAmount:['',Validators.required]
            });
    }
    get f(){return this.addDiscountForm.controls;}
    onSubmit()
    {
      this.submitted=true;
  
      if(this.addDiscountForm.invalid)
      {
        return;
      }
      let DiscountInputs = this.addDiscountForm.value;
      this.discountModel = {
        "discountId":0,
        "discountAmount": DiscountInputs.discountAmount,
        "discountType": DiscountInputs.discountType
      }
      this._service.addDiscount(this.discountModel).subscribe(data => {
          alert(data);
        
      })
    }
  onReset()
  {
    this.submitted=false;
    this.addDiscountForm.reset();
  }
  }