import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function About(){
    return(<>
    
    <h1 data-aos="fade-up" data-aos-duration="1000" className="hHead">About me..</h1>
    <div className="AllAbout">
        <div data-aos="fade-in" data-aos-duration="1000" className="image">

        </div>
        <div className="paragraph">
            <p data-aos="zoom-in" data-aos-duration="1000" className="fistPara">
            I'm Themiya Madhushanka, an 18-year-old embarking on my journey, eager to explore and create in my first project.
            </p>
            <p data-aos="zoom-in" data-aos-duration="1000" className="secondPara">
            In my quest for knowledge, delving into backend development fascinates me, unraveling the intricacies of server-side technologies. </p>
            <p data-aos="zoom-in" data-aos-duration="1000"className="thirdPara">
            Simultaneously, my curiosity drives me to explore the vast realm of artificial intelligence, eager to grasp its nuances and contribute to the evolving landscape of AI technologies.   </p>
            <p data-aos="zoom-in" data-aos-duration="1000" className="thirdPara">As I delve into backend development, the allure lies in deciphering the intricacies of server-side technologies. Simultaneously, my insatiable curiosity propels me into the expansive realm of artificial intelligence. Eager to grasp its nuanced intricacies, I am poised to contribute to the dynamic evolution of AI technologies.</p>
        </div>

    </div>
    
    </>);
}

export default About;