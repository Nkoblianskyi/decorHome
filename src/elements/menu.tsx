


export const Menu = () => { 
    const navigation = [
        {text: 'Home', href:'/'},
        {text: 'Shop', href:'/'},
        {text: 'About US', href:'/'},
        {text: 'Contact', href:'/'},
    ]
    
    return ( 
        <div className="menu">
            {navigation.map((link, index) => (
                <div key={index} className="menu-item">
                    <a href={link.href} className='menu-item-link'>
                        {link.text}
                    </a>
                </div>
            ))}
        </div>
    )
}