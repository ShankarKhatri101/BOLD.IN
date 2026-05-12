import img1 from '../assets/sports1.jpg'
import img2 from '../assets/sports2.jpg'
import img3 from '../assets/sports3.jpg'

function Trending() {
    return (
        <div className="Trending">

            <div className="trendingHeading"><h2>Shop by Sport</h2></div>

            <div className="card-cantainer">

                <div className="cards">
                    <img src={img3} alt="" />
                    <div className="cardDetails">
                        <p>Bold Max</p> 
                        <h2>Above The Inflluence</h2>
                        <button className="shopButton">Shop</button>
                        </div>
                </div>

                <div className="cards">
                    <img src={img1} alt="" />
                    <div className="cardDetails">
                        <p>Bold Max</p> 
                        <h2>Above The Inflluence</h2>
                        <button className="shopButton">Shop</button>
                    </div>
                </div>

                   <div className="cards">
                    <img src={img2} alt="" />
                    <div className="cardDetails">
                        <p>Bold Max</p> 
                        <h2>Above The Inflluence</h2>
                        <button className="shopButton">Shop</button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Trending