import { Badge, Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const NavBar = () => {
    const items = useSelector(state => state.cart.cartItems);
    return (
        <>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={3} mx={2}>
                <Link to={"/"} style={{ textDecoration: "none", fontSize: 20, fontWeight: "bold" }}>فروشگاه استیکر</Link>
                <Link to={"/cart"}><Badge anchorOrigin={{vertical: 'top', horizontal: 'left',
                }} color="info" badgeContent={items.length}><FaCartArrowDown fontSize={25} /></Badge></Link>
            </Box>
            <Divider sx={{ mt: 2 }} />
        </>
    )
}

export default NavBar;