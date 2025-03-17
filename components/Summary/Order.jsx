'use client';
import { useState } from 'react';
import { IconButton, Card, CardContent, Typography, Button, Box, Avatar, TextField, Divider } from '@mui/material';
import { Delete, Add, Remove, LocalOffer } from '@mui/icons-material';

const cartItems = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    size: 'Large',
    color: 'White',
    price: 145,
    image: '/path-to-image/tshirt.png',
    quantity: 1,
  },
  {
    id: 2,
    name: 'Checkered Shirt',
    size: 'Medium',
    color: 'Red',
    price: 180,
    image: '/path-to-image/shirt.png',
    quantity: 1,
  },
  {
    id: 3,
    name: 'Skinny Fit Jeans',
    size: 'Large',
    color: 'Blue',
    price: 240,
    image: '/path-to-image/jeans.png',
    quantity: 1,
  },
];

export default function ShoppingCart() {
  const [items, setItems] = useState(cartItems);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id, amount) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <Box maxWidth={600} mx="auto" p={3} bgcolor="white" borderRadius={2} boxShadow={3}>
      {items.map((item) => (
        <Card key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2, p: 2 }}>
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar src={item.image} alt={item.name} sx={{ width: 56, height: 56, borderRadius: 1 }} />
            <Box>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2" color="textSecondary">Size: {item.size}</Typography>
              <Typography variant="body2" color="textSecondary">Color: {item.color}</Typography>
              <Typography variant="h6" mt={1}>${item.price}</Typography>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            <IconButton onClick={() => removeItem(item.id)} color="error">
              <Delete />
            </IconButton>
            <Box display="flex" alignItems="center" bgcolor="grey.100" px={2} py={1} borderRadius={2}>
              <IconButton onClick={() => updateQuantity(item.id, -1)}>
                <Remove />
              </IconButton>
              <Typography>{item.quantity}</Typography>
              <IconButton onClick={() => updateQuantity(item.id, 1)}>
                <Add />
              </IconButton>
            </Box>
          </Box>
        </Card>
      ))}

      <Box mt={4} p={3} bgcolor="grey.100" borderRadius={2}>
        <Typography variant="h6" fontWeight="bold">Order Summary</Typography>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography>Subtotal</Typography>
          <Typography fontWeight="bold">${subtotal.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Discount (-20%)</Typography>
          <Typography color="error">-${discount.toFixed(2)}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography>Delivery Fee</Typography>
          <Typography fontWeight="bold">${deliveryFee}</Typography>
        </Box>
        <Divider sx={{ my: 2 }} />
        <Box display="flex" justifyContent="space-between" mt={1}>
          <Typography variant="h6" fontWeight="bold">Total</Typography>
          <Typography variant="h6" fontWeight="bold">${total.toFixed(2)}</Typography>
        </Box>

        <Box display="flex" alignItems="center" mt={2}>
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
          <Button variant="contained" sx={{ ml: 2 }}>Apply</Button>
        </Box>

        <Button variant="contained" fullWidth sx={{ mt: 3, bgcolor: 'black', color: 'white', py: 1.5 }}>
          Go to Checkout →
        </Button>
      </Box>
    </Box>
  );
}
