
const Home = () => {
    return (
        <div id="homepageDiv">
            <h3>Portfolio Website - Oliver Halberg</h3>
            <p>Thanks for visiting! I am currently in the process of building out this website using React. If you're interested, feel free to check out the source code <a href="https://github.com/oliverhalberg/Portfolio-Site">here</a>.</p>
            { /* Placeholder image */}
            <div id="homepageContent">
                <img id="homepageImage" src="../public/oh.svg" />
                <p>
                    I am a recent computer science graduate seeking remote software development roles. I have experience with a variety
                    of technologies, including Android development, web development, command-line tools, and scripting,
                    and have worked with a variety of programming languages such as Java, Python, JavaScript, and OCaml.
                </p>
            </div>
        </div>
    );
}

export default Home;