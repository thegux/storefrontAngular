import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-success-order',
    templateUrl: './success-order.component.html',
    styleUrls: ['./success-order.component.css']
})
export class SuccessOrderComponent implements OnInit {
    user: string = '';
    orderNumber: string = '';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.user = params['user'];
            this.orderNumber = params['orderNumber'];
        })

    }

}
