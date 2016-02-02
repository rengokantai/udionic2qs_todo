/**
 * Created by Hernan Y.Ke on 2016/2/2.
 */
import {Injectable} from 'angular2/core';

@Injectable()
export class TodoService{
    todos;
    constructor(){
        this.todos=[
            {title:"1",description:"a",completed:false},
            {title:"3",description:"b",completed:false}
        ]
    }
    get(){
        return this.todos;
    }
    remove(index){
        this.todos.splice(index,1);
    }
    add(todo){
        this.todos.push({title:todo.title,description:todo.description,completed:false})
    }
}