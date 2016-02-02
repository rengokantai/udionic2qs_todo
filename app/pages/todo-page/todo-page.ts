/**
 * Created by Hernan Y.Ke on 2016/2/2.
 */
import {Page, NavController} from 'ionic-framework/ionic';
import {TodoDetailsPage} from '../todo-details/todo-details';
import {AddTodoPage} from '../add-todo-page/add-todo-page';
import {TodoService} from '../../providers/todo-service/todo-service';
@Page({
    providers:[TodoService],
    templateUrl:'build/pages/todo-page/todo-page.html'
})

export class TodoPage{
    todos;
    nav;
    todoService;
    constructor(todoService:TodoService,nav:NavController){
        this.todos = todoService.get();
        this.nav=nav;
        this.todoService=todoService;
    }

    add(todo){
        this.todos.push({title:todo.title,description:todo.description,completed:false})
    }
    todoDetails(event, todo,index){
        this.nav.push(TodoDetailsPage,{todo:todo, TodoPage:this, todoIndex:index})
    }


    delete(todoIndex){
        this.todoService.remove(todoIndex);
    }

    openAddTodo(){
        this.nav.push(AddTodoPage,{TodoPage:this});
    }

}