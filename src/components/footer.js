import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

export default function AppFooter(){
    const [showTopBtn, setShowBtn]=useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>400){
                setShowBtn(true);
            }
            else{
                setShowBtn(false);
            }
        })
    },[]);

    function goTop(){
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
    return(
       <section className='final'>
        <Container fluid>
      <div className='copyright'>
        &copy; 2024 corporate all rights reserved
      </div>
      
     
      
      {showTopBtn && <div className='go-top' onClick={goTop}></div>}
     
    </Container>
       </section>
    )
}