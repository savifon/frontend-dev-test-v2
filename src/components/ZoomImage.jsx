import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";

const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "80vw",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const ZoomImage = (props) => {
    const { image, title, textView } = props;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>
                <ZoomOutMapIcon />
                &nbsp;{textView}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <img
                        src={image}
                        alt={title}
                        style={{ maxWidth: "70vw", maxHeight: "80vh" }}
                    />

                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                    >
                        {title}
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default ZoomImage;
