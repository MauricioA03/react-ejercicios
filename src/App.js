import React from "react";
import CrudApp from "./components/CrudApi/CrudApp";
import CrudApi from "./components/CrudApi/CrudApi";
import SongSearch from "./components/SongSearch/SongSearch";
import SelectsAnidados from "./components/SelectsAnidados/SelectsAnidados";
import ContacForm from "./components/FormValidation/ContacForm";

function App() {
    return (
        <>
            <h1>Ejercicios con React</h1>
            <ContacForm/>
            <hr/>
            <SelectsAnidados/>
            <hr/>
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