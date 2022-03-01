import React, {useState} from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "../Loader";

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = (data) => {
        console.log(data);
    };


    return (
        <div>
            <h2>Song search</h2>
            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch}/>
            <SongDetails search={search} lyric={lyric} bio={bio}/>
        </div>
    );
}

export default SongSearch;