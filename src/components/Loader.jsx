import "../styles/loader.css";

function Loader() {
  return (
    <div className="loader-wrap">
        <div className="loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p>Loading</p>
    </div>
  );
}

export default Loader;