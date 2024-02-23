import api from './api.service';

class TodoService {
    private url = 'todo/'

    getTodoList = async () => {
        setTimeout(() => {
            console.log('get list')
        }, 1000)
        // const response = await api.get('');
        // return response.data;
    }

    postTodoItem() {
        setTimeout(() => {
            console.log('post item')
        }, 1000)
        // const response =  api.post('',data);
        // return response.data;
    }

    putTodoItem() {
        setTimeout(() => {
            console.log('put item')
        }, 1000)
        // const response = api.put('',data);
        // return response.data;
    }

    deleteTodoItem(id:string) {
        setTimeout(() => {
            console.log('delete item')
        }, 1000)
        // const response = api.delete('');
        // return response.data;
    }

}

export const todoService = new TodoService()