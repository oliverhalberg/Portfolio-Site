import TreehouseWidget from "./TreehouseWidget";

const About = () => {
    return (
        <div id="aboutContent">
            <div className="aboutMe">
                <h2>About Me</h2>
                <p>I am an amateur software developer, programmer, and open-source enthusiast who enjoys learning new technologies and skills. Outside of computer science, I am a musician and proud nerd who can often be found playing video games or tabletop role-playing games, reading, or playing music.</p>
                <p>Location: Shelburne, Vermont, United States</p>
            </div>
            <h2>Education</h2>
            <div id="educationContainer">
                <h3>Vassar College</h3>
                <p className="dateRange">August 2020 - May 2024</p>
                <div className="education">
                    <div className="educationList">
                        <p>
                            Bachelor of Arts in Computer Science <br />
                            Correlate in French and Francophone Studies <br />
                            Graduated with Departmental and General Honors
                        </p>
                    </div>
                    <div className="relevantCoursework">
                        <p>
                            <b>Relevant Coursework: </b>Computer Science I: Problem Solving and Abstraction, Computer Science II: Data Structures and Algorithms,
                            Foundations of Computer Science, Computer Organization, Theory of Computation,
                            Computer Science III: Software Design and Implementation, Analysis of Algorithms, Operating Systems,
                            Bioinformatics, Compilers, Computational Linguistics
                        </p>
                    </div>
                </div>
            </div>
            <div id="otherCourses">
                <h2>Other courses/Certifications</h2>
                <div className="course-cert">
                    <h3>Treehouse - Humble Bundle: Full Stack JavaScript + Learn React Track</h3>
                    <p className="dateRange">July 2024 - November 2024</p>
                    <p>
                        In July 2024, I enrolled in a series of courses through Treehouse in order to learn the basics of full-stack
                        web development, including JavaScript, Node.js, Express.js, SQL basics, and React.js.
                    </p>
                </div>
                <TreehouseWidget />
            </div>
            <div id="workExperience">
                <h2>Relevant Work Experience</h2>
                <div className="work">
                    <h3>Computer Science Department Coach, Vassar College</h3>
                    <p className="dateRange">September 2022 - May 2024</p>
                    <p>
                        During my third and fourth years at Vassar College, I was hired by the Computer Science Department to work as a student coach
                        for three different intermediate-level computer science courses (Computer Science II: Data Structures and Algorithms,
                        Computer Science III: Software Design and Implementation, and Computer Organization) over four semesters. As a coach, I assisted
                        professors during labs and held office hours where students could come for help on course materials and assignments. I gained
                        valuable experience debugging code, providing constructive feedback, and communicating computer science concepts in an understandable
                        fashion.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;