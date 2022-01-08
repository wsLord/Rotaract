import React from 'react'
import {useLocation} from 'react-router-dom'
import { Image } from 'react-bootstrap';
const Gallery = () => {
    let data = useLocation();
    let list = data.state.list;
    
    return (
        <div className="container text-center my-4 p-4">
          <ol className="list-group list-group-numbered">
            {list.map((item, index) => {
              console.log(":::::::", item.src);
              <Image className="img-fluid p-2 border" src={item.src}></Image>
            })}
          </ol>
        </div>
      );
};

export default Gallery;
