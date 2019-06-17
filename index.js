const express = require("express");
const app = express();
const compression = require("compression");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const ys = require("./youSearch");

app.use(cookieParser());

app.use(
    cookieSession({
        secret: `Shiiiiiiverrrr me timmmberrrs`,
        maxAge: 1000 * 60 * 60 * 24 * 14
    })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(express.static("public"));

app.use(compression());

if (process.env.NODE_ENV != "production") {
    app.use(
        "/bundle.js",
        require("http-proxy-middleware")({
            target: "http://localhost:8081/"
        })
    );
} else {
    app.use("/bundle.js", (req, res) => res.sendFile(`${__dirname}/bundle.js`));
}

//////////////ROUTES

app.get("/getYoutube", async (req, res )=> {
    let param = req.query.searchString
    const resp = await ys.videoSearch(param, "10")
    res.json({
        resp
    });
})
//////////////////////MIDDLEWARE
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

/////////////////PORT

app.listen(8080, function() {
    console.log("I'm listening.");
});
