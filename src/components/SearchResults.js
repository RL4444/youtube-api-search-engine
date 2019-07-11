import React from "react";
import Radium from "radium";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const SearchResults = props => {
    const cardStyle = {
    // border: "1px solid blue",
        display: "flex",
        flexDirection: "row",
        transitionDuration: "0.3s",
        height: "45vh",
        padding: "4vw",
        margin: "1vw",
        "@media (max-width: 920px)": {
            // border: "1px solid green",
            display: "flex",
            flexDirection: "column",
            height: "70vh"
        }
    };
    const cardMediaStyle = {
    // border: "1px solid orange",
        maxHeight: "38vh",
        width: "50%",
        padding: "1vh",
        "@media (max-width: 920px)": {
            // border: "1px solid pink",
            width: "80%",
            height: "50%"
        }
    };

    const contentStyle = {
        flexDirection: "column",
        width: "48%",
        textAlign: "left"
    };
    const buttonStyle = {
        backgroundColour: "red"
    };

    const getUrl = link => {
        return "https://www.youtube.com/watch?v=" + link + "";
    };
    if (props.youtubeVids.length > 0) {
        console.log(props.youtubeVids);
        var youtubeVidsMap = props.youtubeVids.map(video => (
            <Grid item key={video.id.videoId} xs={12} md={12} sm={12} lg={12} xl={12}>
                <Card style={cardStyle}>
                    <CardMedia
                        style={cardMediaStyle}
                        image={video.snippet.thumbnails.high.url}
                        title={video.snippet.title}
                    />
                    <CardContent style={contentStyle}>
                        <Typography gutterBottom variant="h6" component="h3">
                            {video.snippet.title}
                        </Typography>
                        <Typography gutterBottom component="p">
                            {video.snippet.description}
                        </Typography>
                        <Button
                            style={buttonStyle}
                            color="inherit"
                            size="medium"
                            variant="outlined"
                        >
                            <a href={getUrl(video.id.videoId)} target="blank">
                WATCH ON YOUTUBE
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        ));
    }
    return (
        <div className="each-body-section">
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                style={{ padding: 24 }}
                spacing={10}
            >
                {youtubeVidsMap}
            </Grid>
            <div>
                <Button
                    size="large"
                    variant="outlined"
                    onClick={() => props.moreResults()}
                >
          MORE RESULTS
                </Button>
            </div>
        </div>
    );
};

export default Radium(SearchResults);
