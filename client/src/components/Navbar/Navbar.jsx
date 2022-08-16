import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Button, Typography, Toolbar } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import useStyles from './styles'
import memo from '../../assets/LogoBig.png'
import { LOGOUT } from '../../constanta/actionTypes'

const Navbar = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const logout = () => {
    dispatch({ type: LOGOUT })
    navigate('/')
    setUser(null)
  }

  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])

  return (
    <>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to='/'
            className={classes.heading}
            variant='h2'
            align='center'>
            Memo
          </Typography>
          <img className={classes.image} src={memo} alt='memo' height='60' />
        </div>
        <Toolbar className={classes.toolbar}>
          {user ? (
            <div className={classes.profile}>
              <Avatar
                className={classes.purple}
                alt={user.result.name}
                src={user.result.imageUrl}>
                {user.result.name.charAt(0)}
              </Avatar>
              <Typography className={classes.userName} variant='h6'>
                {user.result.name}
              </Typography>
              <Button
                variant='contained'
                className={classes.logout}
                color='secondary'
                onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <Button
              component={Link}
              to='/auth'
              variant='contained'
              color='primary'>
              Sign In
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Navbar
