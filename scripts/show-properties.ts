/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, For, If, bootstrap} from 'angular2/angular2';

class FriendsService {
    names: Array<string>;
    getNames() {
        return this.names;
    }
    constructor() {
        this.names = ["Alice", "Aarav", "Martín", "Shannon", "Ariana", "Kai"];
    }
}

@Component({
  selector: 'display',
  injectables: [FriendsService]
})
@View({
  directives: [For, If],
  template: `
   <p>My name: {{ myName }}</p>
   <p>Friends of Alice:</p>
   <ul>
     <li *for="#name of names">{{name}}</li>
   </ul>
   <p *if="names.length > 3">You have many friends :)</p>
  `
})
class DisplayComponent {
  myName: string;
  names: Array<string>;

  constructor(friends: FriendsService) {
    this.myName = "Alice";
    this.names = friends.getNames();
  }
}

bootstrap(DisplayComponent);
