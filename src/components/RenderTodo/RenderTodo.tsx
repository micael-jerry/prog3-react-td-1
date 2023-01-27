import React from "react";
import { TodoType } from "../../types/TodoType";
import "./RenderTodo.css"

const RenderTodo: React.FC<{
    todoList: TodoType[];
    checkList: (todoList: any) => any;
}> = (props) => {
    const { todoList, checkList } = props;

    return (
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div>
                <div className={"list p-4"}>
                    <h2>TODO</h2>
                    <ul className={"list-group"}>
                        {todoList.map((t, i) => {
                            if (!t.completed) {
                                return (
                                    <>
                                        <li
                                            className={"list-group-item"}
                                            key={(i + t.description).trim()}
                                        >
                                            <input
                                                key={t.description.trim()}
                                                type={"checkbox"}
                                                id={i.toString()}
                                                onClick={checkList}
                                            />
                                            <h4>{t.title}</h4>
                                            <p>{t.description}</p>
                                        </li>
                                    </>
                                );
                            } else {
                                return <></>;
                            }
                        })}
                    </ul>
                </div>
            </div>
            <div>
                <div className={"list p-4"}>
                    <h2>DONE</h2>
                    <ul className={"list-group"}>
                        {todoList.map((t, i) => {
                            if (t.completed) {
                                return (
                                    <li
                                        className={"list-group-item"}
                                        key={(t.description + i).trim()}
                                    >
                                        <h4>{t.title}</h4>
                                        <p>{t.description}</p>
                                    </li>
                                );
                            } else {
                                return <></>;
                            }
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RenderTodo;
