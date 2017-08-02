import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "body": {
        "backgroundColor": "#333333 !important"
    },
    "flex-container": {
        "display": "flex",
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "a:hover": {
        "textDecoration": "none"
    },
    "a": {},
    "navMenu a": {
        "color": "#56CCF2 !important"
    },
    "navMenu": {
        "color": "#56CCF2 !important"
    },
    "title-blk": {
        "width": "100%",
        "textAlign": "center",
        "fontSize": "larger"
    },
    "h2title": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "color": "#EEE !important"
    },
    "main": {
        "color": "#F2F2F2",
        "fontFamily": "'Quicksand', sans-serif"
    },
    "about-text": {
        "marginTop": -20,
        "fontSize": "larger"
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
    },
    "carousel slide legend": {
        "background": "rgba(0, 0, 0, 0.6) !important"
    },
    "link": {
        "color": "rgb(120, 133, 168)"
    },
    "map": {
        "color": "black"
    },
    "maps": {
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto"
    },
    "h4": {
        "marginTop": 0.5
    },
    "h1": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20
    },
    "freebirdAccentBackground": {
        "backgroundColor": "#fff"
    }
});