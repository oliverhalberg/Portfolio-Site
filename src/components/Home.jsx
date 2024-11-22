import Shortcut from "./Shortcut";

const routes = [ "About", "Projects", "Resume" ];

const Home = () => {
    return (
        <div>
            {
                /*
                <p>Thanks for visiting! I am currently in the process of building out this website using React. If you're interested, feel free to check out the source code <a href="https://github.com/oliverhalberg/Portfolio-Site">here</a>.</p>
                */
            }
            <h3>Portfolio Website - Oliver Halberg</h3>
            <div id="homepageDiv">
                <div id="homepageContent">
                    <p>
                        I am a recent computer science graduate seeking remote software development roles. I have experience with a variety
                        of technologies, including Android development, web development, command-line tools, and scripting,
                        and have worked with a variety of programming languages such as Java, Python, JavaScript, and OCaml.
                    </p>
                </div>
                <div id="shortcutsContainer">
                    {routes.map( (path) => <Shortcut path={path} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;