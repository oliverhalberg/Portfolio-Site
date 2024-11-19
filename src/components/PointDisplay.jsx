const PointDisplay = ({ name, points }) => {
    return (
        <>
            {
                (name === 'total')
                ? 
                <div className="pointDisplay total">
                    <p>Total</p> 
                    <p>{points}</p>
                </div>
                : 
                <div className="pointDisplay">
                    <p>{name}</p> 
                    <p>{points}</p>
                </div>
            }
        </>
    );
}

export default PointDisplay;