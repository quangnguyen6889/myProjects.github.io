import { Component, ɵɵpipeBind2 } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    showlit: any;
    public addNew: string = "";
    public input: boolean = false;
    public closeButton: boolean = false;
    getData: any[] = [];


    constructor() { }
    showInput() {
        if (!this.input) {
            this.input = true;
        }
    }

    hideInput() {
        if (this.input) {
            this.input = false;
        }
    }

    showCloseButton() {
        if (!this.closeButton) {
            this.closeButton = true;
        }

        // layDuLieu(event) {
        //     this.add = event.target.value;
        // }

    }
    saveData(event) {
        // debugger
        this.getData.push({ 'name': this.addNew });
    }
}
