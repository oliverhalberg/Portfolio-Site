//for whatever reason, the automatic zoom looks bad on larger screen sizes - it adds a small white bar to the right of the pdf
const pdfpath = "/src/data/oliverhalberg.pdf#zoom=100%";
const ResumeDisplay = () => {
    return (
        <div>
            <object id="resumeDisplay" data={pdfpath} type="application/pdf">
                <p>Something went wrong, sorry!</p>
            </object>
        </div>
    );
}

export default ResumeDisplay;