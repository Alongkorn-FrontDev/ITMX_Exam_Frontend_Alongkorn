import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import CardProduct from "./card";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "./page.module.css";

type Props = {}

export default function PageProducts({ data }: Props) {

  return (
    <>
    <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12} md={12}>
          <Typography variant="h3" component="h3">
          PRODUCT
        </Typography>
        </Grid>
        {data.products.map((product: string) => (
           <Grid xs={12} md={3} key={product.id}>
           <CardProduct data={product} key={product.id}></CardProduct>
         </Grid>
        ))}
      </Grid>
    </Box>
    </>
  )
}