import React, { useState, useEffect, useContext } from "react";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "../components/Header";
import Footer from "../components/Footer";
import CardImage from "../components/CardImage";

import { getImages } from "../api/Api";
import { AuthContext } from "../context/AuthContext";

// const theme = createTheme();

const Album = () => {
    const { user, logout } = useContext(AuthContext);
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        refreshImages();
    }, [loading]);

    const refreshImages = () => {
        const imagesLocal = JSON.parse(localStorage.getItem("images")) || [];

        if (imagesLocal.length === 0) {
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
        setLoading(true);
        const array = images;
        const arraySize = array.length;

        if (arraySize >= 1 && arraySize - 1 >= index) {
            array.splice(index, 1);
            localStorage.setItem("images", JSON.stringify(images));
            refreshImages();
        }
    };

    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
            <CssBaseline />
            <Header
                user={user.name}
                text="Seja bem-vindo(a) ao App"
                txtLogout="Sair"
                logout={logout}
            />

            <main>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {loading ? (
                            <h1>Carregando...</h1>
                        ) : (
                            images.map((image, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <CardImage
                                        image={image}
                                        index={index}
                                        removeFromList={removeFromList}
                                        textDelete="Excluir"
                                    />
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Container>
            </main>

            <Footer />
            {/* </ThemeProvider> */}
        </>
    );
};

export default Album;
