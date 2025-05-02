//for whatever reason, in older versions of my resume, the automatic zoom looks bad on larger screen sizes - it adds a small white bar to the right of the pdf
//note to self in case it happens again: add "#zoom=100%" to the end of the path
const pdfpath = "/pdfs/oliverhalberg.pdf";

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