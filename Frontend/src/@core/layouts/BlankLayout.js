// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

// Styled component for Blank Layout component
const BlankLayoutWrapper = styled(Box)(({ theme }) => ({
  height: '100vh',

  // For V1 Blank layout pages
  '& .content-center': {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(5)
  },

  // For V2 Blank layout pages
  '& .content-right': {
    display: 'flex',
    minHeight: '100vh',
    overflowX: 'hidden',
    position: 'relative'
  }
}))

const BlankLayout = ({ children }) => {
  return (
    <BlankLayoutWrapper className='layout-wrapper' style={{ backgroundColor: "#093545" }}>

      <Box className='app-content' sx={{ minHeight: '100vh', overflowX: 'hidden', position: 'relative' }}>
        {children}

      </Box>
      <img
        src='/images/pages/Login_bottom_image.png'
        alt='Footer Image'
        width={'100%'}
        style={{ position: 'fixed', bottom: 0, left: 0, right: 0, height: 111 }}
      />
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
