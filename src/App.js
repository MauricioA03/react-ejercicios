import React from "react";
import CrudApp from "./components/CrudApi/CrudApp";
import CrudApi from "./components/CrudApi/CrudApi";
import SongSearch from "./components/SongSearch/SongSearch";

function App() {
    return (
        <>
            <h1>Ejercicios con React</h1>
            <SongSearch/>
            <hr/>
            <CrudApi/>
            <hr/>
            <CrudApp/>
            <hr/>
        </>
    );
}

export default App;