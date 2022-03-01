import React from "react";
import CrudApp from "./components/CrudApi/CrudApp";
import CrudApi from "./components/CrudApi/CrudApi";

function App() {
    return (
        <>
            <h1>Ejercicios con React</h1>
            <CrudApi/>
            <hr/>
            <CrudApp/>
            <hr/>
        </>
    );
}

export default App;