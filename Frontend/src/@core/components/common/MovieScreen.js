// ** React Imports
import { useState } from 'react'

// ** Next Imports
import Link from 'next/link'
import { useRouter } from 'next/router'

// ** MUI Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import { styled, useTheme } from '@mui/material/styles'
import MuiCard from '@mui/material/Card'
import InputAdornment from '@mui/material/InputAdornment'
import MuiFormControlLabel from '@mui/material/FormControlLabel'
import * as Yup from 'yup'; // Import Yup
// ** Icons Imports
import DropzoneComponent from 'src/@core/components/dropZone'
import { Formik } from 'formik'

// ** Styled Components
const Card = styled(MuiCard)(({ theme }) => ({
    [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
    fontSize: '0.875rem',
    textDecoration: 'none',
    color: theme.palette.primary.main
}))


const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
    '& .MuiFormControlLabel-label': {
        fontSize: '0.875rem',
        // color: theme.palette.text.secondary
        color: 'white'
    }
}))

const MovieScreen = ({ pageTitle, isEdit, title, year,onSubmit }) => {
    const [values, setValues] = useState({
        title: '',
        year: ''
    })
    const theme = useTheme()
    const router = useRouter()



    const _validationSchema = Yup.object().shape({
        title: Yup.string().required('title is required'),
        year: Yup.string().required('year is required')
    })
    const _onSubmit = async (values, resetForm, e) => {
        console.log('________________--', values, resetForm);
        onSubmit(values)
        // Your form submission logic here
    }

    return (
        <>
            <Formik
                initialValues={values}
                enableReinitialize
                validationSchema={_validationSchema}
                onSubmit={async (values, { resetForm }, e) => {
                    _onSubmit(values, resetForm, e);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    setFieldValue,
                    resetForm,

                    /* and other goodies */
                }) => (
                        <div className='content-center' style={{
                            display: "flex", width: "100%", flexDirection: "column", alignItems: "flex-start",
                            justifyContent: "space-evenly",
                        }}>
                            <Typography
                                variant='h6'
                                sx={{
                                    textAlign: "center",
                                    lineHeight: 1,
                                    fontWeight: 600,
                                    // textTransform: 'uppercase',
                                    fontSize: '2.5rem !important',
                                    color: 'white',
                                    width: "50%",
                                    // top: '120px',
                                    left: '120px',
                                    // paddingRight: 373,
                                    // paddingLeft: 80
                                }}
                            >
                                {pageTitle}
                            </Typography>
                            <div style={{
                                display: "flex", width: "100%",
                                justifyContent: "center"
                            }}>

                                <div style={{ width: "50%", display: 'flex', justifyContent: "center" }}>
                                    <DropzoneComponent />
                                </div>
                                <div style={{ width: "50%" }}>
                                    <Card sx={{ backgroundColor: "#093545", padding: 0 }} >
                                        <CardContent sx={{ border: 0 }}>
                                            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                                                <TextField name={'title'} value={values.title} onChange={handleChange} onBlur={handleBlur} error={touched.title && Boolean(errors.title)} fullWidth label='Title' sx={{ marginBottom: 4, backgroundColor: "#224957", borderRadius: "10px", input: { color: 'white' } }} InputLabelProps={{ style: { color: 'white' } }} />

                                                <TextField name={'year'} value={values.year} onChange={handleChange} onBlur={handleBlur} error={touched.year && Boolean(errors.year)} label='Publishing year' sx={{ marginBottom: 4, backgroundColor: "#224957", borderRadius: "10px" }} InputLabelProps={{ style: { color: 'white' } }} />
                                                <Box
                                                    sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center', height: "24px", marginTop: '10px', marginBottom: '20px' }}
                                                >

                                                </Box>

                                                <div className='button-wrapper' style={{ display: 'flex', gap: '16px' }}>
                                                    <Button
                                                        className='col-6'
                                                        fullWidth
                                                        size='large'
                                                        variant='outlined'
                                                        sx={{ marginBottom: 7,color:'#fff',borderColor:"#fff", borderRadius: "10px", height: "54px" }}
                                                    // onClick={() => router.push('/')}
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button

                                                        className='col-6'
                                                        fullWidth
                                                        size='large'
                                                        variant='contained'
                                                        sx={{ marginBottom: 7, borderRadius: "10px", height: "54px" }}
                                                        onClick={handleSubmit}
                                                    >
                                                        {isEdit ? "Update" : "Submit"}
                                                    </Button>
                                                </div>
                                            </form>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div >
                )}
            </Formik>



        </>
    )

}
// MovieScreen.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default MovieScreen
