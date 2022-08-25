import React from 'react'
import style from '../Login/Login.module.css'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Text,
  Button
} from '@chakra-ui/react'

const Login = () => {
  return (
    <div className={style.loginContainer}>
      <div  className={style.loginContainer_1}>
         <div className={style.loginContainer_2}>
            <img style={{width:'120px', margin:'auto', marginTop:'20px'}} src="https://roi4cio.com/fileadmin/user_upload/tmetric_logo.png" alt="logo" />
            <p>Login into Tmetric</p>
         </div>
         <div className={style.loginContainer_3}>
         <FormControl >

            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Email</FormLabel>
            <Input borderRadius={3} placeholder='johnsmith@gmail.com' marginBottom={3} size='xs' type='email' />
            <FormLabel color='rgb(163,126,133)' fontSize='xs'>Password</FormLabel>
            <Input borderRadius={3} placeholder='Enter your password' marginBottom={5} size='xs' type='password' />
            <Button borderRadius={3} width={330} size='xs' color='white' marginBottom={4} backgroundColor='rgb(48,112,240)'>Log in</Button>
            <div className={style.lineText}><p>or</p></div>

            <Button variant='outline' borderRadius={3} width={330} size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://w7.pngwing.com/pngs/249/19/png-transparent-google-logo-g-suite-google-guava-google-plus-company-text-logo.png" alt="google" /></span> Log in the Google</Button>
            <Button variant='outline' borderRadius={3} width={330} size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={10} src="https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1633073277" alt="microsoft" /></span> Log in the Microsoft</Button>
            <Button variant='outline' borderRadius={3} width={330} size='xs' color='gray' marginBottom={4} colorScheme='gray'> <span><img width={15} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c516.png" alt="apple" /></span> Log in the Apple</Button>
            <hr />
            <div className={style.bottomSlide}>
              <a href=""><Text>Can't Log In?</Text></a>
              <a href=""><Text>Sign Up</Text></a>
            </div>
          </FormControl>
          </div>
      </div>
      <div className={style.privacy}>
            <a href="">Privacy Policy</a>
          </div>
    </div>
  )
}

export default Login