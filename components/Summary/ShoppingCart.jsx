"use client";
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '@/features/CartSlice';
import { IconButton, Card, Typography, Button, Box, Avatar, TextField, Divider } from '@mui/material';
import { Delete, Add, Remove, LocalOffer } from '@mui/icons-material';
import { useState } from 'react';
import Link from 'next/link';

export default function ShoppingCart({ cart }) {
  const dispatch = useDispatch();
  const [promoCode, setPromoCode] = useState('');

  const handleUpdateQuantity = (item, amount) => {
    dispatch(updateQuantity({ id: item.id, amount }));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <Box width={1200} display="flex" gap={4} justifyContent="space-between" p={3}>
      {/* Shopping Cart List */}
      <Box maxWidth={600} p={2} sx={{ border: '1px solid #0000001A', borderRadius: '20px' }}>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <Card key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', p: 2, borderBottom: index !== cart.length - 1 ? '2px dashed #ddd' : 'none' }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Link href={`product-detail/${item.id}`}>
                  <Avatar src={item.img.main} alt={item.title} sx={{ width: 56, height: 56, borderRadius: 1 }} />
                </Link>
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography variant="body2" color="textSecondary">Size: {item.size}</Typography>
                  <Typography variant="body2" color="textSecondary">Color: {item.color}</Typography>
                  <Typography variant="h6" mt={1}>${item.price}</Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton onClick={() => dispatch(removeFromCart(item.id))} color="error">
                  <Delete />
                </IconButton>
                <Box display="flex" alignItems="center" bgcolor="grey.100" px={2} py={1} borderRadius={2}>
                  <IconButton onClick={() => handleUpdateQuantity(item, -1)}>
                    <Remove />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton onClick={() => handleUpdateQuantity(item, 1)}>
                    <Add />
                  </IconButton>
                </Box>
              </Box>
            </Card>
          ))
        ) : (
          <Typography variant="h6" textAlign="center">Savatcha bo'sh</Typography>
        )}
      </Box>

      {/* Order Summary */}
      <Box p={3} bgcolor="white" borderRadius={2} boxShadow={3} minWidth={300}>
        <Typography variant="h6" fontWeight="bold">Order Summary</Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography>Subtotal</Typography>
          <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Discount (-20%)</Typography>
          <Typography color="error">-${discount.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography>Delivery Fee</Typography>
          <Typography fontWeight="bold">${deliveryFee}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h6" fontWeight="bold">Total</Typography>
          <Typography variant="h6" fontWeight="bold">${total.toFixed(2)}</Typography>
        </Box>

        <Box display="flex" alignItems="center" gap={2} mt={2}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="Add promo code"
            InputProps={{
              startAdornment: <LocalOffer sx={{ mr: 1 }} />,
            }}
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <Button variant="contained">Apply</Button>
        </Box>

        <Button variant="contained" fullWidth sx={{ bgcolor: 'black', color: 'white', py: 1.5, mt: 2 }}>
          Go to Checkout →
        </Button>
      </Box>
    </Box>
  );
}
