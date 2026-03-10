import "../styles/banner.css";

function Banner() {

  return (
   <div className="banner">
        <div className="container banner-wrap">
            <h1>Product Manager</h1>
            <p>Manage the product list efficiently.</p>
              <div className="search-wrap">
                  <div className="search-bar">
                      <input name="search" type="text" placeholder="Search products..." className="search-input" />
                      <button className="search-btn">
                         <svg className="search-icon" viewBox="0 -0.5 25 25" xmlns="http://www.w3.org/2000/svg" > 
                            <path fill="none" fillRule="evenodd" clipRule="evenodd" d="M5.5 10.7655C5.50003 8.01511 7.44296 5.64777 10.1405 5.1113C12.8381 4.57483 15.539 6.01866 16.5913 8.55977C17.6437 11.1009 16.7544 14.0315 14.4674 15.5593C12.1804 17.0871 9.13257 16.7866 7.188 14.8415C6.10716 13.7604 5.49998 12.2942 5.5 10.7655Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> 
                            <path d="M17.029 16.5295L19.5 19.0005" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /> 
                         </svg>
                          Search
                      </button>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Banner;