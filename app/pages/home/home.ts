import {Page, NavController} from 'ionic-framework/ionic';
import {TodoPage} from '../todo-page/todo-page';
import {NavController} from "../../../node_modules/ionic-framework/components/nav/nav-controller";

@Page({
  templateUrl: 'build/pages/home/home.html',
})
export class HomePage {
  nav;
  constructor(nav:NavController) {
  this.nav=nav;
  }
  goTodo() {
    this.nav.push(TodoPage);
  }
}
