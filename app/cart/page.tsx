import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Cart from "./card";
import TestCart from "./cart";

type Props = {};

export default function PageProducts({}: Props) {
  return (
    <>
      <Container maxWidth="md">
        <Box sx={{ flexGrow: 1, py: 4 }}>
          <Grid container spacing={2}>
            <Grid xs={12} md={12}>
              <Typography variant="h4" component="h2">
                Shopping Cart
              </Typography>
            </Grid>
            <Cart></Cart>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
