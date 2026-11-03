import axios from "axios";

import {
    GNEWSURL,
    GNEWS_SEARCH
} from "../endpoints";

const API_KEY = "207d7c51cedf940216c448d31d71e9c6";


export const getEwasteNews = (search) => {

    return axios.get(
        GNEWSURL + GNEWS_SEARCH,
        {
            params: {
                q: search || "e-waste OR electronic recycling OR electronics waste",
                lang: "en",
                country: "in",
                max: 10,
                apikey: API_KEY
            }
        }
    );
};