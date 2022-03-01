import React, {useEffect, useState} from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "../Loader";
import {helpHttp} from "../../helpers/helpHttp";

const SongSearch = () => {

    const [search, setSearch] = useState(null);
    const [lyric, setLyric] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(false);

    //repasar clase 17 
    useEffect(() => {
        if (search === null) return;
        const fetchData = async () => {
            const {artist, song} = search;
            let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
            let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;
            console.log(artistUrl, songUrl);

            setLoading(true);
            const [artistRes, songRes] =
                await Promise.all([
                    helpHttp().get(artistUrl),
                    helpHttp().get(songUrl),
                ]);
            console.log(artistRes, songRes);

            setBio(artistRes);
            setLyric(songRes);
            setLoading(false);
        };

        fetchData();
    }, [search]);


    const handleSearch = (data) => {
        setSearch(data);
    };

    return (
        <div>
            <h2>Song search</h2>
            {loading && <Loader/>}
            <SongForm handleSearch={handleSearch}/>
            {search && !loading && <SongDetails search={search} lyric={lyric} bio={bio}/>}

        </div>
    );
}

export default SongSearch;