import { PaymentDetailService } from './../../shared/payment-detail.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styles: []
})
export class PaymentDetailComponent implements OnInit {

  constructor(private servicePayment: PaymentDetailService,
    private toastr: ToastrService) { }

  ngOnInit() {
  
    this.resetForm();
  }


  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.servicePayment.formData = {
      PMI: 0,
      CardOwner: '',
      CardNumber: '',
      ExpirtionDate: '',
      CVV: ''
    }
  }

  onSubmit(form: NgForm) {
    if (this.servicePayment.formData.PMI == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.servicePayment.postPaymentDetail().subscribe(
      res => {
      

        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Payment Detail Register');
        this.servicePayment.refreshList();


   
      },
      err => {
   
        console.log(err);
      }
    )
    

  }
  updateRecord(form: NgForm) {
    this.servicePayment.putPaymentDdetail().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Submitted successfully', 'Payment Detail Register');
        this.servicePayment.refreshList();
      },
      err => {
        console.log(err);
      }
    )
  }

}