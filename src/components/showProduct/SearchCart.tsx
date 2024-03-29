import { addItem } from "@/redux/features/cart/CartSlice";
import { addFavItem } from "@/redux/features/favorite/favoriteSlice";
import { ProductInterface } from "@/types/Productinterface";
import Image from "next/image";
import Link from "next/link";
import { GrFavorite } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import Button from "../utilityComponent/button/Button";

const SearchCart = ({ button, fav, product }: any) => {
    const dispatch = useDispatch();

    const { favItems } = useSelector((state: any) => state.favItems);

    const alreadyFav = favItems.find((fav: ProductInterface) => fav?.id === product?.id);

    let photos = [];
    if (product?.photos) {
        photos.push(...product.photos.split(","));
    }

    return (
        <div className="relative group max-w-[590px] block  bg-white rounded-3xl overflow-hidden">
            {/* fav icon */}
            {fav && (
                <div
                    onClick={() => dispatch(addFavItem(product))}
                    className={` ${alreadyFav?.id ? "bg-black text-white" : "bg-white "
                        } absolute top-5 left-5 w-10 h-10 border  flex items-center justify-center rounded-full cursor-pointer hover:text-white hover:bg-black duration-300 ease-in`}
                >
                    <GrFavorite size={18} />
                </div>
            )}

            {/* image */}
            <div className=" h-[400px] overflow-hidden">
                <Link href={`/products/${product?.id}`} className=" h-full">
                    <Image
                        className=" w-full h-full "
                        src={process.env.BASE_URL + "/images/" + product?.photo}
                        width={500}
                        height={500}
                        layout="responsive"
                        loading="lazy"
                        alt=""
                    />

                </Link>
            </div>
            <div className=" relative flex justify-between p-8">
                {/* button absulate */}
                {button && (
                    <div
                        onClick={() => dispatch(addItem(product))}
                        className=" absolute right-3 bottom-3 hidden group-hover:block dur"
                    >
                        <Button title="Quick Add" />
                    </div>
                )}

                <h2 className="text-[16px] text-[#3d4246]">{product?.name}</h2>
                <p className="text-[rgba(21,21,31,.42)]">TK: {product?.sale_price}</p>
            </div>
        </div>
    );
};

export default SearchCart;