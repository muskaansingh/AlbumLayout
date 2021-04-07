import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ( {
  container: {
    backgroundColor: "#F0F0F0",
    marginTop:"100px"
  },
  icon:{
    marginRight: "20px"
  },
  buttons:{
    marginTop:"40px",
  },
  cardGrid:{
    padding: "20px 0"
  },
  card:{
    height:"100%",
    display:"flex",
    flexDirection:"column"
  },
  cardMedia: {
    paddingTop:"56.25%" // 16:9
  },
  cardContent: {
    flexGrow:1
  },
  footer: {
    backgroundColor: "F0F0F0",
    padding:"50px 0"
  }
}));

export default useStyles;