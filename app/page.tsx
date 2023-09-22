import Image from "next/image";
import styles from "./page.module.css";
import PageProducts from "./product/page";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default async function Home() {
  const data = await fetch(`http://localhost:3000/api/product`, {
    next: { revalidate: 10 },
  });
  const res = await data.json();
  await delay(1000);
  // console.log(res);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} sx={{ px: "0 !important", pb: 4 }}>
        <Box sx={{ bgcolor: "#cfe8fc", height: {lg: "200px", md: "200px", sx: 'auto'}, py: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" component="h3">
              Welcome To Shop
            </Typography>
            <Typography variant="h5" component="h5">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              nostrum fugiat numquam eligendi quos nihil culpa ab reprehenderit
              odit eum atque quae dolorem libero dolor sint, veniam nesciunt
              quam eius.
            </Typography>
          </Container>
        </Box>
      </Container>
      <Container maxWidth="lg">
        <PageProducts data={res}></PageProducts>
      </Container>
    </>
  );
}

function delay(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}
