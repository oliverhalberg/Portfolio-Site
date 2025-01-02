import { useEffect, useState } from "react";
import axios from "axios";
import PointDisplay from "./PointDisplay.jsx";

const profileURL = "https://teamtreehouse.com/profiles/oliverhalberg.json";

const TreehouseWidget = () => {
    const [profileData, setProfileData] = useState({});
    const [loading, setLoading] = useState(true);

    /* Data fetching */
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
                <div id="treehouseWidgetContainer">
                    <div id="treehouseWidget">
                        <div id="treehouseWidgetText">
                            <p>{`Treehouse Username: ${profileData.profile_name}`}</p>
                            <p><a href={profileData.profile_url} className="externalLink">Profile</a></p>
                            <p>{`Badges: ${profileData.badges.length}`}</p>
                        </div>
                        <div id="pointsContainer">
                            <h4>Points:</h4>
                            <div id="pointDisplayContainer">
                                {
                                    Object.keys(profileData.points).filter((val) => profileData.points[val] > 0)
                                        .map((val, i) => <PointDisplay name={val} points={profileData.points[val]} key={i} />)
                                }
                            </div>
                        </div>
                    </div>
                    <p id="widgetFootnote">Data obtained using the Treehouse Users API</p>
                </div>
            }
        </div>
    );
}

export default TreehouseWidget;