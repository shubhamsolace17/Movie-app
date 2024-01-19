"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 9787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "S": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./src/@core/utils/create-emotion-cache.js

const createEmotionCache = ()=>{
    return cache_default()({
        key: "css"
    });
};


/***/ }),

/***/ 9819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "nprogress"
const external_nprogress_namespaceObject = require("nprogress");
var external_nprogress_default = /*#__PURE__*/__webpack_require__.n(external_nprogress_namespaceObject);
;// CONCATENATED MODULE: external "@emotion/react"
const react_namespaceObject = require("@emotion/react");
;// CONCATENATED MODULE: ./src/configs/themeConfig.js
const themeConfig = {
    // ** Layout Configs
    templateName: "Materio" /* App Name */ ,
    mode: "light" /* light | dark */ ,
    contentWidth: "boxed" /* full | boxed */ ,
    // ** Routing Configs
    routingLoader: true,
    // ** Navigation (Menu) Configs
    menuTextTruncate: true,
    navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */ ,
    // ** Other Configs
    responsiveFontSizes: true,
    disableRipple: false
};
/* harmony default export */ const configs_themeConfig = (themeConfig);

;// CONCATENATED MODULE: external "@mui/material/CssBaseline"
const CssBaseline_namespaceObject = require("@mui/material/CssBaseline");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_namespaceObject);
;// CONCATENATED MODULE: external "@mui/material/GlobalStyles"
const GlobalStyles_namespaceObject = require("@mui/material/GlobalStyles");
var GlobalStyles_default = /*#__PURE__*/__webpack_require__.n(GlobalStyles_namespaceObject);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
;// CONCATENATED MODULE: ./src/@core/theme/overrides/card.js
const Card = (theme)=>{
    return {
        MuiCard: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[6],
                    "& .card-more-options": {
                        marginTop: theme.spacing(-1),
                        marginRight: theme.spacing(-3)
                    }
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root, & + .MuiCollapse-root .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "& .MuiCardHeader-subheader": {
                        fontSize: "0.875rem"
                    }
                },
                title: {
                    lineHeight: 1,
                    fontWeight: 500,
                    fontSize: "1.25rem",
                    letterSpacing: "0.0125em"
                },
                action: {
                    marginTop: 0,
                    marginRight: 0
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiCardContent-root": {
                        paddingTop: 0
                    },
                    "&:last-of-type": {
                        paddingBottom: theme.spacing(5)
                    },
                    "& + .MuiCardActions-root": {
                        paddingTop: 0
                    }
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.card-action-dense": {
                        padding: theme.spacing(0, 2.5, 2.5),
                        ".MuiCard-root .MuiCardMedia-root + &": {
                            paddingTop: theme.spacing(2.5)
                        },
                        ".MuiCard-root &:first-of-type": {
                            paddingTop: theme.spacing(5),
                            paddingBottom: theme.spacing(5),
                            "& + .MuiCardContent-root": {
                                paddingTop: 0
                            },
                            "& + .MuiCardHeader-root": {
                                paddingTop: 0
                            }
                        }
                    },
                    "& .MuiButton-text": {
                        paddingLeft: theme.spacing(2.5),
                        paddingRight: theme.spacing(2.5)
                    }
                }
            }
        }
    };
};
/* harmony default export */ const card = (Card);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/chip.js
const Chip = (theme)=>{
    return {
        MuiChip: {
            styleOverrides: {
                outlined: {
                    "&.MuiChip-colorDefault": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    }
                },
                deleteIcon: {
                    width: 18,
                    height: 18
                }
            }
        }
    };
};
/* harmony default export */ const overrides_chip = (Chip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/link.js
/* harmony default export */ const overrides_link = ({
    MuiLink: {
        styleOverrides: {
            root: {
                textDecoration: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/list.js
const List = (theme)=>{
    return {
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(2.25),
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiListItemAvatar: {
            styleOverrides: {
                root: {
                    minWidth: 0,
                    marginRight: theme.spacing(4)
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                dense: {
                    "& .MuiListItemText-primary": {
                        color: theme.palette.text.primary
                    }
                }
            }
        },
        MuiListSubheader: {
            styleOverrides: {
                root: {
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: theme.palette.text.primary
                }
            }
        }
    };
};
/* harmony default export */ const overrides_list = (List);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/menu.js
const Menu = (theme)=>{
    return {
        MuiMenu: {
            styleOverrides: {
                root: {
                    "& .MuiMenu-paper": {
                        borderRadius: 5,
                        boxShadow: theme.palette.mode === "light" ? theme.shadows[8] : theme.shadows[9]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_menu = (Menu);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tabs.js
const Tabs = (theme)=>{
    return {
        MuiTabs: {
            styleOverrides: {
                vertical: {
                    minWidth: 130,
                    marginRight: theme.spacing(4),
                    borderRight: `1px solid ${theme.palette.divider}`,
                    "& .MuiTab-root": {
                        minWidth: 130
                    }
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                textColorSecondary: {
                    "&.Mui-selected": {
                        color: theme.palette.text.secondary
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tabs = (Tabs);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/input.js
const input = (theme)=>{
    return {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiInput: {
            styleOverrides: {
                root: {
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&.Mui-disabled:before": {
                        borderBottom: `1px solid ${theme.palette.text.disabled}`
                    }
                }
            }
        },
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: `rgba(${theme.palette.customColors.main}, 0.04)`,
                    "&:hover:not(.Mui-disabled)": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.08)`
                    },
                    "&:before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&:hover:not(.Mui-disabled):before": {
                        borderBottom: `1px solid rgba(${theme.palette.customColors.main}, 0.32)`
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    "&:hover:not(.Mui-focused) .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.32)`
                    },
                    "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.error.main
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                    },
                    "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
                        borderColor: theme.palette.text.disabled
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_input = (input);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/paper.js
/* harmony default export */ const paper = ({
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundImage: "none"
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/table.js
const Table = (theme)=>{
    return {
        MuiTableContainer: {
            styleOverrides: {
                root: {
                    boxShadow: theme.shadows[0],
                    borderTopColor: theme.palette.divider
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    textTransform: "uppercase",
                    "& .MuiTableCell-head": {
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        letterSpacing: "0.13px"
                    }
                }
            }
        },
        MuiTableBody: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-body": {
                        letterSpacing: "0.25px",
                        color: theme.palette.text.secondary,
                        "&:not(.MuiTableCell-sizeSmall):not(.MuiTableCell-paddingCheckbox):not(.MuiTableCell-paddingNone)": {
                            paddingTop: theme.spacing(3.5),
                            paddingBottom: theme.spacing(3.5)
                        }
                    }
                }
            }
        },
        MuiTableRow: {
            styleOverrides: {
                root: {
                    "& .MuiTableCell-head:first-child, & .MuiTableCell-root:first-child ": {
                        paddingLeft: theme.spacing(5)
                    },
                    "& .MuiTableCell-head:last-child, & .MuiTableCell-root:last-child": {
                        paddingRight: theme.spacing(5)
                    }
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    borderBottom: `1px solid ${theme.palette.divider}`,
                    "& .MuiButton-root": {
                        textTransform: "uppercase",
                        color: theme.palette.text.secondary
                    }
                },
                stickyHeader: {
                    backgroundColor: theme.palette.customColors.tableHeaderBg
                }
            }
        }
    };
};
/* harmony default export */ const table = (Table);

;// CONCATENATED MODULE: ./src/@core/utils/hex-to-rgba.js
/**
 ** Hex color to RGBA color
 */ const hexToRGBA = (hexCode, opacity)=>{
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

;// CONCATENATED MODULE: ./src/@core/theme/overrides/alerts.js

// ** Util Import

const Alert = (theme)=>{
    const getColor = theme.palette.mode === "light" ? styles_.darken : styles_.lighten;
    return {
        MuiAlert: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    "& .MuiAlertTitle-root": {
                        marginBottom: theme.spacing(1.6)
                    },
                    "& a": {
                        color: "inherit",
                        fontWeight: 500
                    }
                },
                standardSuccess: {
                    color: getColor(theme.palette.success.main, 0.12),
                    backgroundColor: hexToRGBA(theme.palette.success.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                standardInfo: {
                    color: getColor(theme.palette.info.main, 0.12),
                    backgroundColor: hexToRGBA(theme.palette.info.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                standardWarning: {
                    color: getColor(theme.palette.warning.main, 0.12),
                    backgroundColor: hexToRGBA(theme.palette.warning.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                standardError: {
                    color: getColor(theme.palette.error.main, 0.12),
                    backgroundColor: hexToRGBA(theme.palette.error.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                outlinedSuccess: {
                    borderColor: theme.palette.success.main,
                    color: getColor(theme.palette.success.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.success.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.success.main, 0.12)
                    }
                },
                outlinedInfo: {
                    borderColor: theme.palette.info.main,
                    color: getColor(theme.palette.info.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.info.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.info.main, 0.12)
                    }
                },
                outlinedWarning: {
                    borderColor: theme.palette.warning.main,
                    color: getColor(theme.palette.warning.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.warning.main, 0.12)
                    }
                },
                outlinedError: {
                    borderColor: theme.palette.error.main,
                    color: getColor(theme.palette.error.main, 0.12),
                    "& .MuiAlertTitle-root": {
                        color: getColor(theme.palette.error.main, 0.12)
                    },
                    "& .MuiAlert-icon": {
                        color: getColor(theme.palette.error.main, 0.12)
                    }
                },
                filled: {
                    fontWeight: 400
                }
            }
        }
    };
};
/* harmony default export */ const overrides_alerts = (Alert);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/button.js
// ** Theme Config Imports

const Button = (theme)=>{
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: 5,
                    lineHeight: 1.71,
                    letterSpacing: "0.3px",
                    padding: `${theme.spacing(1.875, 3)}`
                },
                contained: {
                    boxShadow: theme.shadows[3],
                    padding: `${theme.spacing(1.875, 5.5)}`
                },
                outlined: {
                    padding: `${theme.spacing(1.625, 5.25)}`
                },
                sizeSmall: {
                    padding: `${theme.spacing(1, 2.25)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(1, 3.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(0.75, 3.25)}`
                    }
                },
                sizeLarge: {
                    padding: `${theme.spacing(2.125, 5.5)}`,
                    "&.MuiButton-contained": {
                        padding: `${theme.spacing(2.125, 6.5)}`
                    },
                    "&.MuiButton-outlined": {
                        padding: `${theme.spacing(1.875, 6.25)}`
                    }
                }
            }
        },
        MuiButtonBase: {
            defaultProps: {
                disableRipple: configs_themeConfig.disableRipple
            }
        }
    };
};
/* harmony default export */ const overrides_button = (Button);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dialog.js
// ** Util Import

const Dialog = (theme)=>{
    return {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    boxShadow: theme.shadows[6],
                    "&:not(.MuiDialog-paperFullScreen)": {
                        "@media (max-width:599px)": {
                            margin: theme.spacing(4),
                            width: `calc(100% - ${theme.spacing(8)})`,
                            maxWidth: `calc(100% - ${theme.spacing(8)}) !important`
                        }
                    },
                    "& > .MuiList-root": {
                        paddingLeft: theme.spacing(1),
                        paddingRight: theme.spacing(1)
                    }
                }
            }
        },
        MuiDialogTitle: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5)
                }
            }
        },
        MuiDialogContent: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiDialogContent-root": {
                        paddingTop: 0
                    },
                    "& + .MuiDialogActions-root": {
                        paddingTop: 0
                    },
                    // Styling for Mobile Date Picker starts
                    "& .PrivatePickersToolbar-root": {
                        padding: theme.spacing(4, 5),
                        color: theme.palette.primary.contrastText,
                        backgroundColor: theme.palette.primary.main,
                        "& .MuiTypography-root": {
                            color: theme.palette.primary.contrastText
                        },
                        "& span.MuiTypography-overline": {
                            fontSize: "1rem",
                            lineHeight: "24px",
                            letterSpacing: "0.15px"
                        },
                        '& ~ div[class^="css-"] > div[class^="css-"]': {
                            marginTop: theme.spacing(6),
                            marginBottom: theme.spacing(6),
                            '& > div[class^="css-"]': {
                                backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                                "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                    color: "inherit"
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-hourMinuteLabel": {
                            alignItems: "center",
                            "& > .MuiButton-root span.MuiTypography-root": {
                                fontWeight: 300,
                                lineHeight: "72px",
                                fontSize: "3.75rem",
                                letterSpacing: "-0.5px"
                            },
                            "& > .MuiTypography-root": {
                                color: hexToRGBA(theme.palette.primary.contrastText, 0.54),
                                "& + .MuiButton-root > span.MuiTypography-root": {
                                    color: hexToRGBA(theme.palette.primary.contrastText, 0.54)
                                }
                            }
                        },
                        "& .PrivateTimePickerToolbar-ampmSelection span.MuiTypography-root:not(.Mui-selected)": {
                            color: hexToRGBA(theme.palette.primary.contrastText, 0.54)
                        }
                    }
                }
            }
        },
        MuiDialogActions: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "&.dialog-actions-dense": {
                        padding: theme.spacing(2.5),
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dialog = (Dialog);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/rating.js
const Rating = (theme)=>{
    return {
        MuiRating: {
            styleOverrides: {
                root: {
                    color: theme.palette.warning.main
                }
            }
        }
    };
};
/* harmony default export */ const overrides_rating = (Rating);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/select.js
/* harmony default export */ const overrides_select = ({
    MuiSelect: {
        styleOverrides: {
            select: {
                minWidth: "6rem !important",
                "&.MuiTablePagination-select": {
                    minWidth: "1rem !important"
                }
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/avatars.js
const Avatar = (theme)=>{
    return {
        MuiAvatar: {
            styleOverrides: {
                colorDefault: {
                    color: theme.palette.text.secondary,
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[200] : theme.palette.grey[700]
                },
                rounded: {
                    borderRadius: 5
                }
            }
        },
        MuiAvatarGroup: {
            styleOverrides: {
                root: {
                    justifyContent: "flex-end",
                    ".MuiCard-root & .MuiAvatar-root": {
                        borderColor: theme.palette.background.paper
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_avatars = (Avatar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/divider.js
const Divider = (theme)=>{
    return {
        MuiDivider: {
            styleOverrides: {
                root: {
                    margin: `${theme.spacing(2)} 0`
                }
            }
        }
    };
};
/* harmony default export */ const overrides_divider = (Divider);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/popover.js
const Popover = (theme)=>{
    return {
        MuiPopover: {
            styleOverrides: {
                root: {
                    "& .MuiPopover-paper": {
                        boxShadow: theme.shadows[6]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_popover = (Popover);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/tooltip.js
// ** Util Import

const Tooltip = (theme)=>{
    return {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: theme.palette.mode === "light" ? hexToRGBA(theme.palette.grey[900], 0.9) : hexToRGBA(theme.palette.grey[700], 0.9)
                },
                arrow: {
                    color: theme.palette.mode === "light" ? hexToRGBA(theme.palette.grey[900], 0.9) : hexToRGBA(theme.palette.grey[700], 0.9)
                }
            }
        }
    };
};
/* harmony default export */ const overrides_tooltip = (Tooltip);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/backdrop.js
// ** Util Import

const Backdrop = (theme)=>{
    return {
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? `rgba(${theme.palette.customColors.main}, 0.7)` : hexToRGBA(theme.palette.background.default, 0.7)
                },
                invisible: {
                    backgroundColor: "transparent"
                }
            }
        }
    };
};
/* harmony default export */ const overrides_backdrop = (Backdrop);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/snackbar.js
const Snackbar = (theme)=>{
    return {
        MuiSnackbarContent: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[900] : theme.palette.grey[100]
                }
            }
        }
    };
};
/* harmony default export */ const overrides_snackbar = (Snackbar);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/switches.js
const Switch = (theme)=>{
    return {
        MuiSwitch: {
            styleOverrides: {
                root: {
                    "& .MuiSwitch-track": {
                        backgroundColor: `rgb(${theme.palette.customColors.main})`
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_switches = (Switch);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/timeline.js
// ** Util Import

const Timeline = (theme)=>{
    return {
        MuiTimelineItem: {
            styleOverrides: {
                root: {
                    "&:not(:last-of-type)": {
                        "& .MuiTimelineContent-root": {
                            marginBottom: theme.spacing(4)
                        }
                    }
                }
            }
        },
        MuiTimelineConnector: {
            styleOverrides: {
                root: {
                    backgroundColor: theme.palette.divider
                }
            }
        },
        MuiTimelineContent: {
            styleOverrides: {
                root: {
                    marginTop: theme.spacing(0.5)
                }
            }
        },
        MuiTimelineDot: {
            styleOverrides: {
                filledPrimary: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.primary.main, 0.12)}`
                },
                filledSecondary: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.secondary.main, 0.12)}`
                },
                filledSuccess: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.success.main, 0.12)}`
                },
                filledError: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.error.main, 0.12)}`
                },
                filledWarning: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.warning.main, 0.12)}`
                },
                filledInfo: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.info.main, 0.12)}`
                },
                filledGrey: {
                    boxShadow: `0 0 0 3px ${hexToRGBA(theme.palette.grey[400], 0.12)}`
                },
                outlinedPrimary: {
                    "& svg": {
                        color: theme.palette.primary.main
                    }
                },
                outlinedSecondary: {
                    "& svg": {
                        color: theme.palette.secondary.main
                    }
                },
                outlinedSuccess: {
                    "& svg": {
                        color: theme.palette.success.main
                    }
                },
                outlinedError: {
                    "& svg": {
                        color: theme.palette.error.main
                    }
                },
                outlinedWarning: {
                    "& svg": {
                        color: theme.palette.warning.main
                    }
                },
                outlinedInfo: {
                    "& svg": {
                        color: theme.palette.info.main
                    }
                },
                outlinedGrey: {
                    "& svg": {
                        color: theme.palette.grey[500]
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_timeline = (Timeline);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/accordion.js
const Accordion = (theme)=>{
    return {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    "&.Mui-disabled": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    },
                    "&.Mui-expanded": {
                        boxShadow: theme.shadows[3]
                    }
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    padding: `0 ${theme.spacing(5)}`,
                    "& + .MuiCollapse-root": {
                        "& .MuiAccordionDetails-root:first-child": {
                            paddingTop: 0
                        }
                    }
                },
                content: {
                    margin: `${theme.spacing(2.5)} 0`
                },
                expandIconWrapper: {
                    color: theme.palette.text.secondary
                }
            }
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    padding: theme.spacing(5),
                    "& + .MuiAccordionDetails-root": {
                        paddingTop: 0
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_accordion = (Accordion);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/pagination.js
// ** Util Import

const Pagination = (theme)=>{
    return {
        MuiPaginationItem: {
            styleOverrides: {
                root: {
                    "&.Mui-selected:not(.Mui-disabled):not(.MuiPaginationItem-textPrimary):not(.MuiPaginationItem-textSecondary):hover": {
                        backgroundColor: `rgba(${theme.palette.customColors.main}, 0.12)`
                    }
                },
                outlined: {
                    borderColor: `rgba(${theme.palette.customColors.main}, 0.22)`
                },
                outlinedPrimary: {
                    "&.Mui-selected": {
                        backgroundColor: hexToRGBA(theme.palette.primary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${hexToRGBA(theme.palette.primary.main, 0.2)} !important`
                        }
                    }
                },
                outlinedSecondary: {
                    "&.Mui-selected": {
                        backgroundColor: hexToRGBA(theme.palette.secondary.main, 0.12),
                        "&:hover": {
                            backgroundColor: `${hexToRGBA(theme.palette.secondary.main, 0.2)} !important`
                        }
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_pagination = (Pagination);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/typography.js
const Typography = (theme)=>{
    return {
        MuiTypography: {
            styleOverrides: {
                gutterBottom: {
                    marginBottom: theme.spacing(2)
                }
            }
        }
    };
};
/* harmony default export */ const typography = (Typography);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/toggleButton.js
/* harmony default export */ const toggleButton = ({
    MuiToggleButtonGroup: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    },
    MuiToggleButton: {
        styleOverrides: {
            root: {
                borderRadius: 4
            }
        }
    }
});

;// CONCATENATED MODULE: ./src/@core/theme/overrides/dateTimePicker.js
const DateTimePicker = (theme)=>{
    return {
        MuiCalendarPicker: {
            styleOverrides: {
                root: {
                    '& [role="presentation"]': {
                        fontWeight: 400,
                        "& .PrivatePickersFadeTransitionGroup-root + .PrivatePickersFadeTransitionGroup-root > div": {
                            marginRight: 0
                        },
                        "& .MuiIconButton-sizeSmall": {
                            padding: theme.spacing(0.5)
                        },
                        "& + div .MuiIconButton-root:not(.Mui-disabled)": {
                            color: theme.palette.text.secondary
                        }
                    },
                    "& .PrivatePickersSlideTransition-root": {
                        minHeight: 240
                    }
                }
            }
        },
        MuiPickersDay: {
            styleOverrides: {
                root: {
                    fontSize: "0.875rem"
                }
            }
        },
        MuiClockPicker: {
            styleOverrides: {
                arrowSwitcher: {
                    "& .MuiIconButton-root:not(.Mui-disabled)": {
                        color: theme.palette.text.secondary
                    },
                    "& + div": {
                        "& > div": {
                            backgroundColor: theme.palette.mode === "light" ? theme.palette.grey[50] : theme.palette.background.default,
                            "& ~ .MuiIconButton-root span.MuiTypography-caption": {
                                color: "inherit"
                            }
                        }
                    }
                }
            }
        },
        MuiMonthPicker: {
            styleOverrides: {
                root: {
                    "& > .MuiTypography-root.Mui-selected": {
                        fontSize: "1rem"
                    }
                }
            }
        }
    };
};
/* harmony default export */ const overrides_dateTimePicker = (DateTimePicker);

;// CONCATENATED MODULE: ./src/@core/theme/overrides/index.js
// ** Overrides Imports



























const Overrides = (theme)=>{
    const chip = overrides_chip(theme);
    const list = overrides_list(theme);
    const menu = overrides_menu(theme);
    const tabs = overrides_tabs(theme);
    const cards = card(theme);
    const input = overrides_input(theme);
    const tables = table(theme);
    const alerts = overrides_alerts(theme);
    const button = overrides_button(theme);
    const rating = overrides_rating(theme);
    const avatars = overrides_avatars(theme);
    const divider = overrides_divider(theme);
    const dialog = overrides_dialog(theme);
    const popover = overrides_popover(theme);
    const tooltip = overrides_tooltip(theme);
    const backdrop = overrides_backdrop(theme);
    const snackbar = overrides_snackbar(theme);
    const switches = overrides_switches(theme);
    const timeline = overrides_timeline(theme);
    const accordion = overrides_accordion(theme);
    const pagination = overrides_pagination(theme);
    const dateTimePicker = overrides_dateTimePicker(theme);
    return Object.assign(chip, list, menu, tabs, cards, input, alerts, button, dialog, rating, tables, avatars, divider, overrides_link, popover, tooltip, backdrop, paper, snackbar, switches, timeline, accordion, overrides_select, pagination, typography, dateTimePicker, toggleButton);
};
/* harmony default export */ const overrides = (Overrides);

;// CONCATENATED MODULE: ./src/@core/theme/typography/index.js
const typography_Typography = (theme)=>{
    return {
        h1: {
            fontWeight: 500,
            letterSpacing: "-1.5px",
            color: theme.palette.text.primary
        },
        h2: {
            fontWeight: 500,
            letterSpacing: "-0.5px",
            color: theme.palette.text.primary
        },
        h3: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h4: {
            fontWeight: 500,
            letterSpacing: "0.25px",
            color: theme.palette.text.primary
        },
        h5: {
            fontWeight: 500,
            letterSpacing: 0,
            color: theme.palette.text.primary
        },
        h6: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        subtitle2: {
            letterSpacing: "0.1px",
            color: theme.palette.text.secondary
        },
        body1: {
            letterSpacing: "0.15px",
            color: theme.palette.text.primary
        },
        body2: {
            lineHeight: 1.5,
            letterSpacing: "0.15px",
            color: theme.palette.text.secondary
        },
        button: {
            letterSpacing: "0.3px",
            color: theme.palette.text.primary
        },
        caption: {
            letterSpacing: "0.4px",
            color: theme.palette.text.secondary
        },
        overline: {
            letterSpacing: "1px",
            color: theme.palette.text.secondary
        }
    };
};
/* harmony default export */ const theme_typography = (typography_Typography);

;// CONCATENATED MODULE: external "@mui/utils"
const utils_namespaceObject = require("@mui/utils");
;// CONCATENATED MODULE: ./src/@core/theme/palette/index.js
const DefaultPalette = (mode, themeColor)=>{
    // ** Vars
    const lightColor = "255, 255, 255";
    const darkColor = "231, 227, 252";
    const mainColor = mode === "light" ? lightColor : darkColor;
    const primaryGradient = ()=>{
        if (themeColor === "primary") {
            return "#C6A7FE";
        } else if (themeColor === "secondary") {
            return "#9C9FA4";
        } else if (themeColor === "success") {
            return "#93DD5C";
        } else if (themeColor === "error") {
            return "#FF8C90";
        } else if (themeColor === "warning") {
            return "#FFCF5C";
        } else {
            return "#6ACDFF";
        }
    };
    return {
        customColors: {
            main: mainColor,
            primaryGradient: primaryGradient(),
            tableHeaderBg: mode === "light" ? "#F9FAFC" : "#3D3759"
        },
        common: {
            black: "#000",
            white: "#FFF"
        },
        mode: mode,
        primary: {
            light: "#9E69FD",
            main: "#6cd27e",
            dark: "#6cd27e",
            contrastText: "#FFF"
        },
        secondary: {
            light: "#9C9FA4",
            main: "#8A8D93",
            dark: "#777B82",
            contrastText: "#FFF"
        },
        success: {
            light: "#6AD01F",
            main: "#56CA00",
            dark: "#4CB200",
            contrastText: "#FFF"
        },
        error: {
            light: "#FF6166",
            main: "#FF4C51",
            dark: "#E04347",
            contrastText: "#FFF"
        },
        warning: {
            light: "#FFCA64",
            main: "#FFB400",
            dark: "#E09E00",
            contrastText: "#FFF"
        },
        info: {
            light: "#32BAFF",
            main: "#16B1FF",
            dark: "#139CE0",
            contrastText: "#FFF"
        },
        grey: {
            50: "#FAFAFA",
            100: "#F5F5F5",
            200: "#EEEEEE",
            300: "#E0E0E0",
            400: "#BDBDBD",
            500: "#9E9E9E",
            600: "#757575",
            700: "#616161",
            800: "#424242",
            900: "#212121",
            A100: "#D5D5D5",
            A200: "#AAAAAA",
            A400: "#616161",
            A700: "#303030"
        },
        text: {
            primary: `rgba(${mainColor}, 0.87)`,
            secondary: `rgba(${mainColor}, 0.68)`,
            disabled: `rgba(${mainColor}, 0.38)`
        },
        divider: `rgba(${mainColor}, 0.12)`,
        background: {
            paper: mode === "light" ? "#FFF" : "#312D4B",
            default: mode === "light" ? "#F4F5FA" : "#28243D"
        },
        action: {
            active: `rgba(${mainColor}, 0.54)`,
            hover: `rgba(${mainColor}, 0.04)`,
            selected: `rgba(${mainColor}, 0.08)`,
            disabled: `rgba(${mainColor}, 0.3)`,
            disabledBackground: `rgba(${mainColor}, 0.18)`,
            focus: `rgba(${mainColor}, 0.12)`
        }
    };
};
/* harmony default export */ const palette = (DefaultPalette);

;// CONCATENATED MODULE: ./src/@core/theme/spacing/index.js
/* harmony default export */ const spacing = ({
    spacing: (factor)=>`${0.25 * factor}rem`
});

;// CONCATENATED MODULE: ./src/@core/theme/shadows/index.js
const Shadows = (mode)=>{
    if (mode === "light") {
        return [
            "none",
            "0px 2px 1px -1px rgba(58, 53, 65, 0.2), 0px 1px 1px 0px rgba(58, 53, 65, 0.14), 0px 1px 3px 0px rgba(58, 53, 65, 0.12)",
            "0px 3px 1px -2px rgba(58, 53, 65, 0.2), 0px 2px 2px 0px rgba(58, 53, 65, 0.14), 0px 1px 5px 0px rgba(58, 53, 65, 0.12)",
            "0px 4px 8px -4px rgba(58, 53, 65, 0.42)",
            "0px 6px 18px -8px rgba(58, 53, 65, 0.56)",
            "0px 3px 5px -1px rgba(58, 53, 65, 0.2), 0px 5px 8px 0px rgba(58, 53, 65, 0.14), 0px 1px 14px 0px rgba(58, 53, 65, 0.12)",
            "0px 2px 10px 0px rgba(58, 53, 65, 0.1)",
            "0px 4px 5px -2px rgba(58, 53, 65, 0.2), 0px 7px 10px 1px rgba(58, 53, 65, 0.14), 0px 2px 16px 1px rgba(58, 53, 65, 0.12)",
            "0px 5px 5px -3px rgba(58, 53, 65, 0.2), 0px 8px 10px 1px rgba(58, 53, 65, 0.14), 0px 3px 14px 2px rgba(58, 53, 65, 0.12)",
            "0px 5px 6px -3px rgba(58, 53, 65, 0.2), 0px 9px 12px 1px rgba(58, 53, 65, 0.14), 0px 3px 16px 2px rgba(58, 53, 65, 0.12)",
            "0px 6px 6px -3px rgba(58, 53, 65, 0.2), 0px 10px 14px 1px rgba(58, 53, 65, 0.14), 0px 4px 18px 3px rgba(58, 53, 65, 0.12)",
            "0px 6px 7px -4px rgba(58, 53, 65, 0.2), 0px 11px 15px 1px rgba(58, 53, 65, 0.14), 0px 4px 20px 3px rgba(58, 53, 65, 0.12)",
            "0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 12px 17px 2px rgba(58, 53, 65, 0.14), 0px 5px 22px 4px rgba(58, 53, 65, 0.12)",
            "0px 7px 8px -4px rgba(58, 53, 65, 0.2), 0px 13px 19px 2px rgba(58, 53, 65, 0.14), 0px 5px 24px 4px rgba(58, 53, 65, 0.12)",
            "0px 7px 9px -4px rgba(58, 53, 65, 0.2), 0px 14px 21px 2px rgba(58, 53, 65, 0.14), 0px 5px 26px 4px rgba(58, 53, 65, 0.12)",
            "0px 8px 9px -5px rgba(58, 53, 65, 0.2), 0px 15px 22px 2px rgba(58, 53, 65, 0.14), 0px 6px 28px 5px rgba(58, 53, 65, 0.12)",
            "0px 8px 10px -5px rgba(58, 53, 65, 0.2), 0px 16px 24px 2px rgba(58, 53, 65, 0.14), 0px 6px 30px 5px rgba(58, 53, 65, 0.12)",
            "0px 8px 11px -5px rgba(58, 53, 65, 0.2), 0px 17px 26px 2px rgba(58, 53, 65, 0.14), 0px 6px 32px 5px rgba(58, 53, 65, 0.12)",
            "0px 9px 11px -5px rgba(58, 53, 65, 0.2), 0px 18px 28px 2px rgba(58, 53, 65, 0.14), 0px 7px 34px 6px rgba(58, 53, 65, 0.12)",
            "0px 9px 12px -6px rgba(58, 53, 65, 0.2), 0px 19px 29px 2px rgba(58, 53, 65, 0.14), 0px 7px 36px 6px rgba(58, 53, 65, 0.12)",
            "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 20px 31px 3px rgba(58, 53, 65, 0.14), 0px 8px 38px 7px rgba(58, 53, 65, 0.12)",
            "0px 10px 13px -6px rgba(58, 53, 65, 0.2), 0px 21px 33px 3px rgba(58, 53, 65, 0.14), 0px 8px 40px 7px rgba(58, 53, 65, 0.12)",
            "0px 10px 14px -6px rgba(58, 53, 65, 0.2), 0px 22px 35px 3px rgba(58, 53, 65, 0.14), 0px 8px 42px 7px rgba(58, 53, 65, 0.12)",
            "0px 11px 14px -7px rgba(58, 53, 65, 0.2), 0px 23px 36px 3px rgba(58, 53, 65, 0.14), 0px 9px 44px 8px rgba(58, 53, 65, 0.12)",
            "0px 11px 15px -7px rgba(58, 53, 65, 0.2), 0px 24px 38px 3px rgba(58, 53, 65, 0.14), 0px 9px 46px 8px rgba(58, 53, 65, 0.12)"
        ];
    } else {
        return [
            "none",
            "0px 2px 1px -1px rgba(19, 17, 32, 0.2), 0px 1px 1px 0px rgba(19, 17, 32, 0.14), 0px 1px 3px 0px rgba(19, 17, 32, 0.12)",
            "0px 3px 1px -2px rgba(19, 17, 32, 0.2), 0px 2px 2px 0px rgba(19, 17, 32, 0.14), 0px 1px 5px 0px rgba(19, 17, 32, 0.12)",
            "0px 4px 8px -4px rgba(19, 17, 32, 0.42)",
            "0px 6px 18px -8px rgba(19, 17, 32, 0.56)",
            "0px 3px 5px -1px rgba(19, 17, 32, 0.2), 0px 5px 8px rgba(19, 17, 32, 0.14), 0px 1px 14px rgba(19, 17, 32, 0.12)",
            "0px 2px 10px 0px rgba(19, 17, 32, 0.1)",
            "0px 4px 5px -2px rgba(19, 17, 32, 0.2), 0px 7px 10px 1px rgba(19, 17, 32, 0.14), 0px 2px 16px 1px rgba(19, 17, 32, 0.12)",
            "0px 5px 5px -3px rgba(19, 17, 32, 0.2), 0px 8px 10px 1px rgba(19, 17, 32, 0.14), 0px 3px 14px 2px rgba(19, 17, 32, 0.12)",
            "0px 5px 6px -3px rgba(19, 17, 32, 0.2), 0px 9px 12px 1px rgba(19, 17, 32, 0.14), 0px 3px 16px 2px rgba(19, 17, 32, 0.12)",
            "0px 6px 6px -3px rgba(19, 17, 32, 0.2), 0px 10px 14px 1px rgba(19, 17, 32, 0.14), 0px 4px 18px 3px rgba(19, 17, 32, 0.12)",
            "0px 6px 7px -4px rgba(19, 17, 32, 0.2), 0px 11px 15px 1px rgba(19, 17, 32, 0.14), 0px 4px 20px 3px rgba(19, 17, 32, 0.12)",
            "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 12px 17px 2px rgba(19, 17, 32, 0.14), 0px 5px 22px 4px rgba(19, 17, 32, 0.12)",
            "0px 7px 8px -4px rgba(19, 17, 32, 0.2), 0px 13px 19px 2px rgba(19, 17, 32, 0.14), 0px 5px 24px 4px rgba(19, 17, 32, 0.12)",
            "0px 7px 9px -4px rgba(19, 17, 32, 0.2), 0px 14px 21px 2px rgba(19, 17, 32, 0.14), 0px 5px 26px 4px rgba(19, 17, 32, 0.12)",
            "0px 8px 9px -5px rgba(19, 17, 32, 0.2), 0px 15px 22px 2px rgba(19, 17, 32, 0.14), 0px 6px 28px 5px rgba(19, 17, 32, 0.12)",
            "0px 8px 10px -5px rgba(19, 17, 32, 0.2), 0px 16px 24px 2px rgba(19, 17, 32, 0.14), 0px 6px 30px 5px rgba(19, 17, 32, 0.12)",
            "0px 8px 11px -5px rgba(19, 17, 32, 0.2), 0px 17px 26px 2px rgba(19, 17, 32, 0.14), 0px 6px 32px 5px rgba(19, 17, 32, 0.12)",
            "0px 9px 11px -5px rgba(19, 17, 32, 0.2), 0px 18px 28px 2px rgba(19, 17, 32, 0.14), 0px 7px 34px 6px rgba(19, 17, 32, 0.12)",
            "0px 9px 12px -6px rgba(19, 17, 32, 0.2), 0px 19px 29px 2px rgba(19, 17, 32, 0.14), 0px 7px 36px 6px rgba(19, 17, 32, 0.12)",
            "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 20px 31px 3px rgba(19, 17, 32, 0.14), 0px 8px 38px 7px rgba(19, 17, 32, 0.12)",
            "0px 10px 13px -6px rgba(19, 17, 32, 0.2), 0px 21px 33px 3px rgba(19, 17, 32, 0.14), 0px 8px 40px 7px rgba(19, 17, 32, 0.12)",
            "0px 10px 14px -6px rgba(19, 17, 32, 0.2), 0px 22px 35px 3px rgba(19, 17, 32, 0.14), 0px 8px 42px 7px rgba(19, 17, 32, 0.12)",
            "0px 11px 14px -7px rgba(19, 17, 32, 0.2), 0px 23px 36px 3px rgba(19, 17, 32, 0.14), 0px 9px 44px 8px rgba(19, 17, 32, 0.12)",
            "0px 11px 15px -7px rgba(19, 17, 32, 0.2), 0px 24px 38px 3px rgba(19, 17, 32, 0.14), 0px 9px 46px 8px rgba(19, 17, 32, 0.12)"
        ];
    }
};
/* harmony default export */ const shadows = (Shadows);

;// CONCATENATED MODULE: ./src/@core/theme/breakpoints/index.js
const breakpoints = ()=>({
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    });
/* harmony default export */ const theme_breakpoints = (breakpoints);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeOptions.js
// ** MUI Theme Provider

// ** Theme Override Imports




const themeOptions = (settings)=>{
    // ** Vars
    const { mode , themeColor  } = settings;
    const themeConfig = {
        palette: palette(mode, themeColor),
        typography: {
            fontFamily: [
                "Inter",
                "sans-serif",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                "Roboto",
                '"Helvetica Neue"',
                "Arial",
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"'
            ].join(",")
        },
        shadows: shadows(mode),
        ...spacing,
        breakpoints: theme_breakpoints(),
        shape: {
            borderRadius: 6
        },
        mixins: {
            toolbar: {
                minHeight: 64
            }
        }
    };
    return (0,utils_namespaceObject.deepmerge)(themeConfig, {
        palette: {
            primary: {
                ...themeConfig.palette[themeColor]
            }
        }
    });
};
/* harmony default export */ const ThemeOptions = (themeOptions);

;// CONCATENATED MODULE: ./src/@core/theme/globalStyles.js
const GlobalStyles = (theme)=>{
    return {
        ".ps__rail-y": {
            zIndex: 1,
            right: "0 !important",
            left: "auto !important",
            "&:hover, &:focus, &.ps--clicking": {
                backgroundColor: theme.palette.mode === "light" ? "#E4E5EB !important" : "#423D5D !important"
            },
            "& .ps__thumb-y": {
                right: "3px !important",
                left: "auto !important",
                backgroundColor: theme.palette.mode === "light" ? "#C2C4D1 !important" : "#504B6D !important"
            },
            ".layout-vertical-nav &": {
                "& .ps__thumb-y": {
                    width: 4,
                    backgroundColor: theme.palette.mode === "light" ? "#C2C4D1 !important" : "#504B6D !important"
                },
                "&:hover, &:focus, &.ps--clicking": {
                    backgroundColor: "transparent !important",
                    "& .ps__thumb-y": {
                        width: 6
                    }
                }
            }
        },
        "#nprogress": {
            pointerEvents: "none",
            "& .bar": {
                left: 0,
                top: 0,
                height: 3,
                width: "100%",
                zIndex: 2000,
                position: "fixed",
                backgroundColor: theme.palette.primary.main
            }
        }
    };
};
/* harmony default export */ const globalStyles = (GlobalStyles);

;// CONCATENATED MODULE: ./src/@core/theme/ThemeComponent.js

// ** MUI Imports



// ** Theme Config

// ** Theme Override Imports


// ** Theme

// ** Global Styles

const ThemeComponent = (props)=>{
    // ** Props
    const { settings , children  } = props;
    // ** Merged ThemeOptions of Core and User
    const coreThemeConfig = ThemeOptions(settings);
    // ** Pass ThemeOptions to CreateTheme Function to create partial theme without component overrides
    let theme = (0,styles_.createTheme)(coreThemeConfig);
    // ** Continue theme creation and pass merged component overrides to CreateTheme function
    theme = (0,styles_.createTheme)(theme, {
        components: {
            ...overrides(theme)
        },
        typography: {
            ...theme_typography(theme)
        }
    });
    // ** Set responsive font sizes to true
    if (configs_themeConfig.responsiveFontSizes) {
        theme = (0,styles_.responsiveFontSizes)(theme);
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(styles_.ThemeProvider, {
        theme: theme,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((CssBaseline_default()), {}),
            /*#__PURE__*/ jsx_runtime_.jsx((GlobalStyles_default()), {
                styles: ()=>globalStyles(theme)
            }),
            children
        ]
    });
};
/* harmony default export */ const theme_ThemeComponent = (ThemeComponent);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/@core/context/settingsContext.js

// ** React Imports

// ** ThemeConfig Import

const initialSettings = {
    themeColor: "primary",
    mode: configs_themeConfig.mode,
    contentWidth: configs_themeConfig.contentWidth
};
// ** Create Context
const SettingsContext = /*#__PURE__*/ (0,external_react_.createContext)({
    saveSettings: ()=>null,
    settings: initialSettings
});
const SettingsProvider = ({ children  })=>{
    // ** State
    const { 0: settings , 1: setSettings  } = (0,external_react_.useState)({
        ...initialSettings
    });
    const saveSettings = (updatedSettings)=>{
        setSettings(updatedSettings);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(SettingsContext.Provider, {
        value: {
            settings,
            saveSettings
        },
        children: children
    });
};
const SettingsConsumer = SettingsContext.Consumer;

// EXTERNAL MODULE: ./src/@core/utils/create-emotion-cache.js + 1 modules
var create_emotion_cache = __webpack_require__(9787);
// EXTERNAL MODULE: ./src/@core/layouts/BlankLayout.js
var BlankLayout = __webpack_require__(5064);
;// CONCATENATED MODULE: ./src/pages/_app.js

// ** Next Imports


// ** Loader Import

// ** Emotion Imports

// ** Config Imports

// ** Component Imports

// ** Contexts

// ** Utils Imports

// ** React Perfect Scrollbar Style

// ** Global css styles


const clientSideEmotionCache = (0,create_emotion_cache/* createEmotionCache */.S)();
// ** Pace Loader
if (configs_themeConfig.routingLoader) {
    router_.Router.events.on("routeChangeStart", ()=>{
        external_nprogress_default().start();
    });
    router_.Router.events.on("routeChangeError", ()=>{
        external_nprogress_default().done();
    });
    router_.Router.events.on("routeChangeComplete", ()=>{
        external_nprogress_default().done();
    });
}
// ** Configure JSS & ClassName
const App = (props)=>{
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    // Variables
    const getLayout = Component.getLayout ?? ((page)=>/*#__PURE__*/ jsx_runtime_.jsx(BlankLayout/* default */.Z, {
            children: page
        }));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_namespaceObject.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: ` MOVIE APP`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: `MOVIE APP`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "keywords",
                        content: "MOVIE APP"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SettingsProvider, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(SettingsConsumer, {
                    children: ({ settings  })=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx(theme_ThemeComponent, {
                            settings: settings,
                            children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                                ...pageProps
                            }))
                        });
                    }
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 19:
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [64], () => (__webpack_exec__(9819)));
module.exports = __webpack_exports__;

})();