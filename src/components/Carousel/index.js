import React from "react";
import Carousel from 'better-react-carousel';
import "./index.css"
import Apis from "../Apis";

const arr = [1,2,3,4,5]

const Carousela = (props) => {

 const list = arr.map(item => {
   return (
       <div key={item}>{props.data.observation_time}</div>
     )
  })
  
    return (
    <Carousel cols={2} rows={1} gap={10} loop>
      
      <Carousel.Item>
        <div className="carousel">
          <img  src="https://picsum.photos/800/600?random=1" width="100%"/>
          <div className="item">
            {list}
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="carousel"> 
          <img src="https://picsum.photos/800/600?random=2" width="100%" />;
          <div className="item">
            { <Apis /> }
          </div>
          
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div >
          <img src="https://picsum.photos/800/600?random=3"  width="100%" />  
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div >
        <img src="https://picsum.photos/800/600?random=4" width="100%" />
        </div>
      </Carousel.Item>
      
    </Carousel>
    )
}

export default Carousela
