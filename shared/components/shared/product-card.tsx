import Link from "next/link";


interface Props {
    id: number;
    title: string;
    price?: number;
    oldPrice?: number;
    image: string;
    alt: string;
    categoryId: number
}

export const ProductCard: React. FC<Props> = ({ 
    id,
    title,
    price,
    oldPrice,
    image,
    alt,
    categoryId
    }) => {
    return (
        <div className="products__card">
            <Link href={`/shop/category/${categoryId}/product/${id}`} className="products__image-box">
                <img src={image} alt={alt} className="products__image"/>
            </Link>
            <h4 className="products__name">{title}</h4>
            <div className="products__price-box">
                {oldPrice ? <p className="products__price_old">{oldPrice}</p> : null}
                <p className="products__price">{price}</p>
            </div>
        </div>
    );
};