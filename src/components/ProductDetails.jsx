import { Button, Avatar, Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";
import { addToCart, getTotal } from "../slices/CartSlice";
import { toast } from "react-toastify";
import { getSticker } from "../data/data";


const ProductDetails = () => {
    const { productID } = useParams();
    // const product = useSelector(state => state.products.items.find(item => item.id === productID));
    const product = getSticker(productID);
    const dispatch = useDispatch();
    const item = useSelector(state => state.cart.cartItems.find(item => item.id === productID));

    // باید رندر شرطی پیاده کنی تا موقع رفرش ارور نگیری

    if (typeof product === "undefined") {
        return (
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2">برادر مه مشکلی پیش آمده یه لحظه صبر کو خو</Typography>
            </Box>
        )
    }
    else {
        let storee;
        let clr;
        if(typeof item !== "undefined") {
            storee = item.quity > 0 ? "در انبار موجود است" : "در انبار موجود نیست";
            clr = item.quity > 0 ? "#568d00" : "red";
        } else {
            storee = product.quity > 0 ? "در انبار موجود است" : "در انبار موجود نیست";
            clr = product.quity > 0 ? "#568d00" : "red";
        }

        return (
            <>
                <Helmet>
                    <title>{product.title}</title>
                </Helmet>
                <Box width={800} margin="0 auto" display="flex" justifyContent="center">
                    <Avatar sx={{
                        width: 430, height: 430, transform: "scale(1,1)",
                        transition: "transform 0.6s",
                        "&:hover": {
                            transform: "scale(1.1,1.1)",
                        }
                    }} variant="square" src={require(`../data/images/${product.sticker}`)} />
                    <Box sx={{ width: 800, height: 50, mt: 1, ml: 3 }}>
                        <Link to={"/"} style={{ fontSize: 20, textDecoration: "none", border: "1px solid #5e00e5", color: "#5e00e5", borderRadius: 2, fontWeight: 'bold', padding: "6px 45px 6px 45px" }}>برگشت به صفحه محصولات</Link>
                        <Typography variant="h5" fontWeight="bold" mt={5} color="secondary.dark">{product.title}</Typography>
                        <Typography variant="h6" width={300} fontSize={18} mt={3}>{product.description}</Typography>
                        <Typography variant="h6" color="secondary.dark" width={300} fontSize={18} mt={3}>
                            <CustomNumeralNumericFormat
                                value={product.price}
                                prefix="قیمت: "
                                suffix=" تومان "
                                thousandSeparator=","
                            />
                        </Typography>
                        <Typography variant="h6" color={clr} width={300} fontSize={15} my={3}>{storee}</Typography>
                        <Link to={"/cart"} style={{ fontSize: 20, width: 500, textDecoration: "none", border: "1px solid #5e00e5", backgroundColor: "#5e00e5", color: "#fff", borderRadius: 2, fontWeight: 'bold', padding: "6px 85px 6px 85px" }} onClick={() => {
                            if (typeof item !== "undefined") {
                                dispatch(addToCart(item));
                                dispatch(getTotal());
                            } else {
                                dispatch(addToCart(product));
                                dispatch(getTotal());
                            }
                        }}>اضافه به سبد خرید</Link>
                    </Box>
                </Box>
            </>
        )
    }
}

export default ProductDetails;