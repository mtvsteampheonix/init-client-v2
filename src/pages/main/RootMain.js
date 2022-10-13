import {Grid} from '@mui/material';
import {useLocation} from 'react-router-dom';
export default function RootMain() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            backgroundImage: 'url(/main/main.png)',
            height: 700,
            backgroundSize: 'cover'
          }}
        ></Grid>
      </Grid>
    </>
  );
}
