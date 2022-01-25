import { Grid, Button } from "@mui/material";
import { Logout } from "@mui/icons-material";
import AppBar from "@mui/material/AppBar";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = (props) => {
    const { user, text, txtLogout, logout } = props;

    return (
        <AppBar position="relative">
            <Toolbar>
                <Grid item xs={11}>
                    <Typography variant="h6" color="inherit" noWrap>
                        <CameraIcon sx={{ mr: 1 }} />
                        {user}, {text}
                    </Typography>
                </Grid>
                <Grid item xs={1}>
                    <Button
                        onClick={() => {
                            logout();
                        }}
                        variant="secondary"
                        endIcon={<Logout />}
                    >
                        {txtLogout}
                    </Button>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
