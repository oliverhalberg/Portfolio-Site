const PointDisplay = ({ name, points }) => {
    /* Ensures consistent capitalization - some of the object keys returned by the API do not start with a capital letter */
    const nameStart = name.slice(0, 1);
    const nameEnd = name.slice(1);
    const nameProcessed = nameStart.toUpperCase() + nameEnd;
    
    return (
        <p>{nameProcessed}: {points}</p>
    );
}

export default PointDisplay;