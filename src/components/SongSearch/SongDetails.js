import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "../Message";

const SongDetails = ({search, lyric, bio}) => {
    if (!lyric || !bio) return null;


    return (
        <>
            {lyric.error || lyric.err || lyric.name === "AbortError" ?
                <Message
                    msg={`Error: no exixte la cancion '${search.song}'`}
                    bgColor={"#dc3545"}/> : <SongLyric/>}
            {bio.artists ? <SongArtist/> :
                <Message
                    msg={`Error: no exixte el interprete '${search.artist}'`}
                    bgColor={"#dc3545"}/>}
        </>
    );
}

export default SongDetails;