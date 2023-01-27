import React from "react";
import { TodoType } from "../types/TodoType";

const RenderTodo: React.FC<{
	todoList: TodoType[];
	checkList: (todoList: any) => any;
}> = (props) => {
	const { todoList, checkList } = props;

	return (
		<>
			<div>
				<h1>TODO</h1>
				<ul>
					{todoList.map((t, i) => {
						if (!t.completed) {
							return (
								<>
									<input
										key={t.description.trim()}
										type={"checkbox"}
										name="check"
										id={i + ""}
										onClick={checkList}
									/>
									<li key={(i + t.description).trim()}>
										{t.title}
									</li>
								</>
							);
						} else {
							return <></>;
						}
					})}
				</ul>
			</div>
			<div>
				<h1>DONE</h1>
				<ul>
					{todoList.map((t, i) => {
						if (t.completed) {
							return (
								<li key={(t.description + i).trim()}>
									{t.title}
								</li>
							);
						} else {
							return <></>;
						}
					})}
				</ul>
			</div>
		</>
	);
};

export default RenderTodo;
