import React, { useRef, useState, KeyboardEvent } from "react";
import { TodoType } from "../../types/TodoType";
import "./InputTodo.css";

const InputTodo: React.FC<{
    setTodoList: (todoList: any) => any;
}> = (props) => {
    const { setTodoList } = props;
    const [input, setInput] = useState<TodoType>({
        title: "",
        description: "",
        completed: false,
    });
    const inputTitle = useRef<HTMLInputElement>(null);
    const inputDescription = useRef<HTMLInputElement>(null);

    const handleChange = (event: any) => {
        const { value, id } = event.target;
        setInput((inputState: TodoType): TodoType => {
            return {
                ...inputState,
                [id]: value,
            };
        });
    };

    const handleSubmit = () => {
        setTodoList((stateTodoList: TodoType[]) => [...stateTodoList, input]);
        setInput({
            title: "",
            description: "",
            completed: false,
        });
    };

    const focusDescriptionInputFromTitleInput = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            inputDescription.current!.focus();
        }
    };

    const focusTitleInputFromDescriptionInput = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            inputTitle.current!.focus();
        }
    };

    const handleSubmitByPressEnter = (
        event: KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            handleSubmit();
            focusTitleInputFromDescriptionInput(event);
        }
    };

    return (
        <>
            <div id={"inputTodo"} className={"row align-items-center"}>
                <div className="col-lg-8 col-md-8 col-sm-8">
                    <div className="form-floating mb-4">
                        <input
                            type={"text"}
                            id={"title"}
                            className={"form-control"}
                            ref={inputTitle}
                            value={input.title}
                            onChange={handleChange}
                            onKeyDown={focusDescriptionInputFromTitleInput}
                        />
                        <label htmlFor={"title"}>Title</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input
                            type={"text"}
                            id={"description"}
                            className={"form-control"}
                            ref={inputDescription}
                            value={input.description}
                            onChange={handleChange}
                            onKeyDown={handleSubmitByPressEnter}
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
