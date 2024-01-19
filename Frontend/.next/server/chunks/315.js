"use strict";
exports.id = 315;
exports.ids = [315];
exports.modules = {

/***/ 9315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ common_MovieScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@mui/material/Box"
var Box_ = __webpack_require__(19);
var Box_default = /*#__PURE__*/__webpack_require__.n(Box_);
// EXTERNAL MODULE: external "@mui/material/Button"
var Button_ = __webpack_require__(3819);
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);
// EXTERNAL MODULE: external "@mui/material/Divider"
var Divider_ = __webpack_require__(3646);
// EXTERNAL MODULE: external "@mui/material/Checkbox"
var Checkbox_ = __webpack_require__(8330);
// EXTERNAL MODULE: external "@mui/material/TextField"
var TextField_ = __webpack_require__(6042);
var TextField_default = /*#__PURE__*/__webpack_require__.n(TextField_);
// EXTERNAL MODULE: external "@mui/material/InputLabel"
var InputLabel_ = __webpack_require__(911);
// EXTERNAL MODULE: external "@mui/material/Typography"
var Typography_ = __webpack_require__(7163);
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);
// EXTERNAL MODULE: external "@mui/material/IconButton"
var IconButton_ = __webpack_require__(7934);
// EXTERNAL MODULE: external "@mui/material/CardContent"
var CardContent_ = __webpack_require__(8455);
var CardContent_default = /*#__PURE__*/__webpack_require__.n(CardContent_);
// EXTERNAL MODULE: external "@mui/material/FormControl"
var FormControl_ = __webpack_require__(8891);
// EXTERNAL MODULE: external "@mui/material/OutlinedInput"
var OutlinedInput_ = __webpack_require__(7730);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "@mui/material/Card"
var Card_ = __webpack_require__(8167);
var Card_default = /*#__PURE__*/__webpack_require__.n(Card_);
// EXTERNAL MODULE: external "@mui/material/InputAdornment"
var InputAdornment_ = __webpack_require__(3103);
// EXTERNAL MODULE: external "@mui/material/FormControlLabel"
var FormControlLabel_ = __webpack_require__(8185);
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(5609);
// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__(6358);
// EXTERNAL MODULE: ./src/constants/ApiUrl.js
var ApiUrl = __webpack_require__(7465);
;// CONCATENATED MODULE: ./src/@core/components/dropZone/index.js




const activeStyle = {
    borderColor: "#2196f3"
};
const acceptStyle = {
    borderColor: "#00e676"
};
const rejectStyle = {
    borderColor: "#ff1744"
};
function DropzoneComponent({ onChange , error , isEdit , image , isMobile  }) {
    console.log("isMobile", isMobile);
    const baseStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        borderWidth: 2,
        borderRadius: 10,
        height: isMobile ? "100%" : "504px",
        width: isMobile ? "50vw" : "473px",
        borderColor: error ? "#ff1744" : "#eeeeee",
        borderStyle: "dashed",
        backgroundColor: "#224957",
        color: error ? "#ff1744" : "#bdbdbd",
        transition: "border .3s ease-in-out",
        justifyContent: "center"
    };
    const { 0: files , 1: setFiles  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        if (image) {
            setFiles([
                {
                    preview: `${ApiUrl/* BASE_URL */._n}${image}`
                }, 
            ]);
        }
    }, [
        image
    ]);
    const onDrop = (0,external_react_.useCallback)((acceptedFiles)=>{
        setFiles(acceptedFiles.map((file)=>Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        onChange(acceptedFiles[0]);
    }, [
        onChange
    ]);
    const { getRootProps , getInputProps , isDragActive , isDragAccept , isDragReject ,  } = (0,external_react_dropzone_.useDropzone)({
        onDrop,
        accept: "image/jpeg, image/png, image/jpg"
    });
    const style = (0,external_react_.useMemo)(()=>({
            ...baseStyle,
            ...isDragActive ? activeStyle : {},
            ...isDragAccept ? acceptStyle : {},
            ...isDragReject ? rejectStyle : {}
        }), [
        baseStyle,
        isDragActive,
        isDragReject,
        isDragAccept
    ]);
    const thumbs = files.map((file)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                width: "100px",
                height: "100px",
                style: {
                    borderRadius: 10
                },
                src: file.preview,
                alt: file.name
            })
        }, file.name));
    // clean up
    (0,external_react_.useEffect)(()=>()=>{
            files.forEach((file)=>URL.revokeObjectURL(file.preview));
        }, [
        files
    ]);
    console.log("files", files);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                ...getRootProps({
                    style
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        ...getInputProps()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: error ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            children: [
                                "Error: ",
                                error
                            ]
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: "Drag and drop your images here."
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("aside", {
                children: thumbs
            })
        ]
    });
}
/* harmony default export */ const dropZone = (DropzoneComponent);

// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(2296);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/@core/components/common/MovieScreen.js

// ** React Imports

// ** Next Imports


// ** MUI Components















 // Import Yup
// ** Icons Imports



// ** Styled Components
const Card = (0,styles_.styled)((Card_default()))(({ theme  })=>({
        [theme.breakpoints.up("sm")]: {
            width: "28rem"
        }
    }));
