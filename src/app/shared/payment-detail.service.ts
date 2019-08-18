import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail';
import {HttpClient}  from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {
formData :PaymentDetail;
readonly rootUrl='https://localhost:44386/api';
list:PaymentDetail[];

  constructor(private http:HttpClient) { }

postPaymentDetail(){
return this.http.post(this.rootUrl+'/PaymentDetails',this.formData);
}


putPaymentDdetail(){
  return this.http.put(this.rootUrl+'/PaymentDetails/'+this.formData.PMI,this.formData);
}



deletePaymentDetail( id){
  debugger;
 return this.http.delete( this.rootUrl+'/PaymentDetails/'+id);
}


refreshList(){
  this.http.get(this.rootUrl + '/PaymentDetails')
  .toPromise()
  .then(res => this.list = res as PaymentDetail[]);
  debugger;
}

}
