import css from "./HomePage.module.css"
import CatalogPage from "../CatalogPage/CatalogPage.jsx";

function HomePage () {

    return (
        <>
            <div className={css['home-page']}>
                <CatalogPage></CatalogPage>
            </div>
        </>
    )
}

export default HomePage
