
const item = [
    {src:'/image1.jpg', name:'Cammile', price:'$ 65'},
    {src:'/image2.jpg', name:'Cammile', price:'$ 100'},
    {src:'/image3.jpg', name:'Cammile', price:'$ 85'},
    
]

export const Card = () => {

    return (
        <div className="card">
            {item.map((link, index) => (
                <div key={index} className="card-wrapp">
                    <div className="card-wrapp-item">
                        <img 
                        src={link.src} 
                        alt=""
                        className="card-wrapp-item-img"
                        />
                    </div>
                    <div className="card-wrapp-text">
                        <h1 className="card-wrapp-text-name">{link.name}</h1>
                        <p className="card-wrapp-text-price">{link.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}