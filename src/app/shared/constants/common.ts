export interface MEDIATYPES {
    id : number;
    type : string
}

export const MEDIA_TYPES : MEDIATYPES[] = [
    // {
    //     id : 0,
    //     type : 'All'
    // },
    {
        id : 1,
        type : 'Song'
    },
    {
        id : 2,
        type : 'Artist'
    },
    {
        id : 3,
        type : 'Album'
    }
    
] 

export interface MONTH {
    id : number;
    name : string
}

export const MONTHS: MONTH[] = [
    {
        id : 1,
        name : 'January'
    },
    {
        id : 2,
        name : 'February'
    },
    {
        id : 3,
        name : 'March'
    },
    {
        id : 4,
        name : 'April'
    },
    {
        id : 5,
        name : 'May'
    },
    {
        id : 6,
        name : 'June'
    },
    {
        id : 7,
        name : 'July'
    },
    {
        id : 8,
        name : 'August'
    },
    {
        id : 9,
        name : 'September'
    },
    {
        id : 10,
        name : 'October'
    },
    {
        id : 11,
        name : 'November'
    },
    {
        id : 12,
        name : 'December'
    } 
] 

export const YEARS = [
    {
        id : 1,
        value : 2015
    },
    {
        id : 2,
        value : 2016
    },
    {
        id : 3,
        value : 2017
    },
    {
        id : 4,
        value : 2018
    },
    {
        id : 5,
        value : 2019
    },
    {
        id : 6,
        value : 2020
    },
    {
        id : 7,
        value : 2021
    }
    
]