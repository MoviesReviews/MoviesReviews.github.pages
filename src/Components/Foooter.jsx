function Footer(){
    return(
        <footer className="footer">
        <div className="copyright">
          <div className="inside-container">
            <div className="row">
              <div className="col-md-6 order-2 order-md-12">
                <p>
                  © 2019 All Rights Reserved. 
                </p>
              </div>
              <div className="col-md-6 social order-1 order-md-12">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer