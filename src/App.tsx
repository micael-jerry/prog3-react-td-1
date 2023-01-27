import React from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
    return (
        <div className="App">
            <header className="p-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <h1>ToDo List</h1>
                        </div>
                    </div>
                </div>
            </header>
            <div className={"container mt-4"}>
                <Todo />
            </div>
        </div>
    );
}

export default App;
