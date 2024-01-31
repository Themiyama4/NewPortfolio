
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaPython,FaJava,FaReact} from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { MdWeb } from "react-icons/md";

function MySkills() {
  return (
    <>
  
   <h1 className='skillHead'>My Skills</h1>

    <div data-aos="fade-in" data-aos-duration="1000"  className="fullprogress">
    
    <div className='progress'></div>
   <ProgressBar animated now={80} /><FaPython />
  <p className='progressCaption'>Python</p>
    <div className='progress'></div>
   <ProgressBar animated now={64} /><FaJava />
   <p className='progressCaption'>Java</p>
    <div className='progress'></div>
   <ProgressBar animated now={75} /><DiMysql />
   <p className='progressCaption'>SQL</p>
    <div className='progress'></div>
   <ProgressBar animated now={45} /><FaReact />
   <p className='progressCaption'>ReactJS</p>
    <div className='progress'></div>
   <ProgressBar animated now={60} /><MdWeb />
   <p className='progressCaption'>Html Css JS</p>
  </div> 
  <div  data-aos="flip-down" data-aos-duration="1000"  className='paragraphAboutMyskill'>
    <p>Continuously enhancing my programming language skills, I am committed to ongoing learning and development. Through hands-on experience and dedicated study, I am expanding my proficiency in various programming languages. This growth reflects my dedication to staying current with industry trends and furthering my capabilities as a versatile programmer.🙃🙃</p>
  </div>
  
  </>
  );
}

export default MySkills;