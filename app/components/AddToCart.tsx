'use client'

import React, { useState } from 'react'
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import { addToCart } from '../redux/slices/cartSlice'

export default function AddToCart({
  product,
  showQty = true,
  redirect = false,
  increasePerClick = false,
}) {
  const dispatch = useDispatch()

  const { cartItems } = useSelector((state) => state.cart)
  const router = useRouter()
  const [qty, setQty] = useState(1)

  const addToCartHandler = () => {
    let newQty = qty
    if (increasePerClick) {
      const existItem = cartItems.find((x) => x.id === product.id)
      if (existItem) {
        if (existItem.qty + 1 <= product.countInStock) {
          newQty = existItem.qty + 1
        } else {
          return alert('No more product exist')
        }
      }
    }
    dispatch(addToCart({ ...product, qty: newQty }))

    if (redirect) router.push('/cart')
  }

  return (
    <>
       <Box sx={{ width: "100%", display: "block", bottom: "0" }}>
        <Stack spacing={2} direction="row" justifyContent="end" sx={{ py: 4 }}>
        {product.countInStock > 0 ? (
           <Button
           variant="outlined"
           size="small"
           color="primary"
           onClick={addToCartHandler}
         >
           Add Cart
         </Button>
        ) : (
          <Button
          variant="outlined"
          size="small"
          color="primary"
          disabled
        >
          Out of stock
        </Button>
        )}
        </Stack>
      </Box>
    </>
  )
}
