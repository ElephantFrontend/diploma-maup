import css from "./ProductCard.module.css"
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {selectFavorites, toggleFavorite} from "../../redux/favoritesSlice.js";

function ProductCard ({product}) {
    const location = useLocation();
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    // const isFavorite = favorites.includes(product.id);
    //
    // const toggleHandler = () => {
    //     dispatch(toggleFavorite(product.id));
    // };

    return (
        <>
            <div className={css['product-card']}>
                <div className={css['product-card-img']}>
                    <img src={product.img} alt={product.name}/>
                </div>

                <div className={css['product-card-details']}>
                    {/*<div className={css['product-card-header']}>*/}
                        <h3 className={css['product-card-name']}>{product.name}</h3>

                        {/*<div className={css['product-card-actions']}>*/}
                            {/*<p className={css['product-card-price']}>&euro;{product.email}</p>*/}
                            {/*<Heart onClick={toggleHandler} className={`${css['product-card-favorites']} ${isFavorite ? css['is-favorites'] : ''}`}></Heart>*/}
                        {/*</div>*/}
                    {/*</div>*/}

                    {/*<div className={css['product-card-rating']}>*/}
                    {/*    <ProductRating rating={product.rating} reviews={product.reviews.length}></ProductRating>*/}

                    {/*    <div className={css['product-card-location']}>*/}
                    {/*        <Map/>{product.location}*/}
                    {/*    </div>*/}
                    {/*</div>*/}

                    {/*<p className={css['product-card-description']}>{product.name}</p>*/}

                    {/*<div className={css['product-card-tags']}>*/}
                    {/*    <Tag text={product.transmission}><Transmission/></Tag>*/}
                    {/*    <Tag text={product.engine}><Engine/></Tag>*/}
                    {/*    {product.kitchen && <Tag text='Kitchen'><Kitchen/></Tag>}*/}
                    {/*    {product.AC && <Tag text='AC'><Ac/></Tag>}*/}
                    {/*</div>*/}

                    {/*<Link className='btn-primary' to={`/catalog/${product.id}`} state={location}>Детальніше</Link>*/}
                    <Link className='btn-primary' target='_blank' to={product.url}>Детальніше</Link>
                </div>
            </div>
        </>
    )
}

export default ProductCard
