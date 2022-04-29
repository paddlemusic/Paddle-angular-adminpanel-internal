


export interface StreamModel {
    media_id :          string,
    media_metadata:   MetaData;
    streamCount : number
}

export interface MetaData {
    name : string,
    artist_name : string,
    image : string,
}
