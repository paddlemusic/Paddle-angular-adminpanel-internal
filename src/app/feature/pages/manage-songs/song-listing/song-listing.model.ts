


export interface SongModel {
    // id :          number,
    media_metadata : MediaMetaData
    
    // is_active:    boolean;
}

export interface MediaMetaData {
    name:         string;
    image:        string;
    artist_name: null | string;
}
