import {FetchBaseQueryArgs} from "@reduxjs/toolkit/dist/query/fetchBaseQuery";

export const baseQueryConfig: FetchBaseQueryArgs = {
    baseUrl: "https://crew-back-fcc36df6bf06.herokuapp.com",
    prepareHeaders: (headers) => {
        headers.set('Content-Type', 'application/json');
        headers.set('Accept', 'application/json');
        headers.set('Access-Control-Allow-Origin', '*');

        return headers;
    },
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
};