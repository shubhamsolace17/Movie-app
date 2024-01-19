"use strict";
exports.id = 763;
exports.ids = [763];
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

/***/ 763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieList": () => (/* binding */ MovieList),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_icons_material_AddCircleRounded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3041);
/* harmony import */ var _mui_icons_material_AddCircleRounded__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_AddCircleRounded__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdi_material_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9791);
/* harmony import */ var mdi_material_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdi_material_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2832);
/* harmony import */ var _mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6734);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_services_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3827);
/* harmony import */ var src_constants_ApiUrl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7465);
/* harmony import */ var src_core_components_Loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2647);












const MovieList = ({ movies  })=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
        width: "100%",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
            container: true,
            spacing: 3,
            children: movies.map((movie, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                    item: true,
                    xs: 12,
                    sm: 6,
                    md: 3,
                    lg: 3,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {
                        style: {
                            backgroundColor: "#002B39",
                            height: "auto"
                        },
                        onClick: ()=>{
                            const params = {
                                movieId: movie._id
                            };
                            router.push({
                                pathname: "/update-movie",
                                query: params
                            });
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardMedia, {
                                component: "img",
                                height: "200",
                                style: {
                                    borderRadius: "15px",
                                    padding: 10
                                },
                                image: `${src_constants_ApiUrl__WEBPACK_IMPORTED_MODULE_9__/* .BASE_URL */ ._n}${movie.poster}`
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: {
                                            color: "#fff"
                                        },
                                        gutterBottom: true,
                                        variant: "h5",
                                        component: "div",
                                        children: movie?.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                        style: {
                                            color: "#fff"
                                        },
                                        gutterBottom: true,
                                        variant: "h5",
                                        component: "div",
                                        children: movie?.publishingYear
                                    })
                                ]
                            })
                        ]
                    })
                }, index))
        })
    });
};
let count = 0;
const Dashboard = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: moviesData , 1: setMovieData  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
    const { 0: pageNo , 1: setPageNO  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const { 0: pagelimit , 1: setPageLimit  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(8);
    const { 0: totalCount , 1: setTotalCount  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);
    const { 0: currentPage , 1: setCurrentPage  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1);
    const movies = [
        {
            title: "Movie 1" /* other details */ 
        },
        {
            title: "Movie 2" /* other details */ 
        },
        {
            title: "Movie 3" /* other details */ 
        },
        {
            title: "Movie 4" /* other details */ 
        },
        {
            title: "Movie 5" /* other details */ 
        },
        {
            title: "Movie 6" /* other details */ 
        },
        {
            title: "Movie 7" /* other details */ 
        },
        {
            title: "Movie 8" /* other details */ 
        }
    ];
    const handleAddMovie = ()=>{
        // Add logic for adding a movie
        console.log("Add movie clicked");
        router.push("/add-movie");
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        fetchData(1);
    }, []);
    const fetchData = async (pageNo)=>{
        setLoading(!loading);
        await (0,src_services_api__WEBPACK_IMPORTED_MODULE_8__/* ._getAllMovies */ .sm)(pageNo, pagelimit).then((response)=>{
            console.log("res", response, response.data.totalCount);
            const res = response.data.totalPages;
            console.log("res", res);
            if (response.success) {
                if (response?.data && response?.data?.data?.length > 0) {
                    setMovieData(response?.data?.data);
                    setTotalCount(response.data.totalPages);
                    setCurrentPage(Number(response.data.currentPage));
                    setLoading(false);
                } else {
                    setLoading(false);
                }
            } else {
                alert(response.message);
                setLoading(false);
            }
        }).catch((error)=>{
            setLoading(false);
            alert(error);
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        async function fetchData() {
            console.log("initialData");
            await (0,src_services_api__WEBPACK_IMPORTED_MODULE_8__/* ._getAllMovies */ .sm)(pageNo, pagelimit).then((response)=>{
                if (response.success) {
                    console.log("response.data[0]", response.data);
                    if (response?.data && response?.data?.data?.length > 0) {
                        setMovieData(response?.data?.data);
                        setLoading(false);
                    } else {
                        setLoading(false);
                    }
                } else {
                    alert(response.message);
                    setLoading(false);
                }
            }).catch((error)=>{
                setLoading(false);
                alert(error);
            });
        }
        fetchData();
    }, []);
    const handleLogout = ()=>{
        // Add logic for logout
        js_cookie__WEBPACK_IMPORTED_MODULE_6___default().set("loggedin", "false");
        localStorage.removeItem("token");
        router.push("/login");
        console.log("Logout clicked");
    };
    console.log("currentPage", totalCount);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: loading ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(src_core_components_Loader__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: moviesData && moviesData.length === 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    className: "content-center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                            style: {
                                color: "#fff"
                            },
                            variant: "h6",
                            children: "Your movie list is empty"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            marginTop: 2,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                size: "large",
                                variant: "contained",
                                sx: {
                                    padding: "15px 126px 15px 126px",
                                    borderRadius: "10px",
                                    height: "54px"
                                },
                                onClick: ()=>{
                                    router.push("/add-movie");
                                },
                                children: "Add a new Movie"
                            })
                        })
                    ]
                })
            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100vh",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            style: {
                                padding: 20
                            },
                            maxWidth: "1100px",
                            mx: "auto",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                container: true,
                                alignItems: "center",
                                color: "white",
                                padding: 2,
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        xs: 9,
                                        container: true,
                                        alignItems: "center",
                                        spacing: 2,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {
                                                style: {
                                                    color: "#fff"
                                                },
                                                variant: "h6",
                                                children: "Create Movie"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                                color: "inherit",
                                                onClick: handleAddMovie,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_AddCircleRounded__WEBPACK_IMPORTED_MODULE_2___default()), {})
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {
                                        item: true,
                                        xs: 3,
                                        container: true,
                                        justifyContent: "flex-end",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                            color: "inherit",
                                            endIcon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_mui_icons_material_LogoutRounded__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                                            onClick: handleLogout,
                                            children: "Logout"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            style: {
                                maxWidth: "1100px",
                                margin: "0 auto",
                                textAlign: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MovieList, {
                                movies: moviesData
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {
                            style: {
                                padding: "2%",
                                display: "flex",
                                justifyContent: "center"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                spacing: 2,
                                alignContent: "center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Pagination, {
                                    count: totalCount,
                                    color: "primary",
                                    page: currentPage,
                                    onChange: (event, page)=>{
                                        console.log("pag", page);
                                        setPageNO(page);
                                        fetchData(page);
                                    }
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);


/***/ })

};
;