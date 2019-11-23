import { Subscription, Observable, Subject, BehaviorSubject } from 'rxjs';
import { OnDestroy } from '@angular/core';
import { GDS } from './services/gds.service';
import { NbMenuService, NbToastComponent, NbToastrService } from '@nebular/theme';
import { Router } from '@angular/router';
import { DataEndpoint } from './services/eapi-data-services/data-endpoint/data-endpoint';


export class EffortlessComponentBase implements OnDestroy {

    constructor(public gds: GDS, public data: DataEndpoint,
        protected menuService: NbMenuService) {
        this.safeSubscribe(this.gds.onReady().subscribe(ready => {
            this.data.reloadStaticData(this.gds.smqUser);
        }));
    }

    public destroy$ : BehaviorSubject<any> = new BehaviorSubject(this);
    public loading: boolean;
    protected subscriptions: Subscription[] = [];

    public safeSubscribe(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }

    public ngOnDestroy() {
        this.destroy$.next(this);
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });
    }

    goToHome() {
        this.menuService.navigateHome();
    }

    goToDashboard(router: Router, toastr: NbToastrService) {

        var url = '/pages/effortlessapi/dashboard-guest';
            setTimeout(() => {
                if ((router.url == "/") || (router.url == url)) {
    
                    if (this.gds.isAdmin) url = 'pages/effortlessapi/dashboard-admin';
                    else if (this.gds.isManager) url = 'pages/effortlessapi/dashboard-manager';
                    else if (this.gds.isEmployee) url = 'pages/effortlessapi/dashboard-employee';
                    else if (this.gds.isPayroll) url = 'pages/effortlessapi/dashboard-payroll';
                    else if (this.gds.isCaller) url = 'pages/effortlessapi/dashboard-customer';
    
                    router.navigateByUrl(url);
                }
            }, 1500)
    }

    stringify(obj) {
        return JSON.stringify(obj);
    }
}
