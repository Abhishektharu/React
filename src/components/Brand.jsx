// import '../App.css'
const Brand = () => {
    return (
        <div className="brand container">
            <div className="content">
                <h1>YOUR FEET
                    DESERVE
                    THE BEST</h1>
                <p>
                    YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
                </p>

                <div className="shop-btn">
                    <button>Shop Now</button>
                    <button className="category-btn">Category</button>
                </div>

                <div className="shopping">
                    <p>Also Available On </p>
                </div>
                <div className="shopping-image-btn">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="filpkart" />
                </div>
            </div>
            <div className="image">
                <img src="/images/shoe_image.png" />
            </div>
        </div>
    )
}

export default Brand;