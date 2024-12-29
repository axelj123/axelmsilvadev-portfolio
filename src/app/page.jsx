import Resumen from "../sections/sResume";
import AboutMe from "../sections/sAboutMe";
import Projects from "../sections/sProjects";
import Articles from "../sections/sArticles";
import Contact from "../sections/sContact";


function Home() {
    return (
        <div >

          
            {/*Section resume*/}
            <Resumen />
            {/*Section about me*/}
            <AboutMe />
            {/*Section projects */}
            <Projects />
            {/*Section articles */}
            <Articles />
            {/*Section contact */}
            <Contact />

        </div>
    );
}

export default Home