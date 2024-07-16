import { Card } from "../elements/card";
import { Link } from 'react-router-dom';


const icon = [
    { src: '/shippingsvg.svg', title: 'Free Shipping', text: 'No charge for each delivery' },
    { src: '/wallet.svg', title: 'Quick Payment', text: '100% secure payment' },
    { src: '/support.svg', title: '10:00-19:00 Support', text: 'Quick support' },
];

const itemsPreview = [
    { id: 1, src: '/image1.jpg', name: 'Cammile', price: '$65' },
    { id: 2, src: '/image2.jpg', name: 'Cammile', price: '$100' },
    { id: 3, src: '/image3.jpg', name: 'Cammile', price: '$85' },
];

export const Preview = () => {
    return (
        <div className="preview">
            <div className="preview-icons">
                {icon.map((link, index) => (
                    <div key={index} className="preview-icon-wrap">
                        <img
                            src={link.src}
                            alt="icon"
                            className="preview-icon-img"
                        />
                        <div className="preview-icon-text">
                            <h1 className="preview-icon-title">{link.title}</h1>
                            <p className="preview-icon-text-span">{link.text}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="preview-popular">
                <div className="preview-popular-left">
                    <h1 className="preview-popular-left-title">
                        Best Seller Product
                    </h1>
                    <Link to="/shop" className="preview-popular-left-btn">
                        See all collection
                        <img
                            src="/vector.svg"
                            alt="vector"
                            className="preview-left-btn-img"
                        />
                    </Link>
                </div>
                <div className="preview-cards">
                    {itemsPreview.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>

        </div>
    );
};
