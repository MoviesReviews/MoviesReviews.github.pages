function Banner(){
    return(
        <div className="banner">
        <div className="banner-overlay" />
        <div className="inside-container top-bar">
          <div className="row">
            <div className="col-md-4 top-bar-left order-2 order-md-12">
              <a href="mailto:info@webdomus.net">Menu</a>
            </div>
            <div className="col-md-4 logo order-1 order-md-12 ownLogo">
              Movie Reviews
            </div>
            <div className="col-md-4 top-bar-right order-3 order-md-12">
              <a href="tel:+39.0874.484661">Login</a>
            </div>
            {/* <div className="col-md-4 top-bar-right order-3 order-md-12">
              <a href="tel:+39.0874.484661">Register</a>
            </div> */}
          </div>
        </div>
        <div className="inside-container banner-content">
          <div className="row">
            <div className="col-12 content-col">
              <h1 className="site-title">
                Read some great movie reviews and comment on each one!
              </h1>
              <p className="site-title-desc">
                Great place for making friends anf having fun while commenting movies you love.
              </p>
              <a className="banner-btn" href="#">
                Join us now
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Banner