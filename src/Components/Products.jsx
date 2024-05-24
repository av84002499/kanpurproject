import React from 'react';

const Products = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col col-4">
          {/* Card - 1 */}
          <div className="card text-bg-primary mb-3" style={{width: '100%', height: '10vh%'}}>
            <img src="Abcin.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
              <h5 className="card-title">Name</h5>
              <h6 className="card-title">₹1,299</h6>
              <a href="!" className="btn btn-primary">buynow</a>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 2 */}
          <div className="card text-bg-primary mb-3" style={{width: '100%', height: '10vh%'}}>
            <img src="Brenowell.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h6 className="card-title">₹1,299</h6>
            <a href="!" className="btn btn-primary">buynow</a>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 3 */}
          <div className="card text-bg-primary mb-3" style={{width: '100%', height: '10vh%'}}>
            <img src="CARRYPOT.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h6 className="card-title">₹1,299</h6>
            <a href="!" className="btn btn-primary">buynow</a>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 4 */}
          <div className="card text-bg-primary mb-3" style={{width: '100%', height: '10vh%'}}>
            <img src="Cylia fort.png" className="card-img-top" alt="card1" style={{width: '348px', height: '400px'}}/>
            <div className="card-body">
            <h5 className="card-title">Name</h5>
            <h6 className="card-title">₹1,299</h6>
            <a href="!" className="btn btn-primary">buynow</a>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 5 */}
         
        </div>
      </div>
    </div>
  );
}

export default Products;
