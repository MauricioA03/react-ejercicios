import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";
import Message from "../Message";

const SongDetails = ({search, lyric, bio}) => {
    if (!lyric || !bio) return null;


    return (
        <>
            {lyric.error || lyric.err || lyric.name === "AbortError" ?
                <Message
                    msg={`Error: no exixte la cancion "<em>${search.song}</em>"`}
                    bgColor={"#dc3545"}/> :
                <SongLyric title={search.song} lyrics={lyric.lyrics}/>}
            {bio.artists ?
                <SongArtist artist={bio.artists[0]}/> :
                <Message
                    msg={`Error: no exixte el interprete '<em>${search.artist}</em>'`}
                    bgColor={"#dc3545"}/>}
        </>
    );
}

export default SongDetails;