import css from "./Header.module.css"
import {NavLink, useNavigate} from "react-router";
import clsx from "clsx";
import Logo from '../../assets/logo.svg?react';
import {nextPage} from "../../redux/paginationSlice.js";

function Header ({onReset}) {
    const data = localStorage.getItem("selectionData");
    // const buildLinkClass = ({isActive}) => {
    //     return clsx(css['header-nav-link'], isActive && css['header-nav-link--active']);
    // };

    return (
        <>
            <div className={css['header']}>
                {/*<NavLink to="/" className={css.logo}>*/}
                {/*    <Logo />*/}
                {/*</NavLink>*/}

                {/*<a href="https://send.monobank.ua/jar/9XYpYigJ1A" target="_blank">Зробити донат</a>*/}

                {data && (<button onClick={onReset}>Підібрати знову</button>)}


                {/*<nav className={css['header-nav']}>*/}
                {/*    <NavLink to="/" className={buildLinkClass}>*/}
                {/*        Home*/}
                {/*    </NavLink>*/}

                {/*    <NavLink to="/catalog" className={buildLinkClass}>*/}
                {/*        Catalog*/}
                {/*    </NavLink>*/}
                {/*</nav>*/}
            </div>
        </>
    )
}

export default Header
