import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import work from '../assets/images/work.jpg'


export default function AppAbout(){
    
    return(
       <section>
    <Container fluid>
        <div className='title'>
         <h2>About Us</h2>
        <div className='subtitle'>our work force</div>
        </div>
        <Row>
    <Col sm={5}>
    <Image className='worky' src={work}/>
    </Col>
   
    <Col>
       <div class="bgblue">
    <div class="card">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
    explicabo placeat atque praesentium, dolorum corporis amet non, aliquid
    quasi voluptate delectus nulla exercitationem eius eum, ducimus architecto
    dolores suscipit!
    im theee master the one and only of the greatest creator of this code i types
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestiae
    Explicabo
    im theee master the one and only of the greatest creator of this code i types
      </div>
      </div>
      <div className='progressbar'>
         <div class="rangeWrapper">
            Html/Css/JS:
  <input value="19" max="20" min="1" class="kawaii" type="range" />
   Responsive:
  <input
    value="15"
    max="20"
    min="1"
    class="kawaii"
    type="range"
  />
  Photoshop:
  <input
    value="12"
    max="20"
    min="1"
    className="kawaii"
    type="range"
  />
</div>
</div>
      
    </Col>
    <div className='cubiee'>
         <div className="loop cubes">
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
    <div className="item cubes"></div>
   </div>
    </div>
   

    </Row>
    </Container>
    </section>
    )
}