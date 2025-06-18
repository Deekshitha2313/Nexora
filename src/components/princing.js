import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from "react";


const PriceData=[
    {
         title: "Starter",
         price: 24,
         item1: "2 members",
         item2: "10+ components",
         item3: "2 month free updates",
         item4: "Life time technical support"
    },
    {
         title: "Combo",
         price: 32,
         item1: "4  members",
         item2: "20+ components",
         item3: "5 month free updates",
         item4: "Life time technical support"
    },
    {
         title: "Premium",
         price: 50,
         item1: "10 members",
         item2: "100 components",
         item3: "unlimited month free updates",
         item4: "Life time technical support"
    }
    
];

export default function AppPrice(){
    return(
         <Container fluid>
            <div>
                  <h2 className="title">Pricing & Plans</h2>
            <div className="subtitle">view our updated offers</div>
            </div>
      <Row>
        {
            PriceData.map((price)=>
                {
                return(
                       <Col sm={4}>
                       <div class="pack-container">
                       <div class="header">
                       <p class="titles">{price.title} </p>
                       <div class="price-container">
                       <span>$</span>{price.price}
                       <span>/mo</span>
                       </div>
                       </div>
                       <div>
                       <ul class="lists">
                       <li class="list">
                       <span>
                       <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                       </svg>
                       </span>
                       <p> {price.item1}</p>
                       </li>
                       <li class="list">
                       <span>
                       <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                       </svg>
                       </span>
                       <p>{price.item2}</p>
                       </li>
                       <li class="list">
                       <span>
                       <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                       </svg>
                       </span>
                        <p>{price.item3}</p>
                        </li>
                       <li class="list">
                         <span>
                       <svg aria-hidden="true" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                       <path d="M4.5 12.75l6 6 9-13.5" stroke-linejoin="round" stroke-linecap="round"></path>
                       </svg>
                      </span>
                       <p>{price.item4}</p>
                       </li>
                       </ul>
                       </div>
                      <div class="button-container">
                      <button type="button">
                           Buy Now
                        </button>
                        </div>
                          </div>
                            </Col>
                        );
                 })

               

                }           
      </Row>
    </Container>
       
          
     
    

  );
}

