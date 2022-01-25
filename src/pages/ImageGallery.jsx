import React, { useState, useEffect, useContext } from "react";

import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import CardImage from "../components/CardImage";
import Copyright from "../components/Copyright";

import { getImages } from "../api/Api";
import { AuthContext } from "../context/AuthContext";

const theme = createTheme();

const Album = () => {
    const { user } = useContext(AuthContext);
    const [images, setImages] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getImages();
            setImages(response.data);
            console.log(response);
        })();
    }, []);

    const removeFromList = (index = 0) => {
        // const array = images;
        // const arraySize = array.length;
        // if (arraySize >= 1 && arraySize - 1 >= index) {
        //     array.splice(index, 1);
        //     refreshImages(array);
        //     setRefresh(refresh + 1);
        // }
    };

    return (
        <>
            {/* {loading ? (
                <h1>Carregando...</h1>
            ) : ( */}
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <CameraIcon sx={{ mr: 2 }} />
                        <Typography variant="h6" color="inherit" noWrap>
                            Imagens | Teste de Front-end
                        </Typography>
                    </Toolbar>
                </AppBar>

                <main>
                    <Container sx={{ py: 8 }} maxWidth="md">
                        <Grid container spacing={4}>
                            {/* {images.map((image, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <CardImage
                                        image={image}
                                        index={index}
                                        removeFromList={removeFromList}
                                    />
                                </Grid>
                            ))} */}
                        </Grid>
                    </Container>
                </main>

                <Box
                    sx={{ bgcolor: "background.paper", p: 6 }}
                    component="footer"
                >
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    ></Typography>
                    <Copyright />
                </Box>
            </ThemeProvider>
            {/* )} */}
        </>
    );
};

export default Album;