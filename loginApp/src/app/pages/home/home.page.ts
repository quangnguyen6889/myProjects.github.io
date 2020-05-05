import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';


@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    image = "https://businessday.ng/wp-content/uploads/2019/08/retail-banking.jpg";

    constructor(
        private translateService: TranslateService,
        public navController: NavController,
        private router: Router) {

        console.log('constructor');
    }

    ngOnInit() {

        console.log('ngOnInit');

    }

    ionViewWillEnter() {

        console.log('ViewWillEnter');

    }

    ionViewDidEnter() {

        console.log('ionViewDidEnter');

    }

    ionViewWillLeave() {

        console.log('ionViewWillLeave');

    }

    ionViewDidLeave() {

        console.log('ionViewDidLeave');

    }

    useEnglish() {
        this.translateService.use('en');
    }

    useVietnamese() {
        this.translateService.use('vi');
    }
}
