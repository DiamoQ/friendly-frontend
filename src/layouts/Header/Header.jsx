import './Header.scss';
import classNames from 'classnames'
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import BurgerButton from "@/components/BurgerButton";

const Header = (props) => {
    const {
        url
    } = props;

    const menuItems = [
        {
            label: 'Home',
            href: '/'
        },{
            label: 'News',
            href: '/news'
        },{
            label: 'Podcasts',
            href: '/podcasts'
        },{
            label: 'Resources',
            href: '/resources'
        },
    ]

    return (
        <header className="header" data-js-overlay-menu=''>
            <div className="header__promo">
                <div className="header__promo-inner container">
                    <a href="/" className="header__promo-link">
                        <span className="icon icon-yellow-arrow">
                            Subscribe to our Newsletter For New & latest Blogs and Resources
                        </span>
                    </a>
                </div>
            </div>
            <div className="header__body">
                <div className="header__body-inner container">
                    <Logo className="header__logo" />
                    <dialog className="header__overlay"
                         data-js-overlay-menu-dialog=''
                    >
                        <nav className="header__navigation">
                            <ul className="header__navigation-list">
                                {menuItems.map(({label, href}, i) => (
                                    <li key={i} className="header__navigation-item">
                                        <a
                                            href={href}
                                            className={classNames("header__navigation-link", {
                                                "is-active": href === url
                                            })}
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <Button
                            className="header__button button button--accent"
                            href="/"
                            label="Contact Us"
                        />
                    </dialog>
                    <BurgerButton
                        className='header__burger-button visible-tablet'
                        extraAttrs={{
                            'data-js-overlay-menu-burger-button': ''
                        }}
                    />
                </div>
            </div>
        </header>
    )
}

export default Header;