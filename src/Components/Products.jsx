import React from 'react';

const Products = () => {
  return (
    <div className='container mt-5'>

      <div className="row">

        <div className="col col-4">
          {/* Card - 1 */}
          <div className="card text-bg-primary mb-3 ">
            <div className="card-body">
              <img src="Abcin.png" class="card-img-top" style={{ width: '70%', height: '10%' }}></img>
              <h2 className="card--title1">Good Morning</h2>
              <h5 className="card-title">Moderate-intensity aerobic activity</h5>
              <p className="card-text">(such as brisk walking) for 150 minutes (for example, 30 minutes a day, 5 days a week</p>

            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 2 */}
          <div className="card text-bg-primary mb-3 ">
            <div className="card-body">
            <img src="Brenowell.png" class="card-img-top" style={{ width: '70%', height: '10%' }}></img>
            <h2 className="card-title">Balance activities</h2>
              <p className="card-text">Walking heel-to-toe or standing from a sitting position And on 2 or more days a week that work all major muscle groups an An equivalent mix of moderate.</p>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 3 */}
          <div className="card text-bg-primary mb-3 ">
            <div className="card-body">
            <img src="CARRYPOT.png" class="card-img-top" style={{ width: '70%', height: '10%' }}></img>
            <h5 className="card-title">Breakfast </h5>
              <p className="card-text">Veg Breakfast </p>
            </div>
          </div>
        </div>

        <div className="col col-4">
          {/* Card - 4 */}
          <div className="card text-bg-info mb-3 ">
            <div className="card-body">
            <img src="Cylia fort.png" class="card-img-top" style={{ width: '70%', height: '10%' }}></img>
            <h5 className="card-title">It's Medicine Time </h5>
              <p className="card-text">Taking a medicine after morning Breakfast </p>
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
