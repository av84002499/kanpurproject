import React from 'react';

const Contact = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card shadow-lg p-4" style={{ width: '40%', height: '600px' }}>
        <form>
          <div className='container-sm'>
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                  aria-controls="pills-login" aria-selected="true">Contact Form</a>
              </li>
            </ul>
            <div className="form-outline mb-4">
              <input type="text" id="Email" className="form-control" />
              <label className="form-label" htmlFor="Email">Email</label>
            </div>
            <div className="form-outline mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">Email</label>
            </div>
            <div className="form-outline mb-4">
              <input type="phonenumbers" id="phonenumbers" className="form-control" />
              <label className="form-label" htmlFor="phonenumbers">Phonenumbers</label>
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Write your concern</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary btn-block col-4">Send Massage</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
