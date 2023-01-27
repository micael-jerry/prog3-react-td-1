import React, { useState } from "react";
import { TodoType } from "../types/TodoType";

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
		<div id={"inputTodo"}>
			<input
				type={"text"}
				id={"title"}
				onChange={handleChange}
				value={input.title}
			/>
			<input
				type={"text"}
				id={"description"}
				onChange={handleChange}
				value={input.description}
			/>
			<button onClick={handleSubmit}>ADD</button>
		</div>
	);
};

export default InputTodo;
