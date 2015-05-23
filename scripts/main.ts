/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'templates/main.html'
})
class AppComponent {
    name: String;
    constructor() {
        this.name = 'Name';
    }
}

bootstrap(AppComponent);
