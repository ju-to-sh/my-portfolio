import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import Hidden from '@material-ui/core/Hidden';
import Link from 'next/link';
import styles from './navbar.module.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(8),
  },
  siteTitle: {
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Grid container direction="row" justify="center" alignItems="center">
            <Grid item xs={6} sm={4}>
              <Typography variant="h1" color="inherit" className={classes.siteTitle}>
                Junki's Portfolio
              </Typography>
            </Grid>
            <Hidden xsDown>
              <Grid item xs={12} sm={6}>
                <nav>
                  <ul className={styles.headerNav}>
                    <Link href="/"><li><a>Home</a></li></Link>
                    <Link href="/"><li><a>About</a></li></Link>
                    <Link href="/"><li><a>Work</a></li></Link>
                    <Link href="/"><li><a>Blog</a></li></Link>
                    <Link href="/"><li><a>Contact</a></li></Link>
                  </ul>
                </nav>
              </Grid>
            </Hidden>
            <Hidden smUp>
            <Grid item xs={1} sm={1}>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Grid>
            </Hidden>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
