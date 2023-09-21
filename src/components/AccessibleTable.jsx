import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomNumeralNumericFormat from './CustomNumeralNumericFormat';
import { addToCart, decreaseCart, getTotal, removeFromCart } from '../slices/CartSlice';
import { toast } from 'react-toastify';



export default function AccessibleTable() {
    const items = useSelector(state => state.cart.cartItems);
    const dispatch = useDispatch();

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ color: "secondary.dark" }}>محصول</TableCell>
                        <TableCell sx={{ color: "secondary.dark" }}>تعداد</TableCell>
                        <TableCell sx={{ color: "secondary.dark" }}>قیمت</TableCell>
                        <TableCell sx={{ color: "secondary.dark" }}>حذف</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.title}
                            </TableCell>
                            <TableCell>
                                {/* <Link><AddIcon sx={{ mt: 1, mr: 0.5 }} /></Link> */}
                                <IconButton onClick={() => {
                                    // if (row.quity === 0) {
                                    //     toast.error("از این محصول بیشتر در انبار نیست");
                                    // } 
                                    // else {
                                        dispatch(addToCart(row));
                                        dispatch(getTotal());
                                    // }
                                }} color='success'><AddIcon /></IconButton>
                                <TextField value={row.cartQty} inputProps={{ readOnly: true }} sx={{ width: 47 }} size='small' />
                                <IconButton onClick={() => {
                                    dispatch(decreaseCart(row));
                                    dispatch(getTotal());
                                }} color='error'><RemoveIcon /></IconButton>

                            </TableCell>
                            <TableCell>
                                <CustomNumeralNumericFormat value={row.price * row.cartQty} suffix=" تومان " thousandSeparator="," />
                            </TableCell>
                            <TableCell>
                                <IconButton onClick={() => {
                                    dispatch(removeFromCart(row));
                                    dispatch(getTotal());
                                }} aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            {/* <TableCell>{row.protein}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}