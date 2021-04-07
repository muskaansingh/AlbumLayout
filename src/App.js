import './App.css';
import {Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button, Card, CardMedia, CardContent, CardActions} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function App() {
  const classes= useStyles();
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography variant="h5">AlbumLayout</Typography>
          </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
                Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button variant="contained" color="primary">  
                        See Photos!
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                        See Videos!
                    </Button>
                  </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                      <CardMedia 
                          className={classes.cardMedia}
                          image="https://source.unsplash.com/random"
                          title="Image Title"
                      />
                      <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h4">Heading!</Typography>
                          <Typography paragraph>hbdfajdflh  eufhjfjle ugfhuwfh fgLUWEFJBJENDJN</Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small" color="primary">View</Button>
                        <Button size="small" color="primary">Edit</Button>
                      </CardActions>
                  </Card>
              </Grid>
          ))}    
          </Grid>
        </Container>     
      
      </main>

      <footer className={classes.footer}>
            <Typography variant="h6" gutterBottom align="center">
                FOOTER!
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary">
                Some here to give footer a purpose!
            </Typography>
      </footer>
    </>
  );
}

export default App;
