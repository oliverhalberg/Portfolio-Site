//for whatever reason, the automatic zoom looks bad on larger screen sizes - it adds a small white bar to the right of the pdf
const pdfpath = "/pdfs/oliverhalberg.pdf#zoom=100%";
//when running in dev, this works without issue
//on the built site, this component displays the website inside of it instead,
// displaying the NotFound component.
// potential fixes:
// - replace the <object> tags with Document from 'react-pdf'
// - I think that the <object> tag's data property is being read by React Router as a path starting from root. restructure files?

const ResumeDisplay = () => {
    return (
        <div>
            <p id="smallScreenNotice">The pdf viewer tends to work better on larger screens. Sorry for the inconvenience!</p>
            <object id="resumeDisplay" data={pdfpath} type="application/pdf">
                <p>Something went wrong, sorry!</p>
            </object>
        </div>
    );
}

export default ResumeDisplay;