/**
 * Created by Hernan Y.Ke on 2016/2/2.
 */
import {Page, NavParams,NavController} from 'ionic-framework/ionic';

@Page({
    templateUrl: 'build/pages/add-todo-page/add-todo-page.html'
})

export class AddTodoPage{
    nav;
    navParams;
    TodoPage;
    constructor(nav:NavController,navParams:NavParams){
        this.nav=nav;
        this.TodoPage=navParams.get('TodoPage');
    }

    addTodo(title,description){
        this.TodoPage.add({title:title,description:description});
        this.nav.pop()
    }
}