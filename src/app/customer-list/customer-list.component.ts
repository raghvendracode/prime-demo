import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../shared/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }
  customerArray = [];
  deletemssg:boolean;

  ngOnInit() {
    this.customerService.getCustomer().subscribe(
      list => {
        this.customerArray = list.map(item => {
          return {
            $key: item.key,
          ...item.payload.val()
        };
   });
});

  }

  onDelete($key) {
    if (confirm('Are you sure want to delte this records.')) {
      this.customerService.deleteCustomer($key);
      this.deletemssg = true;
      setTimeout(() => this.deletemssg = false, 3000);
    }
  }

}
