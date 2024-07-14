import { Logo } from "../elements/logo"
import { Menu } from "../elements/menu"

export const Footer = () => {
    return (
        <div className="footer">
            <Logo/>
            <Menu/>
            <address className="footer-address">
                <a href="google.com">ul.Wislicka 5</a>
            </address>
            <div className="footer-producer">
                <p className="footer-producer-text">© 2024 Nykyta Koblianskyi- All rights reserved. </p>
            </div>
        </div>
    )
}