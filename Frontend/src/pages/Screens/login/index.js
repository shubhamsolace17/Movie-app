// ** React Imports
import { useState } from "react";

// ** Next Imports
import Link from "next/link";
import { useRouter } from "next/router";

// ** MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled, useTheme } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import MuiFormControlLabel from "@mui/material/FormControlLabel";

// ** Icons Imports
import Google from "mdi-material-ui/Google";
import Github from "mdi-material-ui/Github";
import Twitter from "mdi-material-ui/Twitter";
import Facebook from "mdi-material-ui/Facebook";
import EyeOutline from "mdi-material-ui/EyeOutline";
import EyeOffOutline from "mdi-material-ui/EyeOffOutline";

import Cookies from "js-cookie";

import * as Yup from "yup"; // Import Yup

// ** Configs
import themeConfig from "src/configs/themeConfig";

// ** Layout Import
import BlankLayout from "src/@core/layouts/BlankLayout";
import { Formik } from "formik";

// ** Demo Imports
import FooterIllustrationsV1 from "src/views/pages/auth/FooterIllustration";
import { Centos } from "mdi-material-ui";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { _login } from "src/services/api";

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: { width: "28rem" },
}));

const LinkStyled = styled("a")(({ theme }) => ({
  fontSize: "0.875rem",
  textDecoration: "none",
  color: theme.palette.primary.main,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem",
    // color: theme.palette.text.secondary
    color: "white",
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues = {
  email: "",
};

const LoginPage = () => {
  // ** State
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });
  const [loading,setLoading] = useState(false);

  // ** Hook
  const theme = useTheme();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword((prev) => !prev);
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = async (val) => {
    const data = {
      email: val.email,
      password: val.password,
    };
    // await _login(data)
    //   .then((response) => {
    //     if (response?.success) {
    //       setLoading(false);
    //       Cookies.set("loggedin", "true");
    //       router.push("/dashboard");
    //     } else {
    //       setLoading(false);
    //     }
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     alert("Error!", err);
    //   });
    Cookies.set("loggedin", "true");
    router.push("/dashboard");
  };
  return (
    <>
      <Box className="content-center">
        <Card sx={{ backgroundColor: "#093545" }}>
          <CardContent sx={{ border: 0 }}>
            <Box
              sx={{
                mb: 8,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  ml: 3,
                  lineHeight: 1,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  fontSize: "2.5rem !important",
                  color: "white",
                }}
              >
                Sign In
              </Typography>
            </Box>

            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log("val", values);
                onSubmit(values);
                // Handle form submission here
                // For example, you can use the router to navigate
                // router.push("/dashboard");
                setSubmitting(false);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
                <>
                  <TextField
                    autoFocus
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email ? errors.email : ""}
                    sx={{ marginBottom: 4, borderRadius: "10px" }}
                    InputLabelProps={{ style: { color: "white" } }}
                  />

                  <TextField
                    autoFocus
                    fullWidth
                    id="password"
                    name="password"
                    label="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password ? errors.password : ""}
                    sx={{ marginBottom: 4, borderRadius: "10px" }}
                    InputLabelProps={{ style: { color: "white" } }}
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            edge="end"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            aria-label="toggle password visibility"
                          >
                            {showPassword ? <EyeOutline /> : <EyeOffOutline />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />

                  <Box
                    sx={{
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      height: "24px",
                      marginTop: "10px",
                      marginBottom: "20px",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{
                            color: "#224957",
                            fontWeight: "900px",
                            font: "Montserrat",
                          }}
                        />
                      }
                      label="Remember Me"
                    />
                    {/* <Link passHref href='/'>
                  <LinkStyled onClick={e => e.preventDefault()}>Forgot Password?</LinkStyled>
                </Link> */}
                  </Box>
                  <Button
                    fullWidth
                    size="large"
                    variant="contained"
                    sx={{
                      marginBottom: 7,
                      padding: "15px 126px 15px 126px",
                      borderRadius: "10px",
                      height: "54px",
                    }}
                    onClick={() => {
                      handleSubmit();
                      // Cookies.set("loggedin", "true");
                      // router.push("/dashboard");
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </Formik>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};
LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;

export default LoginPage;
