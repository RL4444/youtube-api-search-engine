import React from "react";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Typography from "@material-ui/core/Typography";

// const primary = "red";

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography varient="title" color="inherit">
            YouTube API Application with Material UI
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default NavBar;
