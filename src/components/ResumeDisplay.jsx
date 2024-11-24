const pdfpath = "/src/data/oliverhalberg.pdf#zoom=100";
const ResumeDisplay = () => {
    return(
        <div>
            <object id="resumeDisplay" data={pdfpath}>
                <p>Something went wrong, sorry!</p>
            </object>
        </div>
    );
}

export default ResumeDisplay;