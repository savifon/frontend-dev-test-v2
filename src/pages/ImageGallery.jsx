import React, { useState, useEffect } from "react";

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

const theme = createTheme();

const Album = () => {
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        refreshImages();
    }, [loading]);

    const refreshImages = () => {
        setLoading(true);

        const imagesLocal = JSON.parse(localStorage.getItem("images"));

        if (!imagesLocal.length > 0) {
            (async () => {
                const response = await getImages();

                setImages(response.data);
                localStorage.setItem("images", JSON.stringify(response.data));
            })();
        } else {
            setImages(imagesLocal);
        }

        setLoading(false);
    };

    const removeFromList = (index) => {
        const array = images;
        const arraySize = array.length;

        if (arraySize >= 1 && arraySize - 1 >= index) {
            array.splice(index, 1);
            setImages(array);
            localStorage.setItem("images", JSON.stringify(images));
        }

        refreshImages();
    };

    return (
        <>
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
                            {loading ? (
                                <h1>Carregando...</h1>
                            ) : (
                                images.map((image, index) => (
                                    <Grid
                                        item
                                        key={index}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                    >
                                        <CardImage
                                            image={image}
                                            index={index}
                                            removeFromList={removeFromList}
                                        />
                                    </Grid>
                                ))
                            )}
                        </Grid>
                    </Container>
                </main>

                <Box
                    sx={{ bgcolor: "background.paper", p: 6 }}
                    component="footer"
                >
                    <Copyright />
                </Box>
            </ThemeProvider>
        </>
    );
};

export default Album;
