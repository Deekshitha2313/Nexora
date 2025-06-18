import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const worksData = [
  {
    id: 1,
    link: "https://www.google.com",
    image: require("../assets/images/img1.jpg"),
    title: "Lonely Path",
    subtitle: "Web Design",
    heading: "Classic Design Customs",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestia explicabo placeat atque praesentium, dolorum corporis amet non, aliquidquasi voluptate delectus nulla exercitationem eius eum, ducimus architectodolores suscipit!",
  },
  {
    id: 2,
    link: "https://www.google.com",
    image: require("../assets/images/img2.jpg"),
    title: "Photographer Girl",
    subtitle: "Branding",
    heading: "Brand Photo Materials",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestia explicabo placeat atque praesentium, dolorum corporis amet non, aliquidquasi voluptate delectus nulla exercitationem eius eum, ducimus architectodolores suscipit!",
  },
  {
    id: 3,
    link: "https://www.google.com",
    image: require("../assets/images/img3.jpg"),
    title: "The Difference",
    subtitle: "Web Design",
    heading: "Unique Quality website",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem molestia explicabo placeat atque praesentium, dolorum corporis amet non, aliquidquasi voluptate delectus nulla exercitationem eius eum, ducimus architectodolores suscipit!",
  }
  ];
export default function AppWorks(){
    return(
        <section>
            <Container fluid>
                <h2 className='title'>Works</h2>
                <div className='subtitle'>what we do</div>
            <Row>
                {
                    worksData.map((works)=>{
                        return(
                             <Col sm={4} key={works.id}>
                                <div>
                                    <a href={works.link}/>
                                    <div>
                                        <div class="flip-card">
                                        <div class="flip-card-inner">
                                        <div class="flip-card-front">
                                       <Image className='workimg' src={works.image}/>
                                       </div>
                                     <div class="flip-card-back">
                                     <div>
                                    <h2 className='hh'>{works.heading}</h2>
                                      <p className='pp'>{works.para}</p>
                                     </div>
                                      </div>
                                     </div>
                                     </div>
                                    </div>
                                   
                                    <div>
                                        <h3>{works.title}</h3>
                                        <div>{works.subtitle}</div>
                                    </div>
                                </div>
                                
                                </Col>
                        )
                    })
                }
            
            </Row>
            </Container>
        </section>
    )
}