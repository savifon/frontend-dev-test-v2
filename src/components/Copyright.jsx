import { Typography } from "@mui/material";

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            Frontend Developer Test {new Date().getFullYear()}
            {"."}
        </Typography>
    );
};

export default Copyright;
