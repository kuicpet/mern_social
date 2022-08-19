import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { useParams, useNavigate } from 'react-router-dom'
import useStyles from './styles'
import {getPost} from '../../actions/posts'

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector((state) => state.posts)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const classes = useStyles()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getPost(id))
  },[id])
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant='h3' component='h2'>
            {post.title}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='h2'
            color='textSecondary'>
            {post.tags}
          </Typography>
          <Typography gutterBottom variant='body1' component='p'>
            {post.message}
          </Typography>
          <Typography variant='h6'>Created by:{post.name}</Typography>
          <Typography>{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{margin: '20px 0'}}></Divider>
          <Typography variant='body1'>Reat Time Chat</Typography>
          <Divider style={{margin: '20px 0'}}></Divider>
          <Typography variant='body1'>Comments</Typography>
          <Divider style={{margin: '20px 0'}}></Divider>
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile} />
        </div>
      </div>
    </Paper>
  )
}

export default PostDetails
