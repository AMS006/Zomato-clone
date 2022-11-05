import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import RoomIcon from '@mui/icons-material/Room';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import SignIn from '../Auth/SignIn';
import { Typography } from '@mui/material';
import SignUp from '../Auth/SignUp';
import { useSelector,useDispatch } from 'react-redux';
import {signOut} from '../../redux/reducers/auth/auth.action'
import {clearUser} from '../../redux/reducers/user/user.action'
function NavbarLg(){
    const user = useSelector((globalState) => globalState.userReducer.user)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const name = user.fullName?user.fullName.split(" "):[];
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleSignOut = () =>{
        dispatch(signOut())
        dispatch(clearUser())
        navigate('/delivery')
      }
      const [openSignInModal, setSignInModalOpen] = useState(false);
      const [openSignUpModal, setSignUpModalOpen] = useState(false);

      const handleSignInOpen = () => setSignInModalOpen(true)
      const handleSignUpOpen = () => setSignUpModalOpen(true)
    return (
        <div className='hidden  lg:flex justify-between px-24 py-4 shadow items-center'>
            <SignIn open={openSignInModal} setOpen={setSignInModalOpen}/>
            <SignUp open={openSignUpModal} setOpen={setSignUpModalOpen}/>
            <div className='flex items-center gap-6 w-4/5'>
                <div className='w-1/5'>
                <Link to={`/delivery`}>
                    <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} className="w-full h-full" alt='logo'></img>
                </Link>
                </div>
                <div className='shadow flex py-3 px-2 w-3/4 border rounded'>
                    <div className='flex gap-2 border-r-2 items-center px-2 w-1/3'>
                       <i className='text-zomato-400 text-2xl'><RoomIcon /></i>
                        <input type="text" name=""  className='w-full focus:outline-none' placeholder='Mumbai'/>
                        <i className='text-2xl'><ArrowDropDownIcon /></i>
                    </div>
                    <div className='flex px-2 items-center gap-2 w-2/3'>
                       <i className='text-xl text-gray-500'><SearchIcon /></i> 
                        <input type="text" name="search" className='w-full focus:outline-none'  placeholder='Search for cusine'/>
                    </div>
                </div>
            </div>
            <div className='w-1/5 flex justify-end items-center'>
                {user?.fullName ? (
                    <div>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>{user.fullName.charAt(0)}</Avatar>
                            <Typography ml={1}>{name[0]}</Typography>
                            {open?<KeyboardArrowUpIcon />:<KeyboardArrowDownIcon />}
                        </IconButton>
                        <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem sx={{gap:1}}>
                        <ListItemIcon>
                            <Avatar sx={{ width: 28, height: 28}}/>
                        </ListItemIcon>
                         Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{gap:1}} onClick={handleSignOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                        </MenuItem>
                    </Menu>
                    </div>
                )
                :
                    <div className='flex gap-4 text-xl text-gray-500 cursor-pointer'>
                        <span className='cursor-pointer' onClick={() =>handleSignInOpen()}>Login</span>
                        <span className='cursor-pointer' onClick={() =>handleSignUpOpen()}>SignUp</span>
                    </div>
                }
            </div>
        </div>
    )
}
function NavabarMobile(){
    const user = useSelector((globalState) => globalState.userReducer.user)
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl);
    const name = user.fullName?user.fullName.split(" "):[];
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const handleSignOut = () =>{
        dispatch(signOut())
        dispatch(clearUser())
        navigate('/delivery')
      }
      const [openSignInModal, setSignInModalOpen] = useState(false);
      const [openSignUpModal, setSignUpModalOpen] = useState(false);

      const handleSignInOpen = () => setSignInModalOpen(true)
      const handleSignUpOpen = () => setSignUpModalOpen(true)
    return(
        <>
            <SignIn open={openSignInModal} setOpen={setSignInModalOpen}/>
            <SignUp open={openSignUpModal} setOpen={setSignUpModalOpen}/>
        <div className='flex items-center justify-between shadow lg:hidden md:px-10 px-4 py-4'>
            <div className='w-1/4' >
                <Link to='/delivery'>
                    <img src={"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"} className="w-full h-full" alt='logo' />
                </Link>
            </div>
            <div className="flex items-center">
                <div>
                    <button className="bg-zomato-400 font-medium py-2 px-3 rounded-full text-white">Use App</button>
                </div>
                {
                    user.fullName? 
                    <div>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar sx={{ width: 32, height: 32 }}>{user.fullName.charAt(0)}</Avatar>
                            
                        </IconButton>
                        <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem sx={{gap:1}}>
                        <ListItemIcon>
                            <Avatar sx={{ width: 28, height: 28}}/>
                        </ListItemIcon>
                         Profile
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{gap:1}} onClick={handleSignOut}>
                        <ListItemIcon>
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                        </MenuItem>
                    </Menu>
                    </div>:
                    <div>
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? 'account-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                        >
                            <Avatar src="https://www.iconpacks.net/icons/1/free-user-logout-icon-304-thumb.png"></Avatar>
                        </IconButton>
                        <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem sx={{gap:1}} onClick={handleSignInOpen}>
                        
                         LogIn
                        </MenuItem>
                        <Divider />
                        <MenuItem sx={{gap:1}} onClick={handleSignUpOpen}>
                            SignUp
                        </MenuItem>
                    </Menu>
                    </div>
                }
            </div>
        </div>
        </>
    )
}
function Navbar() {
    const restaurants = useSelector(
        (globalState) => globalState.restaurantReducer.restaurants
    )
    const selectedRestaurant = useSelector(
        (globalState) => globalState.restaurantReducer.selectedRestaurant
    )
  return (
    <div>
      {restaurants || selectedRestaurant ? <NavbarLg /> :"Loading.."}
      {restaurants || selectedRestaurant ?<NavabarMobile />:"Loading..."}
    </div>
  )
}

export default Navbar;
{/* <Avatar src="https://www.iconpacks.net/icons/1/free-user-logout-icon-304-thumb.png"></Avatar>} */}

