import React, { useState } from "react";
import { TodoType } from "../types/TodoType";
import InputTodo from "./InputTodo/InputTodo";
import RenderTodo from "./RenderTodo/RenderTodo";

const Todo: React.FC<{}> = () => {
    const [todoList, setTodoList] = useState<TodoType[]>([]);

    function checkList(event: any) {
        setTodoList((state) => {
            state[event.target.id].completed = true;
            return [...state];
        });
    }

    return (
        <>
            <InputTodo setTodoList={setTodoList} />
            <RenderTodo todoList={todoList} checkList={checkList} />
        </>
    );
};

export default Todo;
