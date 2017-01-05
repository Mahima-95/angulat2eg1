/**
 * Created by grahul on 1/5/2017.
 */
import {Component} from "@angular/core"
import {Customer} from "./Model/Customer"
@Component({
    selector: "customer-ui",
    templateUrl: "../UI/Customer.html"
})
export class CustomerComponent{
    //binder class

    customerObj: Customer = new Customer();
}