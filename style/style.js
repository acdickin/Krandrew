import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "flex-container": {
        "display": "flex",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "color": "#F6F6F6"
    },
    "a:hover": {
        "textDecoration": "none",
        "color": "gold"
    },
    "a": {
        "color": "#F6F6F6 !important"
    },
    "title-blk": {
        "width": "100%",
        "textAlign": "center"
    },
    "title": {},
    "blk": {
        "width": "100%",
        "background": "rgba(34, 10, 55, 0.6)",
        "color": "#F6F6F6"
    },
    "h1": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h2": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h3": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "h4": {
        "marginTop": 0,
        "marginRight": "!important",
        "marginBottom": 0,
        "marginLeft": "!important",
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "nav-item> li >a:hover": {
        "border": "none"
    },
    "underline": {
        "position": "relative",
        "border": "none"
    },
    "underline:before": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "left": 0,
        "bottom": 0,
        "height": 4,
        "width": 0,
        "transition": "width 0s ease, background 1s ease"
    },
    "underline:after": {
        "content": "''",
        "display": "block",
        "position": "absolute",
        "right": 0,
        "bottom": 0,
        "height": 4,
        "width": 0,
        "background": "white",
        "transition": "width 1s ease"
    },
    "underline:hover:before": {
        "width": "100%",
        "background": "white",
        "transition": "width 1s ease"
    },
    "underline:hover:after": {
        "width": "100%",
        "background": "transparent",
        "transition": "all 0s ease"
    },
    "carousel-conatiner": {
        "marginTop": 20,
        "marginRight": "auto",
        "marginBottom": 20,
        "marginLeft": "auto"
    },
    "carousel-img": {
        "height": "20%",
        "maxHeight": 512
    },
    "form": {
        "width": "100%"
    }
});