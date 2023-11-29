import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-overlay" />
      <div className="inside-container banner-content">
        <div className="row">
          <div className="col-12 content-col">
            <h1 className="site-title">
              Read some great movie reviews and comment on each one!
            </h1>
            <p className="site-title-desc">
              Great place for making friends anf having fun while commenting movies you love.
            </p>
            <Link to='/register' className='banner-btn'>Join us now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner