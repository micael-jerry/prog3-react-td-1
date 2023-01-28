import React, { useState } from "react";
import { TodoType } from "../types/TodoType";
import InputTodo from "./InputTodo/InputTodo";
import RenderTodo from "./RenderTodo/RenderTodo";

const Todo: React.FC<{}> = () => {
    const [variable, setVariable] = useState<boolean>(false);
    const [todoList, setTodoList] = useState<TodoType[]>([
        {
            title: "title_1",
            description: "description_1",
            completed: false,
        },
        {
            title: "title_2",
            description: "description_2",
            completed: true,
        },
    ]);

    function checkList(event: any) {
        let state = todoList;
        state[event.target.id].completed = true;
        setTodoList(state);
        setVariable((val) => !val);
    }

    return (
        <>
            <InputTodo setTodoList={setTodoList} />
            <RenderTodo todoList={todoList} checkList={checkList} />
        </>
    );
};

export default Todo;
