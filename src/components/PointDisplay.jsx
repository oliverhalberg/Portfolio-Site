const PointDisplay = ({ name, points }) => {
    return (
        <>
            {
                (name === 'total')
                ? 
                <div className="pointDisplay total">
                    <p>Total: {points}</p> 
                </div>
                : 
                <div className="pointDisplay">
                    <p>{name}: {points}</p> 
                </div>
            }
        </>
    );
}

export default PointDisplay;