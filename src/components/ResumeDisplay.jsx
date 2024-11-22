const pdfpath = "/src/data/oliverhalberg.pdf";
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