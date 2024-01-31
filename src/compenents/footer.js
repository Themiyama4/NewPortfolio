import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { Button, Col, Container, Form, Row } from "react-bootstrap";


function Footer(){
   const mydetails = {
    name: "Themiya Madushanka",
    Email: "themiyamadushamka370@gmail.com",
    Address: "Thumphaliya Jaela"
   };

   const ColoredLine = () => (
    <hr
    style={{
            color: "black",
            backgroundColor: "black",
            height: 1,
            width: '75%',
            display:'flex',
            alignItems: 'center'

    }}
    />
    );
   
   
   
   return(<>
  <div className="footerBG">
    <div className="FooterArea">
   <div className="footeritem">

       <div className="iconSize"><FaPhoneSquareAlt /></div> 
        <p className="footterParagraph">Call: {mydetails.name}</p>

   </div>
   <div className="footeritem">
   <div className="iconSize"><MdEmail /></div> 
        <p className="footterParagraph">Email: {mydetails.Email}</p>
    </div>
    <div className="footeritem">
    
    <div className="iconSize"><FaMagnifyingGlassLocation /></div> 
    <p className="footterParagraph">Location: {mydetails.Address}</p>

    </div>
    
    </div>
   <center><ColoredLine /></center> 
   <div className="LastChilds">
   <Container className="mt-5">
      <Row>
        <Col sm={4}>
            <p className="textCaption"> For NewsLetter...</p>
          <Form className="d-flex">
            
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill"
              aria-label="Search"
            />
            <Button className="rounded-pill" variant="outline-primary">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
</div>
    
    </div> 
    </>);
}

export default Footer;