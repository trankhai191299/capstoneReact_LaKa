import React from 'react'

export default function Footer() {
  return (
    <footer className="footer mt-5 pt-5">
  <div className="line line-1">
    <div className="container">
      <div className="row row-1 text-start">
        <div className="col-md-4  col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">get help</h4>
            </div>
            <div className="info d-flex flex-column">
              <a href="#">Contact us</a>
              <a href="#">Shopping</a>
              <a href="#">NIKEiD</a>
              <a href="#">Nike +</a>
            </div>
          </div>
        </div>
        <div className="col-md-4  col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">orders</h4>
            </div>
            <div className="info d-flex flex-column">
              <a href="#">Payment options</a>
              <a href="#">Shipping and delivery</a>
              <a href="#">Returns</a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-md-0 mt-3 col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">register</h4>
            </div>
            <div className="info">
              <p>
                Create one account to manage everythingyou do with Nike,
                form your shopping preferences to your Nike+ activity
              </p>
              <a href="./register.html" className="other-link">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="line line-2">
    <div className="container">
      <div className="row row-2 text-start">
        <div className="col-md-4 col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">email sign up</h4>
            </div>
            <div className="info">
              <p>
                Be the first to know about new products and special offers
              </p>
              <a href="#" className="other-link">
                Sign up now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">gift cards</h4>
            </div>
            <div className="info">
              <p>Give the gift that always fits</p>
              <a href="#" className="other-link">
                View cards
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4 mt-md-0 mt-4 col-6">
          <div className="footer-content">
            <div className="title">
              <h4 className="text-uppercase">stores near you</h4>
            </div>
            <div className="info">
              <p>Locate a Nike retail store or authorized retailer</p>
              <a href="#" className="other-link">
                Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}
