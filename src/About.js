import { Outlet ,Link} from "react-router-dom";

 const About = () => {

    const categories = [
        'Electronics', 'Fashion', 'Home Decor', 'Beauty', 'Sports', 'Books',
        'Toys', 'Jewelry', 'Kitchen Appliances', 'Furniture', 'Groceries',
        'Outdoor Gear', 'Music Instruments', 'Health & Fitness', 'Pet Supplies',
        'Art & Craft', 'Baby Products', 'Automotive', 'Party Supplies', 'Tech Gadgets'
      ];
    return (
      <>
    
        <div className="container my-5">
      <div className="row">
        <div className="col-lg-12 mt-5">
          <h2 className="text-primary">Welcome to Our Shopping Mall!</h2>
          <p className="lead">
            Discover an extraordinary shopping experience where all your needs are met.
          </p>
          <p>
            Have products to sell? You're in luck! Set up your own store and start selling today.
          </p>
          <button className="btn btn-primary btn-lg" >Start Selling</button>
        </div>
        <div className="col-lg-6 ">
          <h3 className="text-info mt-5 text-center">Explore Our Diverse Categories</h3>
          <ul className="list-group">
            {categories.map((category, index) => (
              <li key={index} className="list-group-item">{category}</li>
            ))}
          </ul>
          <p>From electronics to fashion, we have a wide range of categories to choose from.</p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <div className="alert alert-success">
            <h4>Special Offer!</h4>
            <p>
              Register with us this year and get exclusive discounts on your purchases.
            </p>
           <Link to='register'> <button className="btn btn-success">Register Now</button></Link>
          </div>
        </div>
      </div>

      <Outlet/>
    
    </div>
    </>

    )
}

export default About;