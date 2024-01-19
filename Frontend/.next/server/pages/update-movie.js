"use strict";
(() => {
var exports = {};
exports.id = 567;
exports.ids = [567];
exports.modules = {

/***/ 2647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1223);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);



const SpinnerLoader = ({ loading  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "loader-overlay",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__.ThreeCircles, {
                height: 100,
                width: 100,
                color: "#6cd27e",
                wrapperStyle: {},
                wrapperClass: "",
                visible: true,
                ariaLabel: "three-circles-rotating",
                secondaryColor: "#FF6600",
                strokeWidth: 4,
                strokeWidthSecondary: 2
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpinnerLoader);


/***/ }),

/***/ 9014:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5064);
/* harmony import */ var src_core_components_common_MovieScreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9315);
/* harmony import */ var src_services_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3827);
/* harmony import */ var src_core_components_Loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2647);

// ** React Imports






let count = 0;
const UpdateMovie = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: movieID , 1: setMovieID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { movieId  } = router.query;
    const { 0: movieData , 1: setMovieData  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const { 0: isMobile , 1: setIsMobile  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        console.log("window.screen.availWidth", window.screen.availWidth);
        if (window.screen.availWidth >= 1024) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
        window.addEventListener("resize", onScreenResize);
        return ()=>{
            window.removeEventListener("resize", onScreenResize);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        loadData(movieId);
    }, [
        movieId
    ]);
    const loadData = async (id)=>{
        await (0,src_services_api__WEBPACK_IMPORTED_MODULE_5__/* ._getSingleMovie */ .Hw)(id).then((response)=>{
            setMovieID(id);
            console.log("sdsd", response);
            if (response.success) {
                const finalData = response?.movieDetail;
                console.log("response.data[0]", response.data, finalData);
                const obj = {
                    title: finalData.title,
                    year: finalData.publishingYear,
                    image: finalData.poster
                };
                console.log("ojbje", obj);
                setMovieData(obj);
                setLoading(false);
            } else {
                alert(response.message);
                setLoading(false);
            }
        }).catch((error)=>{
            setLoading(false);
            alert(error);
        });
    };
    const updateMovie = async (val)=>{
        console.log("bsjadbnasd", val);
        let formData = new FormData();
        formData.append("title", val.title); //append the values with key, value pair
        formData.append("publishingYear", val.year);
        formData.append("poster", val.image);
        console.log("ffd", formData);
        await (0,src_services_api__WEBPACK_IMPORTED_MODULE_5__/* ._upadteMovies */ .Pk)(movieID, formData).then((response)=>{
            if (response?.success) {
                setLoading(false);
                router.push("/dashboard");
            } else {
                setLoading(false);
            }
        }).catch((err)=>{
            setLoading(false);
            alert("Error!", err);
        });
    };
    console.log("moo", movieData);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: movieData && Object.values(movieData).length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_common_MovieScreen__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            value: movieData,
            pageTitle: "Edit",
            isEdit: true,
            onSubmit: (val)=>{
                updateMovie(val);
            },
            isMobile: isMobile,
            onImageChange: (img)=>{
                console.log("sdsksj", img);
                setMovieData({
                    ...movieData,
                    image: img
                });
            }
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_Loader__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
    });
};
UpdateMovie.getLayout = (page)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_layouts_BlankLayout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: page
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UpdateMovie);


/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 3819:
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ 8167:
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ 8455:
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ 8330:
/***/ ((module) => {

module.exports = require("@mui/material/Checkbox");

/***/ }),

/***/ 3646:
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ 8891:
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ 8185:
/***/ ((module) => {

module.exports = require("@mui/material/FormControlLabel");

/***/ }),

/***/ 7934:
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ 3103:
/***/ ((module) => {

module.exports = require("@mui/material/InputAdornment");

/***/ }),

/***/ 911:
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ 7730:
/***/ ((module) => {

module.exports = require("@mui/material/OutlinedInput");

/***/ }),

/***/ 6042:
/***/ ((module) => {

module.exports = require("@mui/material/TextField");

/***/ }),

/***/ 7163:
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2296:
/***/ ((module) => {

module.exports = require("formik");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6358:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 1223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 5609:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,64,827,315], () => (__webpack_exec__(9014)));
module.exports = __webpack_exports__;

})();