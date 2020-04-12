import TodoGetDto from '../dtos/get/todo';

export default interface ICreateOrEditTodo {
    todo: TodoGetDto,
    create: boolean
}