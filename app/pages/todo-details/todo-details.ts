/**
 * Created by Hernan Y.Ke on 2016/2/2.
 */
import {Page, NavParams,NavController} from 'ionic-framework/ionic';
//import {NavController} from "../../../node_modules/ionic-framework/components/nav/nav-controller";

@Page({
    templateUrl: 'build/pages/todo-details/todo-details.html'
})

export class TodoDetailsPage{
    todo;
    nav;
    TodoPage;
    todoIndex;

    constructor(navParams:NavParams, nav:NavController){
        this.todo = navParams.get('todo');
        this.nav=nav;
        this.TodoPage = navParams.get('TodoPage');
        this.todoIndex = navParams.get('todoIndex');

        this.editing = false;
    }

    deleteTodo(){
        this.TodoPage.delete(this.todoIndex);
        this.nav.pop();
    }
}