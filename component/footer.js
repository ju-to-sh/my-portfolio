import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    position: 'fixed',
    bottom: 0,
    textAlign: 'center',
    fontSize: '14px',
    width: '100%',
    padding: '14px',
    color: '#fff',
    backgroundColor: '#4686B8'
  },
}));

const Footer = () => {
  const classes = useStyles();

  return(
    <footer className={classes.footer}>
      <p>Copyright(C) Junki. All Rights Reserved.</p>
    </footer>
  )
};

export default Footer;
