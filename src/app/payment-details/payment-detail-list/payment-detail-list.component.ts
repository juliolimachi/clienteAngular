import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(private servicePayment:PaymentDetailService ,private toastr:ToastrService) { }

  ngOnInit() {
    this.servicePayment.refreshList();
  }


  populateForm(tarjetas:PaymentDetail){
  
    //this.servicePayment.formData=tarjetas;  Cuando editas actualiza en el table
    this.servicePayment.formData =Object.assign({},tarjetas);
  }

  onDelete(PMId) {
    if (confirm('Are you sure to delete this record ?')) {
      this.servicePayment.deletePaymentDetail(PMId)
        .subscribe(res => {
          debugger;
          this.servicePayment.refreshList();
          this.toastr.warning('Deleted successfully', 'Payment Detail Register');
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

  
}
