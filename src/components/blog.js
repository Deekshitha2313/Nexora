import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
const blogData = [
  {
    id: 1,
    image: require("../assets/images/hero-img1.jpg"),
    time: "15 Nov 2016",
    title: "Coffee Lovers",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/hero-img2.jpg"),
    time: "10 Nov 2016",
    title: "Tips for UI Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/hero-img3.jpg"),
    time: "07 Nov 2016",
    title: "Beautiful Day",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.",
    link: "https://www.twitter.com",
  },
];

export default function AppBlog(){
    return(
        <section className='blogiee' >
         <Container fluid>
            <div className='title'>
                <h2>Our blogs</h2>
                <div className='subtitle'>get our latest news</div>
            </div>
         <Row>
        {
            blogData.map((blog)=>{
                return(
                     <Col sm={4} key={blog.id}>
         <div id='bbooggie' >
             <Card>
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <time>{blog.time}</time>
        <Card.Title>{blog.title}</Card.Title>
        <Card.Text>
         {blog.description}
        </Card.Text>
        <a href={blog.link} className='btn'>Read more</a>
      </Card.Body>
    </Card>
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