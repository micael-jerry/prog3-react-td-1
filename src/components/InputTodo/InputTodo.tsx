import React, { useState } from "react";
import { TodoType } from "../../types/TodoType";
import "./InputTodo.css"

const InputTodo: React.FC<{
    setTodoList: (todoList: any) => any;
}> = (props) => {
    const { setTodoList } = props;
    const [input, setInput] = useState<TodoType>({
        title: "",
        description: "",
        completed: false,
    });

    const handleSubmit = () => {
        setTodoList((stateTodoList: TodoType[]) => [...stateTodoList, input]);
        setInput({
            title: "",
            description: "",
            completed: false,
        });
    };

    const handleChange = (event: any) => {
        const { value, id } = event.target;
        setInput((inputState: TodoType): TodoType => {
            return {
                ...inputState,
                [id]: value,
            };
        });
    };

    return (
        <>
            <div id={"inputTodo"} className={"row align-items-center"}>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="form-floating mb-4">
                        <input
                            type={"text"}
                            id={"title"}
                            onChange={handleChange}
                            value={input.title}
                            className={"form-control"}
                        />
                        <label htmlFor={"title"}>Title</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type={"text"}
                            id={"description"}
                            onChange={handleChange}
                            value={input.description}
                            className={"form-control"}
                        />
                        <label htmlFor={"description"}>Description</label>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <button
                        onClick={handleSubmit}
                        className={"w-75 btn btn-lg  my-btn mb-3"}
                    >
                        ADD
                    </button>
                </div>
            </div>
        </>
    );
};

export default InputTodo;
