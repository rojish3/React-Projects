import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    useEffect(() => {
        const getData = async() => {
            try {
                const res = await axios.get(url)
                setMyData(res.data)
            } catch (error) {
                setIsError(error.message);
            }
        }
        getData();
    },[url]);
     
    return {
        myData, isError
    }
}

export default useFetchData;
