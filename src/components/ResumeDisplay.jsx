//NOTE TO SELF: removing the "#zoom=100%" broke the PDF viewer the last time I tried.
const pdfpath = "/pdfs/oliverhalberg.pdf#zoom=100%";

const ResumeDisplay = () => {
    return (
        <div>
            <p id="smallScreenNotice">The pdf viewer tends to work better on larger screens. Sorry for the inconvenience!</p>
            <object id="resumeDisplay" data={pdfpath} type="application/pdf">
                <p>Something went wrong, sorry!</p>
            </object>
            <p id="resumeLinkText">If the PDF viewer isn't working, click <a href="https://oliverhalberg.com/pdfs/oliverhalberg.pdf">here</a>.</p>
        </div>
    );
}

export default ResumeDisplay;