const LinkStyled = (0,styles_.styled)("a")(({ theme  })=>({
        fontSize: "0.875rem",
        textDecoration: "none",
        color: theme.palette.primary.main
    }));
const FormControlLabel = (0,styles_.styled)((FormControlLabel_default()))(({ theme  })=>({
        "& .MuiFormControlLabel-label": {
            fontSize: "0.875rem",
            // color: theme.palette.text.secondary
            color: "white"
        }
    }));
const MovieScreen = ({ pageTitle , isEdit , value , onSubmit , isMobile  })=>{
    const { 0: values , 1: setValues  } = (0,external_react_.useState)({
        title: value?.title ? value?.title : "",
        year: value?.year ? value?.year : "",
        image: value?.image ? value?.image : null
    });
    const theme = (0,styles_.useTheme)();
    const router = (0,router_.useRouter)();
    console.log("::::::::", values);
    const _validationSchema = external_yup_.object().shape({
        title: external_yup_.string().required("title is required"),
        year: external_yup_.string().required("year is required"),
        image: external_yup_.string().required("Image is required")
    });
    const _onSubmit = async (values, resetForm, e)=>{
        console.log("________________--", values, resetForm);
        onSubmit(values);
    // Your form submission logic here
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_formik_.Formik, {
            initialValues: values,
            enableReinitialize: true,
            validationSchema: _validationSchema,
            onSubmit: async (values, { resetForm  }, e)=>{
                _onSubmit(values, resetForm, e);
            },
            children: ({ values , errors , touched , handleChange , handleBlur , handleSubmit , isSubmitting , setFieldValue , resetForm  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((Typography_default()), {
                            variant: "h6",
                            sx: {
                                textAlign: "center",
                                lineHeight: 1,
                                fontWeight: 600,
                                // textTransform: 'uppercase',
                                fontSize: "2.5rem !important",
                                color: "white",
                                width: "50%",
                                top: "120px",
                                left: "0px",
                                // paddingRight: 373,
                                paddingLeft: 30,
                                position: "absolute"
                            },
                            children: pageTitle
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                            className: "content-center",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(material_.Grid, {
                                container: true,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        item: true,
                                        xs: 6,
                                        container: true,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                            item: true,
                                            xs: 2,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(dropZone, {
                                                isMobile: isMobile,
                                                image: isEdit ? value.image : null,
                                                error: errors.image,
                                                onChange: (value)=>{
                                                    setFieldValue("image", value);
                                                }
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(material_.Grid, {
                                        item: true,
                                        xs: 12,
                                        sm: 6,
                                        md: 6,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Card, {
                                            sx: {
                                                backgroundColor: "#093545",
                                                padding: 0
                                            },
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((CardContent_default()), {
                                                sx: {
                                                    border: 0
                                                },
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                                                    noValidate: true,
                                                    autoComplete: "off",
                                                    onSubmit: (e)=>e.preventDefault(),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            name: "title",
                                                            value: values.title,
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            error: touched.title && Boolean(errors.title),
                                                            fullWidth: true,
                                                            label: "Title",
                                                            sx: {
                                                                marginBottom: 4,
                                                                backgroundColor: "#224957",
                                                                borderRadius: "10px",
                                                                input: {
                                                                    color: "white"
                                                                }
                                                            },
                                                            InputLabelProps: {
                                                                style: {
                                                                    color: "white"
                                                                }
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((TextField_default()), {
                                                            name: "year",
                                                            value: values.year,
                                                            onChange: handleChange,
                                                            onBlur: handleBlur,
                                                            error: touched.year && Boolean(errors.year),
                                                            label: "Publishing year",
                                                            sx: {
                                                                marginBottom: 4,
                                                                backgroundColor: "#224957",
                                                                borderRadius: "10px"
                                                            },
                                                            InputLabelProps: {
                                                                style: {
                                                                    color: "white"
                                                                }
                                                            }
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx((Box_default()), {
                                                            sx: {
                                                                mb: 4,
                                                                display: "flex",
                                                                alignItems: "center",
                                                                flexWrap: "wrap",
                                                                justifyContent: "center",
                                                                height: "24px",
                                                                marginTop: "10px",
                                                                marginBottom: "20px"
                                                            }
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "button-wrapper",
                                                            style: {
                                                                display: "flex",
                                                                gap: "16px"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                    className: "col-6",
                                                                    fullWidth: true,
                                                                    size: "large",
                                                                    variant: "outlined",
                                                                    sx: {
                                                                        marginBottom: 7,
                                                                        color: "#fff",
                                                                        borderColor: "#fff",
                                                                        borderRadius: "10px",
                                                                        height: "54px"
                                                                    },
                                                                    onClick: ()=>router.push("/dashboard"),
                                                                    children: "Cancel"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx((Button_default()), {
                                                                    className: "col-6",
                                                                    fullWidth: true,
                                                                    size: "large",
                                                                    variant: "contained",
                                                                    sx: {
                                                                        marginBottom: 7,
                                                                        borderRadius: "10px",
                                                                        height: "54px"
                                                                    },
                                                                    onClick: handleSubmit,
                                                                    children: isEdit ? "Update" : "Submit"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
        })
    });
};
// MovieScreen.getLayout = page => <BlankLayout>{page}</BlankLayout>
/* harmony default export */ const common_MovieScreen = (MovieScreen);


/***/ })

};
;