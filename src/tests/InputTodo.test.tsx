import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import InputTodo from "../components/InputTodo/InputTodo";

test("Input title value change", () => {
    const setTodoListMock = jest.fn();
    render(<InputTodo setTodoList={setTodoListMock} />);
    const inputTitle: HTMLInputElement = screen.getByLabelText("title");
    fireEvent.change(inputTitle, {
        target: {
            value: "test title input",
        },
    });

    expect(inputTitle.value).toBe("test title input");
});

test("Input description value change", () => {
    const setTodoListMock = jest.fn();
    render(<InputTodo setTodoList={setTodoListMock} />);
    const inputDescription: HTMLInputElement = screen.getByLabelText("title");
    fireEvent.change(inputDescription, {
        target: {
            value: "test description input",
        },
    });

    expect(inputDescription.value).toBe("test description input");
});

test("Focus on description input from title input after key press Enter", () => {
    const setTodoListMock = jest.fn();
    render(<InputTodo setTodoList={setTodoListMock} />);
    const inputTitle: HTMLInputElement = screen.getByLabelText("title");
    const inputDescription: HTMLInputElement =
        screen.getByLabelText("description");

    fireEvent.keyDown(inputTitle, {
        key: "Enter",
    });
    expect(inputDescription).toHaveFocus();
});

test("Add on Enter key", () => {
    const setTodoListMock = jest.fn();
    render(<InputTodo setTodoList={setTodoListMock} />);
    const inputDescription: HTMLInputElement =
        screen.getByLabelText("description");
    fireEvent.keyDown(inputDescription, {
        key: "Enter",
    });

    expect(setTodoListMock.mock.calls.length).toBe(1);
});

test("Add on ADD click", () => {
    const setTodoListMock = jest.fn();
    render(<InputTodo setTodoList={setTodoListMock} />);
    const addButton = screen.getByText("ADD");
    fireEvent.click(addButton);

    expect(setTodoListMock.mock.calls.length).toBe(1);
});

test("[SNAPSHOT] test render InputTodo", () => {
    const setTodoListMock = jest.fn();
    const { container } = render(<InputTodo setTodoList={setTodoListMock} />);

    expect(container).toMatchSnapshot();
});
