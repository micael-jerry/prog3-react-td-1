import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";

test("The title of the application", () => {
    render(<App />);
    const title = screen.getByText("ToDo List");
    expect(title).toBeInTheDocument();
});
