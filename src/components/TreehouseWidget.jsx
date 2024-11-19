import { useEffect } from "react";
import axios from "axios";

const profileURL = "https://teamtreehouse.com/profiles/oliverhalberg.json";

const TreehouseWidget = () => {
    var profileData = {};
    var errorMsg;
    useEffect(() => {
        axios.get(profileURL)
            .then((response) => profileData = response)
            .catch((error) => {
                errorMsg = "Something went wrong, sorry!";
                console.log(error);
            });
    });
    
    return(
        <>
            {errorMsg ? <p>errorMsg</p> : <p>Data retrieved</p>}
        </>
    );
}

export default TreehouseWidget;