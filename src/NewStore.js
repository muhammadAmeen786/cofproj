import { useState, useEffect } from "react";
import "./store.css";

function Store() {
  const [maindata, setMaindata] = useState([]);

  useEffect(() => {
    async function storeFun() {
      let storedata = await fetch("https://fakestoreapi.com/products");
      let maindata = await storedata.json();
      console.log(maindata);
      setMaindata(maindata);
    }
    storeFun();
  }, []);

  const fakeElems = (elems) => {
    return elems.map((elem) => (
      <li>
        {/* <div className="mainDiv">
          <div className="innerDiv">
            <img src={elem.image} alt="img"></img>
            <p>{elem.id}</p>
            <h3>{elem.title}</h3>
            <p>{elem.description}</p>
            <p>{elem.price}</p>
            <button>BuyNow</button>
          </div>
        </div> */}
        <div class="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={elem.image} alt="CardImg" />
          <h4 className="text-center">Shop Type : {elem.category}</h4>
          <h6 className="text-right">shopNumber : {elem.id}</h6>
          <div className="card-body">
            <h5 className="card-title">{elem.title}</h5>

            <p className="card-text">{elem.description.slice(0, 200)}...</p>

            <a href="/" class="btn btn-primary">
              Visit Store
            </a>
          </div>
        </div>
      </li>
    ));
  };

  return (
    <>
      <div className="divMain">{fakeElems(maindata)}</div>
    </>
  );
}
export default Store;
