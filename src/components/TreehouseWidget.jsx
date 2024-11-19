import { useEffect, useState } from "react";
import axios from "axios";
import PointDisplay from "./PointDisplay";

const profileURL = "https://teamtreehouse.com/profiles/oliverhalberg.json";

const TreehouseWidget = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(profileURL)
            .then((response) => {
                setProfileData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Error");
                console.log(error);
            });
    }, []);



    return (
        <div>
            {(loading) 
            ? <p>Loading data...</p>
            :
                <>
                    <a href={profileData.profile_url}>Treehouse Profile</a>
                    <p>{`Treehouse Username: ${profileData.profile_name}`}</p>
                    <p>{`Badges: ${profileData.badges.length}`}</p>
                    {
                        Object.keys(profileData.points).filter((val) => profileData.points[val] > 0)
                        .map((val) => <PointDisplay name={val} points={profileData.points[val]} />)
                    }
                </>
            }
        </div>
    );
}

export default TreehouseWidget;