import React from 'react';

const Products = () => {
  return (
    <div className="container">
      <div className="row">
      
        <div className="col-md-4">
          <div className=" card-inverse card-primary text-center">
            <img src="Brenowell.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
              <h4 className="card-title">This is Card #2</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
  
        <div className="col-md-4">
          <div className=" card-inverse card-success text-center">
            <img src="CARRYPOT.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
              <h4 className="card-title">This is Card #3</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
  
        <div className="col-md-4">
          <div className="card-inverse card-info text-center">
            <img src="Cylia fort.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
              <h4 className="card-title">This is Card #4</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
        </div>
  
      </div>
    </div>
  );
}

export default Products;
