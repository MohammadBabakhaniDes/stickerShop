import Grid from '@mui/material/Unstable_Grid2';
import './App.css';
import MainLayout from './layouts/MainLayouts';
import { useSelector } from 'react-redux';
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CustomNumeralNumericFormat from './components/CustomNumeralNumericFormat';
import { getAllStickers } from './data/data';


function App() {
  // const { items } = useSelector(state => state.products);
  const items = getAllStickers();


  return (
    <MainLayout mode={"light"}>
      <Helmet>
        <title>فروشگاه استیکر برنامه نویسی</title>
      </Helmet>
      <Typography variant='h4' color="secondary.dark" fontWeight="bold" sx={{ textAlign: "center", mt: 6, mb: 3 }}>خرید بهترین استیکر های برنامه نویسی</Typography>
      <Typography variant='body1' textAlign="center">برنامه نویسی که روی لبتابش استیکر نداشته باشه برنامه نویس نیست 🤗</Typography>
      <Box
        sx={{
          // width: {
          //   xs: "80vw",
          //   lg: "1110px"
          // }, mx: "auto",
          mt: 3
        }}>
        <Card sx={{ mt: 10 }}>
          <Grid container
            spacing={5}
            sx={{ border: 0 }}
          >
            {
              items.map(item => (
                <Grid key={item.id} xs={12} md={6} lg={4}>
                  <Link style={{textDecoration: "none"}} to={`/products/${item.id}`}>
                    <Card sx={{
                      width: 300, mx: "auto", "&.MuiCard-root": {
                        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      }
                    }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          // width="300"                      
                          image={require(`./data/images/${item.sticker}`)}
                          alt="green iguana"
                          sx={{
                            transform: "scale(1,1)",
                            transition: "transform 0.6s",
                            "&:hover": {
                              transform: "scale(1.15,1.15)",
                            }
                          }}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div" color="secondary.dark">
                            {item.title}
                          </Typography>
                          <Typography variant="body1" color="text.secondary">
                            {item.description}
                          </Typography>
                          <Typography mt={3} sx={{ color: "#3f0197", backgroundColor: "#f1f1f1", height: 40, width: 190, display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 2 }}>
                            <CustomNumeralNumericFormat
                              value={item.price}
                              prefix="قیمت: "
                              suffix=" تومان "
                              thousandSeparator=","
                            />
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      {/* <CardActions>
                    <Button
                      size="small" color='primary'>
                        اطلاعات بیشتر راجب محصول
                    </Button>
                  </CardActions> */}
                    </Card>
                  </Link>
                </Grid>
              ))
            }
          </Grid>
        </Card>
      </Box>
    </MainLayout>
  );
}

export default App;
