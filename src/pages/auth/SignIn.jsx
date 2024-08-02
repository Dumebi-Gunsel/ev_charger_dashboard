import { Box, Button,FormLabel, Checkbox, CssBaseline, CssVarsProvider, FormControl, GlobalStyles, IconButton, Input, Link, Stack, Typography } from '@mui/joy'
import React from 'react'

function SignIn() {
  return (
    <CssVarsProvider defaultMode="dark" disableTransitionOnChange>
    <CssBaseline />
    <GlobalStyles
      styles={{
        ':root': {
          '--Form-maxWidth': '800px',
          '--Transition-duration': '0.4s', // set to `none` to disable transition
        },
      }}
    />
    <Box
      sx={(theme) => ({
        width: { xs: '100%', md: '50vw' },
        transition: 'width var(--Transition-duration)',
        transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255 255 255 / 0.2)',
        [theme.getColorSchemeSelector('dark')]: {
          backgroundColor: 'rgba(19 19 24 / 0.4)',
        },
      })}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100dvh',
          width: '100%',
          px: 2,
        }}
      >
        
        <Box
          sx={{
            my: 'auto',
            py: 2,
            pb: 5,
            display: 'flex',
            flexDirection: 'column',
            gap: 4,
            width: '60%',
            maxWidth: '100%',
            mx: 'auto',
            borderRadius: 'sm',
            '& form': {
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            },
            [`& .MuiFormLabel-asterisk`]: {
              visibility: 'hidden',
            },
          }}
        >
          <div className='flex flex-col space-y-2 text-center lg:text-start'>
            <h1 className='font-bold font-[sans-serif] text-3xl'>Gunsel Charge</h1>
            <p>Sign in to access your dashboard and start managing your EV stations with ease</p>
          </div>
        
          <Stack gap={4} sx={{ mt: 2 }}>
            <form
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <FormControl required>
                <FormLabel>Email</FormLabel>
                <Input type="email" name="email" />
              </FormControl>
              <FormControl required>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" />
              </FormControl>
              <div className='flex flex-col gap-4 mt-2 '>
                <div className='flex justify-between items-center w-full' >
                  <Checkbox size="sm" label="Remember me" name="persistent" />
                  <a className='text-primary text-sm hover:underline  text-end' href="#">
                    Forgot your password?
                  </a>
                </div>
                <Button type="submit" sx={{background:"#0081AF"}} fullWidth>
                  Sign in
                </Button>
              </div>
            </form>
          </Stack>
        </Box>
        <Box component="footer" sx={{ py: 3 }}>
          <p className='text-xs text-center'>
            © Gunsel Electric Vehicles {new Date().getFullYear()}
          </p>
        </Box>
      </Box>
    </Box>
    <Box
      sx={(theme) => ({
        height: '100%',
        position: 'fixed',
        right: 0,
        top: 0,
        bottom: 0,
        left: { xs: 0, md: '50vw' },
        transition:
          'background-image var(--Transition-duration), left var(--Transition-duration) !important',
        transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
        backgroundColor: 'background.level1',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundImage:
          'url(/assets/images/ev-charger.jpg)',
        [theme.getColorSchemeSelector('dark')]: {
          backgroundImage:
            'url(/assets/images/ev-charger.jpg)',
        },
      })}
    />
  </CssVarsProvider>
  )
}

export default SignIn