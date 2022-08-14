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
const Post = ({ post }) => {
  const classes = useStyles()
  const { selectedFile, title, creator, createdAt, tags, message, likeCount } =
    post
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={selectedFile} title={title} />
      <div className={classes.overlay}>
        <Typography variant='h6'>{creator}</Typography>
        <Typography variant='h6'>{moment(createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size='small' onClick={() => {}}>
          <MoreHoriz fontSize='medium' />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant='body2' color='textSecondary'>
          {tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant='h5' gutterBottom>
          {message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAlt fontSize='small' />
          Like
          {likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <Delete fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
