import { Router } from "express";
import { Todo } from '../model/todo'

const router = Router()

//type aliases
type RequestBody={text : string}
type RequestParam={id:string}

let todos: Todo[] = []

router.get('/', (req, res, next) => {
    try {
        res.status(200).json({ "todos": todos })
    } catch (err) {
        res.status(401).json({ err: err })
    }
})

router.post('/todo', (req, res, next) => {
    try {
        const body=req.body as RequestBody
        const newTodo: Todo = {
            id: new Date().toISOString(),
            text: body.text
        }
        todos.push(newTodo)
        res.status(201).json({ message: "successfully added", todo: newTodo, todos: todos })
        console.log(todos)
    }
    catch (err) {
        res.status(401).json({ err: err })
    }
})

router.post('/deleteTodo/:id', (req, res, next) => {
    try {
        const param=req.params as RequestParam
        const id = param.id
        todos = todos.filter(todoItem => todoItem.id !== id) //using filter method
        // for(var i=0;i<todos.length;i++){
        //     if(todos[i].id===id){
        //         todos.slice(i,1)
        //     }
        // }
         res.status(201).json({ message: "successfully deleted" })
    } catch (err) {
        res.status(401).json({ err: err })
    }
})

router.put('/editTodo/:id', (req, res, next) => {
    try {
        const param=req.params as RequestParam
        const id = param.id
        const body =req.body as RequestBody
        const TodoIndex = todos.findIndex(todoIndex => todoIndex.id === id)
        if (TodoIndex >= 0) {
            todos[TodoIndex] = {
                id: todos[TodoIndex].id,
                text: body.text
            }
            res.status(201).json({ message: "updated successfully", todo: todos[TodoIndex], todos: todos })
        } else {
            res.status(401).json({ err: "did not update todo" })
        }
    } catch (err) {
        res.status(501).json({ err: err })
    }
})
export default router;