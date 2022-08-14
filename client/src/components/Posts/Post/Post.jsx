import React from 'react'
import moment from 'moment'
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core'
import { Delete, MoreHoriz, ThumbUpAlt } from '@material-ui/icons'
import useStyles from './styles'
import { useDispatch } from 'react-redux'
import { deletePost,likePost } from '../../../actions/posts'

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    _id,
    selectedFile,
    title,
    creator,
    createdAt,
    tags,
    message,
    likeCount,
  } = post
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{creator}</Typography>
        <Typography variant='h6'>{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: 'white' }}
          size='small'
          onClick={() => setCurrentId(_id)}>
          <MoreHoriz fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant='h5' gutterBottom>
        {title}
      </Typography>
      <CardContent>
        <Typography variant='body2' color='textSecondary' component='p'>
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => dispatch(likePost(_id))}>
          <ThumbUpAlt fontSize='small' />
          &nbsp; Like &nbsp;
          {likeCount}
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => dispatch(deletePost(_id))}>
          <Delete fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
