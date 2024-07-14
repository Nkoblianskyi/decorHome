import { Card } from "../elements/card"

const icon = [
    { src: '/shippingsvg.svg', title: 'Free Shapping', text: 'No charge for each delivery' },
    { src: '/wallet.svg', title: 'Quick Payment', text: '100% secure payment' },
    { src: '/support.svg', title: '10:00-19:00 Support', text: 'Quick support' },
]

export const Shop = () => {

    return (
        <div className="seller">
            <div className="seller-icons">
                {icon.map((link, index) => (
                    <div key={index} className="seller-icons-wrapp">
                        <img
                            src={link.src}
                            alt="icon"
                            className="seller-icons-wrapp-img"
                        />
                        <div className="seller-icons-text">
                            <h1 className="seller-icons-text-title">{link.title}</h1>
                            <p className="seller-icons-text-title-span">{link.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="seller-shop">
                <div className="seller-shop-left">
                    <h1 className="seller-shop-left-title">
                        Best Seller Product
                    </h1>
                    <button className="seller-shop-left-btn">
                        See all colection
                        <img 
                        src="/vector.svg" 
                        alt="vector" 
                        className="seller-left-btn-img" 
                        />
                    </button>
                </div>
                <Card />
            </div>
        </div>
    )
}