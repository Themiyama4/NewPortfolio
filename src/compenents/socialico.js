import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

function Icons(){
    return (<>
    <div className="icons">
       <a data-aos="flip-up" data-aos-duration="1000" href="#"><h1><FaGithub /></h1></a> 
       <a data-aos="flip-down" data-aos-duration="1000" href="#"><h1><FaInstagram /> </h1></a>
       <a data-aos="flip-up" data-aos-duration="1000" href="#"><h1><FaFacebook /> </h1></a>  

      
    </div>

       <center><p data-aos="zoom-in" data-aos-duration="1000"className="mottoes">"Inspiring Innovation, Building Tommorow"</p></center> 
      <center><a href="/about"><button  className="buttoncols">About me</button></a></center> 
    

    
      

    
    
    </>);
}

export default Icons;