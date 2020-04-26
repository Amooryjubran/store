import React from 'react';
import Title from '../Title';


export default function Contact() {
    return (
        <section className="py-5">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="contact us" />
            <form className="mt-5" action="https://formspree.io/omarsalehjubran@gmail.com" method="POST">
              {/* first */}
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              {/* email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              {/* subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Title"
                />
              </div>
              {/* message */}
              <div className="form">
                <textarea
                  name="message"
                  className="form-control"
                  rows="10"
                  placeholder="Your Request ...."
                />
              </div>
              {/* submit method*/}
              <div className="form-goup mt-3">
                  <input type="submit" value="Send" className="form-control bg-primary text-white"/>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
}
