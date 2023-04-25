import {useState, useEffect} from 'react';
import axios from 'axios';
let count = 1;

function LoadImage() {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos/?client_id=oa4ro8TzOBaEkkbVVABhmSyCfcfEwnFpjWXZDcGU4dQ")
        .then((data) => {
            setState(data.data);
        })
    },[count]);
    return state;
}

function SearchImages(query) {
    const [state, setState] = useState([]);
    useEffect(() => {
        axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=oa4ro8TzOBaEkkbVVABhmSyCfcfEwnFpjWXZDcGU4dQ")
        .then((data) => {
            // setState(data.data);
            setState(data.data.results);
        })
    },[query]);
    return state;
}

export {LoadImage, SearchImages}