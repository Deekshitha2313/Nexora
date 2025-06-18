import Carousel from 'react-bootstrap/Carousel';


var heroData = [
  {
    id: 1,
    image: require("../assets/images/hero-img1.jpg"),
    title: "The perfect design for your website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.google.com",
  },
  {
    id: 2,
    image: require("../assets/images/hero-img2.jpg"),
    title: "Start Your Future Financial Plan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.facebook.com",
  },
  {
    id: 3,
    image: require("../assets/images/hero-img3.jpg"),
    title: "Enjoy the Difference",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!",
    link: "https://www.twitter.com",
  },
];

export default function AppHero(){
    return(
      <section className='paraarea'>
        <Carousel data-bs-theme="dark">
            {
                heroData.map((hero)=>{
                    return(
                         <Carousel.Item  key={hero.id}>
                         <img className="carouselimg" src={hero.image} alt={"slide" +hero.id} />
                         <Carousel.Caption className='mymission'>
                         <h5>{hero.title}</h5>
                         <p>{hero.description}</p>
                         <center>
                            <a href={hero.link} className='btnn'>
                           
                             <button className="btn">Learn more</button>

                         </a>
                         </center>
                       
                        
                         </Carousel.Caption>
                         </Carousel.Item>

   
                    )
                })
            }
      </Carousel>
      </section>
    )
}