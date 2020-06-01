import { Controller, Get, Post, Put, Delete, Body, Param } from "@nestjs/common";
import { TodosService } from "@serverAPI/todos/todos.service";
import { CreateTodoDto } from "@serverAPI/todos/dto/create-todo";
import { Todo } from "@serverAPI/todos/interfaces/todo.interface";

@Controller("todos")
export class TodosController {
	constructor(private todosSvc: TodosService) {}
	@Get()
	async all(): Promise<Todo[]> {
		return this.todosSvc.all();
	}
	@Post()
	async add(@Body() todo: CreateTodoDto): Promise<Todo> {
		return this.todosSvc.add(todo);
	}
	@Put(":id")
	async update(@Param("id") id: string, @Body() todo: CreateTodoDto): Promise<Todo> {
		return this.todosSvc.update(id, todo);
	}
	@Delete(":id")
	async delete(@Param("id") id: string): Promise<Todo> {
		return this.todosSvc.delete(id);
	}
}
