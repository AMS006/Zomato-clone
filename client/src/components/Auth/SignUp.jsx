import React,{useState} from 'react'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch} from 'react-redux'
import {signUp} from '../../redux/reducers/auth/auth.action'
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  function SignUp({open , setOpen}) {
  const [userData, setUserData] = useState({
    fullName:"",
    email:"",
    password:""
  })
  const handleChange = (e) =>{
    setUserData((prev) => ({...prev, [e.target.id]:e.target.value}))
  }
  const dispatch = useDispatch()
  const handleSubmit = () =>{
    dispatch(signUp(userData));
    setUserData({
      fullName:"",
      email:"",
      password:""
    })
    handleClose()
  }

      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
  return (
    <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <div className='flex justify-between border-b pb-3'>
            <h2 className='text-2xl '>SingUp</h2>
            <span onClick={() => handleClose()} className="cursor-pointer">
              <CloseIcon fontSize='medium'/>
            </span>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <div className="py-2">
                <label htmlFor="name" className='text-lg'>Enter Your Name</label>
                <input type="text" name="review-title" onChange={handleChange} className='border w-full py-2 px-2 rounded focus:outline-none ' placeholder='John deo' id="fullName" />
            </div>          
            <div className="py-2">
                <label htmlFor="email" className='text-lg'>Enter Your Email</label>
                <input type="email" name="review-title" onChange={handleChange} className='border w-full py-2 px-2 rounded focus:outline-none ' placeholder='e.g, abc@gmail.com' id="email" />
            </div>
            <div className='py-3'>
                <label htmlFor="password" className='text-lg'>Enter Your Password</label>
                <input type="password"  name="password" onChange={handleChange} className='border w-full py-2 px-2 rounded focus:outline-none' placeholder='••••••••' id="password" />
            </div>
            <div className='pt-3 text-lg'>
                <button className='w-full py-3 border flex justify-center gap-2 items-center'> 
                <svg width="24" height="24" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.87566 13.2946L4.10987 16.1534L1.31093 16.2126C0.474461 14.6611 0 12.886 0 10.9997C0 9.17565 0.443609 7.45552 1.22994 5.94092H1.23054L3.72238 6.39776L4.81396 8.87465C4.5855 9.54071 4.46097 10.2557 4.46097 10.9997C4.46106 11.8072 4.60732 12.5808 4.87566 13.2946Z" fill="#FBBB00"></path><path d="M21.8082 8.94507C21.9345 9.61048 22.0004 10.2977 22.0004 11C22.0004 11.7875 21.9176 12.5557 21.7598 13.2967C21.2243 15.8183 19.8252 18.0201 17.8869 19.5782L17.8863 19.5776L14.7477 19.4175L14.3035 16.6445C15.5896 15.8902 16.5947 14.7098 17.1242 13.2967H11.2422V8.94507H17.21H21.8082Z" fill="#518EF8"></path>
                    <path d="M17.8865 19.5778L17.8871 19.5784C16.002 21.0937 13.6073 22.0002 11.0006 22.0002C6.81152 22.0002 3.16945 19.6588 1.31152 16.2132L4.87625 13.2952C5.8052 15.7744 8.19679 17.5392 11.0006 17.5392C12.2057 17.5392 13.3348 17.2134 14.3036 16.6447L17.8865 19.5778Z" fill="#28B446"></path><path d="M18.0208 2.53241L14.4573 5.44981C13.4546 4.82307 12.2694 4.46102 10.9996 4.46102C8.13229 4.46102 5.69596 6.30682 4.81356 8.87494L1.23009 5.9412H1.22949C3.06022 2.41154 6.74823 0 10.9996 0C13.6686 0 16.1158 0.950726 18.0208 2.53241Z" fill="#F14336"></path>
                </svg> 
                <span>Continue with Google</span>
                </button>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions >
            <div className='py-3 flex gap-2 text-lg'>
            <button onClick={handleClose} className='border px-3 py-1 rounded  duration-300'>Cancel</button>
            <button  className='border px-3 py-1 rounded text-white duration-300 bg-zomato-400' onClick={handleSubmit}>
                SignUp
            </button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default SignUp
