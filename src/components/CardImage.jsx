import React from "react";

import {
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import ZoomImage from "./ZoomImage";

import { formatDate } from "../utils/js/functions";

const CardImage = (props) => {
    const { image, index, removeFromList, textDelete, textView } = props;

    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <CardMedia
                component="img"
                sx={
                    {
                        // 16:9
                        // pt: '56.25%',
                    }
                }
                image={image.url}
                alt={image.nome}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {image.nome}
                </Typography>
                <Typography>{formatDate(image.data)}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center" }}>
                <ZoomImage
                    image={image.url}
                    title={image.nome}
                    textView="Ver"
                />
                <Button
                    variant="text"
                    color="error"
                    sx={{ width: "50%" }}
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                        removeFromList(index);
                    }}
                >
                    {textDelete}
                </Button>
            </CardActions>
        </Card>
    );
};

export default CardImage;
