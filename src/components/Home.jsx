import Shortcut from "./Shortcut.jsx";
import Notice from "./Notice.jsx";

const routes = ["About", "Projects", "Resume"];

const Home = () => {
    return (
        <div>
            <div id="homepageDiv">
                <Notice />
                <h3 id="homepageTitle">Portfolio Website - Oliver Halberg</h3>
                <div id="homepageContent">
                    <p>
                        I am a recent computer science graduate seeking remote software development roles. I have experience with a variety
                        of technologies, including Android development, web development, command-line tools, and scripting,
                        and have worked with a variety of programming languages such as Java, Python, JavaScript, and OCaml.
                    </p>
                </div>
                <div id="shortcutsContainer">
                    {routes.map((path, i) => <Shortcut path={path} key={i} />)}
                </div>
            </div>
        </div>
    );
}

export default Home;