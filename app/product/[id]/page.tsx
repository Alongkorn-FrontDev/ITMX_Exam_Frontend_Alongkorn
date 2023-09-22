import React from "react";
import { useRouter } from 'next/router';
import { Container, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CardProduct from "./cardProduct";
import CardInfo from "./cardInfo";

export default async function Page({ params }: { params: { id: string } }) {

  const data = await fetch(
    `http://localhost:3000/api/product/${params.id}`,
    { next: { revalidate: 10 } }
  );
  const res = await data.json();
  
  await delay(1000);

  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, pt: "70px", pb: "104px" }}>
          <Grid container spacing={2}>
            <Grid xs={12}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <div role="presentation">
                  <Breadcrumbs
                    maxItems={2}
                    aria-label="breadcrumb"
                    separator={<NavigateNextIcon fontSize="small" />}
                  >
                    <Link underline="hover" color="inherit" href="/">
                      Home
                    </Link>
                    <Typography color="text.primary">
                      {res.product.title}
                    </Typography>
                  </Breadcrumbs>
                </div>
                <Stack direction="row" spacing={1}>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  {/* <IconButton aria-label="notification">
                    <NotificationsIcon />
                  </IconButton> */}
                </Stack>
              </Stack>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardProduct data={res.product}></CardProduct>
            </Grid>
            <Grid xs={12} md={6} lg={6}>
              <CardInfo data={res.product}></CardInfo>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
