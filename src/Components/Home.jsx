import React from 'react';
import Caroimg from "./Caroimg";

const Home = () => {
  return (
    <>
      <div>       
        <Caroimg />
      </div>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="2.jpg" className="card-img" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">ISO certification is a seal of approval that a business has met the International Standards 
              Organization's (ISO) quality process standards. The ISO is a non-governmental organization that sets specifications
              for products, services, and systems to ensure quality and efficiency. ISO certification demonstrates that an 
              organization has developed, maintains, and improves its business processes by measuring and comparing performance 
              to quality standards.</p>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Home;
