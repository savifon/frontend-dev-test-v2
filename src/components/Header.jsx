import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = (props) => {
    const { user, text } = props;

    return (
        <AppBar position="relative">
            <Toolbar>
                <CameraIcon sx={{ mr: 2 }} />
                <Typography variant="h6" color="inherit" noWrap>
                    {user}, {text}
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
