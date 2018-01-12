import Realm from 'realm'

class TodoItem extends Realm.Object {}
  TodoItem.schema = {
    name: 'TodoItem',
    properties: {
    namename: {type: 'string'},
    Password: {type: 'string'}

  }
};

const realm = new Realm({schema: [TodoItem]})

export const createTodoItem = (value) => {
  realm.write(() => {
      realm.create('TodoItem',{
        namename:value.username,
        Password:value.Password
      }
      )
    })
}
export const getTodoItems = () => {
  const todoItems = realm.objects(TodoItem.schema.name).sorted('namename', true)
  return todoItems
}
export const deleteTodoItem = (todoItem) => {
  realm.write(() => {
    realm.delete(todoItem)
  })
}
