import React, { PureComponent } from 'react';
import {Redirect} from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  card: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  details: {
    flex: '1 1 70%'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-start',
  },  
  cover: {
    flex: '1 1 30%'
  },
  actions: {
   justifySelf: 'flex-end',
   paddingLeft: 0
  }
});

class Search extends PureComponent {
  
  componentDidMount() {
    this.props.handlePageChange("Search");
  }

  render() {
    const {classes, bookList, saveBook} = this.props;
    return (
      <div>
        <Grid container spacing={24} alignItems="stretch" alignContent="stretch">
          {!bookList.length ? (<Typography variant='h4'>No Books Found!</Typography>) : (
            bookList.map(book => {
              return (
                <Grid key={book.bookId} style={{'display': 'grid'}} item xs={12} sm={6} >
                  <Card className={classes.card} raised>
                    <div className={classes.details}>

                    <CardContent className={classes.content}>
                      <Typography variant='title'>{book.title}</Typography>
                      <Typography variant='subtitle1' >By {book.authors.join(", ")}</Typography>
                      <Typography variant='body1'>{book.description}</Typography>
                      <CardActions className={classes.actions}>
                        <Button href={book.link} target={"_blank"} size="small" color="primary">
                          View More Information
                      </Button>
                        <Button 
                        size='small' color='secondary' onClick={() => saveBook(book.bookId)}>Save This Book</Button>
                      </CardActions>
                    </CardContent>
                    </div>
                    <CardMedia
                      className={classes.cover}
                      component="img"
                      alt={book.title}
                      image={book.image}
                      title={book.title}
                    />
                  </Card>
                </Grid>
              )
            })
          )}
          
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Search);
