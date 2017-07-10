import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "color": "#F2F2F2",
        "fontFamily": "'watermelon_scriptregular'"
    },
    "nav-bar": {
        "fontFamily": "'Quicksand', sans-serif"
    },
    "title": {
        "fontFamily": "'Quicksand', sans-serif"
    },
    "nav-item> li >a:hover": {
        "border": "none"
    },
    "top": {
        "fontFamily": "'Quicksand', sans-serif",
        "position": "fixed",
        "top": "80%",
        "right": 10,
        "opacity": 0.4,
        "width": 10 * vh,
        "height": 8 * vh,
        "backgroundImage": "url('/public/img/up-arrow.png')",
        "backgroundSize": "cover",
        "backgroundRepeat": "no-repeat"
    },
    "top:hover": {
        "opacity": 0.8
    }
});