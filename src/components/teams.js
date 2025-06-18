import Image from 'react-bootstrap/Image';
import team2 from '../assets/images/team2.jpg';
import team3 from '../assets/images/team3.jpg';
import team4 from '../assets/images/team4.jpg';
import team5 from '../assets/images/team5.jpg';
import team6 from '../assets/images/team6.jpg';
import team7 from '../assets/images/team7.jpg';

export default function AppTeams(){
    return(
        <section >
            <h2 className='title'>Our team</h2>
            <div className='subtitle'>expert people to guide</div>
             <div class="containers">

  <div class="left">
    <div class="image-box">
      <Image src={team2} alt="Left 1" />
      <div class="description">John Moses
        <p>CEO</p>
      </div>
    </div>
    <div class="image-box">
      <Image src={team3} alt="Left 2" />
      <div class="description">Deekshi
        <p>assisstant CEO</p>
      </div>
    </div>
     <div class="image-box">
      <Image src={team4} alt="Left 2" />
      <div class="description">Bubiling
        <p>frontend developer</p>
      </div>
    </div>
  </div>
  
  <div class="center-content">
    <div id='pp2' className="loader"></div>
    <h4 className='pp' id='pp3'>At the heart of our company is a team of skilled, passionate, and forward-thinking professionals who bring a diverse range of expertise to everything we do. From innovative problem-solving to technical excellence and creative collaboration, our employees are the driving force behind every success. Their deep industry knowledge and commitment to quality allow us to deliver exceptional solutions and continuously exceed expectations.
         We are proud to recognize the unique strengths each team member brings to the table — whether it's in engineering, customer service, design, marketing, or operations. Our employees are not only highly capable but also constantly evolving, embracing learning and growth to stay ahead in a fast-changing world. 
</h4>
 
  </div>
  

  <div class="right">
    <div class="image-box">
      <Image src={team5} alt="Right 1"/>
      <div class="description">
        Geniese Alora
        <p>Financial manager</p>
      </div>
    </div>
    <div class="image-box">
      <Image src={team6} alt="Right 2"/>
      <div class="description">Laura max
        <p>Administrator</p>
      </div>
    </div>
    <div class="image-box">
      <Image src={team7} alt="Right 3" />
      <div class="description">Moana diamonds
        <p>assisstant</p>
      </div>
    </div>
  </div>
</div>
        </section>
       

    )
}