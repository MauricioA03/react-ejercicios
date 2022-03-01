import React, {useState} from "react";

const initialForm = {
    artist: "",
    song: ""
};

const SongForm = ({handleSearch}) => {
    const [form, setForm] = useState(initialForm);
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmint = (e) => {
        e.preventDefault();
        if (!form.artist || !form.song) {
            alert("Datos Incompletos");
            return;
        }

        handleSearch(form);
        setForm(initialForm);
    }

    return (
        <div>
            <form onSubmit={handleSubmint}>
                <input type={"text"} name={"artist"} placeholder={"Nombre del interprete"} onChange={handleChange}
                       value={form.artist}/>
                <input type={"text"} name={"song"} placeholder={"Nombre de la cancion"} onChange={handleChange}
                       value={form.song}/>
                <input type={"submit"} value={"Enviar"}/>
            </form>
        </div>
    );
}

export default SongForm;