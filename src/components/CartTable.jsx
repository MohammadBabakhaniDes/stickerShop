import { Box, Typography } from "@mui/material";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import AccessibleTable from "./AccessibleTable";
import CustomNumeralNumericFormat from "./CustomNumeralNumericFormat";
import { Link } from "react-router-dom";

const CartTable = () => {
    const items = useSelector(state => state.cart);

    if (items.cartItems.length === 0) {
        return (
            <>
                <Helmet>
                    <title>سبد خرید</title>
                </Helmet>
                <Typography textAlign={"center"} variant="body1" mt={5}>سبد خرید شما خالی است 🤗</Typography>
            </>
        )
    }
    else {
        return (
            <>
                <Helmet>
                    <title>سبد خرید</title>
                </Helmet>
                <Box>
                    <Typography variant="h4" fontWeight={"bold"} textAlign={"center"} my={5} color="secondary.dark" >سبد خرید شما</Typography>
                    <AccessibleTable />
                </Box>

                <Box display={"flex"} justifyContent={"center"} alignItems={"center"} mt={4}>
                    <Typography variant="h6" mr={7}>قیمت کل: </Typography>
                    <Typography variant="h5" color={"secondary.dark"}><CustomNumeralNumericFormat thousandSeparator="," value={items.itemsPrice} suffix={" تومان"}></CustomNumeralNumericFormat></Typography>
                </Box>

                <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} mt={7}>
                <Link to={"/"} style={{ fontSize: 18, textDecoration: "none", border: "1px solid #5e00e5", backgroundColor: "#5e00e5", color: "#fff", borderRadius: 2, fontWeight: 'bold', padding: "6px 145px 6px 145px" }}>
                    تایید نهایی
                </Link>
                <Link to={"/"} style={{ fontSize: 18, textDecoration: "none", border: "1px solid #5e00e5", backgroundColor: "#fff", color: "#5e00e5", borderRadius: 2, fontWeight: 'bold', marginTop: 20, padding: "6px 84px 6px 84px" }}>
                    برگشت به صفحه محصولات
                </Link>
                </Box>
            </>
        )
    }
}

export default CartTable;