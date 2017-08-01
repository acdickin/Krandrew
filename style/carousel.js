import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "carousel control-arrow": {
        "WebkitTransition": "all 0.25s ease-in",
        "MozTransition": "all 0.25s ease-in",
        "MsTransition": "all 0.25s ease-in",
        "OTransition": "all 0.25s ease-in",
        "transition": "all 0.25s ease-in",
        "opacity": 0.4,
        "filter": "alpha(opacity=40)",
        "position": "absolute",
        "zIndex": 2,
        "top": "50%",
        "background": "none",
        "border": 0,
        "fontSize": 18,
        "cursor": "pointer",
        "marginTop": -13
    },
    "carouselcarousel-slider control-arrow": {
        "WebkitTransition": "all 0.25s ease-in",
        "MozTransition": "all 0.25s ease-in",
        "MsTransition": "all 0.25s ease-in",
        "OTransition": "all 0.25s ease-in",
        "transition": "all 0.25s ease-in",
        "opacity": 0.4,
        "filter": "alpha(opacity=40)",
        "position": "absolute",
        "zIndex": 2,
        "top": 0,
        "background": "rgba(0,0,0, 0.4)",
        "border": 0,
        "fontSize": 26,
        "cursor": "pointer",
        "color": "#fff",
        "bottom": 0,
        "marginTop": 0,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5
    },
    "carousel control-arrow:hover": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "carousel control-arrow:before": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "display": "inline-block",
        "borderTop": "8px solid transparent",
        "borderBottom": "8px solid transparent",
        "content": "''"
    },
    "carouselcarousel-slider control-arrow:before": {
        "marginTop": 0,
        "marginRight": 5,
        "marginBottom": 0,
        "marginLeft": 5,
        "display": "inline-block",
        "borderTop": "8px solid transparent",
        "borderBottom": "8px solid transparent",
        "content": "''"
    },
    "carousel control-disabledcontrol-arrow": {
        "opacity": 0,
        "filter": "alpha(opacity=0)",
        "cursor": "inherit",
        "display": "none"
    },
    "carousel control-prevcontrol-arrow": {
        "left": 0
    },
    "carousel control-prevcontrol-arrow:before": {
        "borderRight": "8px solid #fff"
    },
    "carousel control-nextcontrol-arrow": {
        "right": 0
    },
    "carousel control-nextcontrol-arrow:before": {
        "borderLeft": "8px solid #fff"
    },
    "carousel": {
        "position": "relative",
        "width": "100%"
    },
    "carousel *": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "WebkitBoxSizing": "border-box",
        "MozBoxSizing": "border-box",
        "boxSizing": "border-box"
    },
    "carousel button": {
        "outline": 0,
        "border": 0,
        "background": "none"
    },
    "carousel img": {
        "width": "90%",
        "display": "inline-block",
        "pointerEvents": "none"
    },
    "carousel carousel": {
        "position": "relative"
    },
    "carousel thumbs-wrapper": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20,
        "overflow": "hidden"
    },
    "carousel thumbs": {
        "WebkitTransition": "all 0.15s ease-in",
        "MozTransition": "all 0.15s ease-in",
        "MsTransition": "all 0.15s ease-in",
        "OTransition": "all 0.15s ease-in",
        "transition": "all 0.15s ease-in",
        "WebkitTransform": "translate3d(0, 0, 0)",
        "MozTransform": "translate3d(0, 0, 0)",
        "MsTransform": "translate3d(0, 0, 0)",
        "OTransform": "translate3d(0, 0, 0)",
        "transform": "translate3d(0, 0, 0)",
        "position": "relative",
        "listStyle": "none",
        "whiteSpace": "nowrap"
    },
    "carousel thumb": {
        "WebkitTransition": "border 0.15s ease-in",
        "MozTransition": "border 0.15s ease-in",
        "MsTransition": "border 0.15s ease-in",
        "OTransition": "border 0.15s ease-in",
        "transition": "border 0.15s ease-in",
        "display": "inline-block",
        "width": 80,
        "marginRight": 6,
        "whiteSpace": "nowrap",
        "overflow": "hidden",
        "border": "3px solid #fff",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "carousel thumbselected": {
        "border": "3px solid #333",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "carousel thumb:hover": {
        "border": "3px solid #333",
        "paddingTop": 2,
        "paddingRight": 2,
        "paddingBottom": 2,
        "paddingLeft": 2
    },
    "carousel thumb img": {
        "verticalAlign": "top"
    },
    "carouselcarousel-slider": {
        "position": "relative",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "overflow": "hidden"
    },
    "carouselcarousel-slider control-arrow:hover": {
        "background": "rgba(0, 0, 0, 0.6)"
    },
    "carousel slider-wrapper": {
        "overflow": "hidden",
        "marginTop": "auto",
        "marginRight": "auto",
        "marginBottom": "auto",
        "marginLeft": "auto",
        "width": "100%",
        "WebkitTransition": "height 0.15s ease-in",
        "MozTransition": "height 0.15s ease-in",
        "MsTransition": "height 0.15s ease-in",
        "OTransition": "height 0.15s ease-in",
        "transition": "height 0.15s ease-in"
    },
    "carousel slider-wrapperaxis-horizontal slider": {
        "MsBoxOrient": "horizontal",
        "display": "flex"
    },
    "carousel slider-wrapperaxis-horizontal slider slide": {
        "flexDirection": "column",
        "flexFlow": "column"
    },
    "carousel slider-wrapperaxis-vertical": {
        "MsBoxOrient": "horizontal",
        "display": "flex"
    },
    "carousel slider-wrapperaxis-vertical slider": {
        "WebkitFlexDirection": "column",
        "flexDirection": "column"
    },
    "carousel slider": {
        "position": "relative",
        "listStyle": "none",
        "width": "100%"
    },
    "carousel slideranimated": {
        "WebkitTransition": "all 0.35s ease-in-out",
        "MozTransition": "all 0.35s ease-in-out",
        "MsTransition": "all 0.35s ease-in-out",
        "OTransition": "all 0.35s ease-in-out",
        "transition": "all 0.35s ease-in-out"
    },
    "carousel slide": {
        "minWidth": "90%",
        "marginTop": 0,
        "marginRight": "5%",
        "marginBottom": 0,
        "marginLeft": "5%",
        "position": "relative",
        "textAlign": "center"
    },
    "carousel slide img": {
        "verticalAlign": "top",
        "border": 0
    },
    "carousel slide iframe": {
        "display": "inline-block",
        "width": "calc(100% - 80px)",
        "marginTop": 0,
        "marginRight": 40,
        "marginBottom": 40,
        "marginLeft": 40,
        "border": 0
    },
    "carousel slide legend": {
        "WebkitTransition": "opacity 0.35s ease-in-out",
        "MozTransition": "opacity 0.35s ease-in-out",
        "MsTransition": "opacity 0.35s ease-in-out",
        "OTransition": "opacity 0.35s ease-in-out",
        "transition": "opacity 0.35s ease-in-out",
        "position": "absolute",
        "bottom": 40,
        "left": "50%",
        "marginLeft": "-45%",
        "width": "90%",
        "borderRadius": 10,
        "background": "#000",
        "color": "#fff",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "fontSize": 12,
        "textAlign": "center",
        "opacity": 0.25
    },
    "carousel control-dots": {
        "position": "absolute",
        "bottom": 0,
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "textAlign": "center",
        "width": "100%"
    },
    "carousel control-dots dot": {
        "WebkitTransition": "opacity 0.25s ease-in",
        "MozTransition": "opacity 0.25s ease-in",
        "MsTransition": "opacity 0.25s ease-in",
        "OTransition": "opacity 0.25s ease-in",
        "transition": "opacity 0.25s ease-in",
        "opacity": 0.3,
        "filter": "alpha(opacity=30)",
        "boxShadow": "1px 1px 2px rgba(0, 0, 0, 0.9)",
        "background": "#fff",
        "borderRadius": "50%",
        "width": 8,
        "height": 8,
        "cursor": "pointer",
        "display": "inline-block",
        "marginTop": 0,
        "marginRight": 8,
        "marginBottom": 0,
        "marginLeft": 8
    },
    "carousel control-dots dotselected": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "carousel control-dots dot:hover": {
        "opacity": 1,
        "filter": "alpha(opacity=100)"
    },
    "carousel carousel-status": {
        "position": "absolute",
        "top": 0,
        "right": 0,
        "paddingTop": 5,
        "paddingRight": 5,
        "paddingBottom": 5,
        "paddingLeft": 5,
        "fontSize": 10,
        "textShadow": "1px 1px 1px rgba(0, 0, 0, 0.9)",
        "color": "#fff",
        "display": "none"
    },
    "carousel:hover slide legend": {
        "opacity": 1
    },
    "legend": {
        "fontFamily": "'Sanchez', serif"
    }
});