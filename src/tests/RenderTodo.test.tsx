import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import RenderTodo from "../components/RenderTodo/RenderTodo";
import { TodoType } from "../types/TodoType";

const todo1: TodoType = {
    title: "todo1",
    description: "description1",
    completed: false,
};

const todo2: TodoType = {
    title: "todo2",
    description: "description2",
    completed: false,
};

const todo3: TodoType = {
    title: "todo3",
    description: "description3",
    completed: true,
};

const todoListMock: TodoType[] = [todo1, todo2, todo3];

test("title TODO", () => {
    const checkListMock = jest.fn();
    render(<RenderTodo todoList={[]} checkList={checkListMock} />);
    const titleTodo = screen.getByText("TODO");

    expect(titleTodo).toBeInTheDocument();
});

test("title DONE", () => {
    const checkListMock = jest.fn();
    render(<RenderTodo todoList={[]} checkList={checkListMock} />);
    const titleTodo = screen.getByText("DONE");

    expect(titleTodo).toBeInTheDocument();
});

test("Render list to todo", () => {
    const todoList: TodoType[] = [...todoListMock];
    const checkListMock = jest.fn();
    render(<RenderTodo todoList={todoList} checkList={checkListMock} />);
    const listTodoElement: HTMLElement = screen.getByTestId("list-group-todo");

    expect(listTodoElement.childNodes.length).toBe(2);
});

test("Render list to done", () => {
    const todoList: TodoType[] = [...todoListMock];
    const checkListMock = jest.fn();
    render(<RenderTodo todoList={todoList} checkList={checkListMock} />);
    const listDoneElement: HTMLElement = screen.getByTestId("list-group-done");

    expect(listDoneElement.childNodes.length).toBe(1);
});

test("Click on the checkbox to change the status of a todo to done", () => {
    const todoList: TodoType[] = [...todoListMock];
    const checkListMock = jest.fn();
    render(<RenderTodo todoList={todoList} checkList={checkListMock} />);
    const listDoneElement: HTMLElement[] = screen.getAllByTestId("check-todo");

    fireEvent.click(listDoneElement[0]);
    expect(checkListMock.mock.calls.length).toBe(1);
});

test("[SNAPSHOT] test render RenderTodo", () => {
    const checkListMock = jest.fn();
    const { container } = render(
        <RenderTodo todoList={[]} checkList={checkListMock} />
    );

    expect(container).toMatchSnapshot();
});
