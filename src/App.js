import './App.css';
import {Typography, CssBaseline, AppBar, Toolbar, Container, Grid, Button} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

function App() {
  return (
    <>
      <CssBaseline/>
      <AppBar position="relative">
          <Toolbar>
            <PhotoCamera/>
            <Typography variant="h5">AlbumLayout</Typography>
          </Toolbar>
      </AppBar>

      <main>
        <div>
          <Container maxWidth="sm">
            <Typography variant="h1" align="center" color="textPrimary" gutterBottom>
                Photo Album
            </Typography>
            <Typography variant="h6" align="center" color="textSecondary" paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            </Typography>
            <div>
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
      </main>
    </>
  );
}

export default App;
