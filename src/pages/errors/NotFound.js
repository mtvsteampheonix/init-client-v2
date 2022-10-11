import {Grid, Typography} from '@mui/material';

export default function NotFound() {
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography>페이지를 찾을 수 없습니다.</Typography>
      </Grid>
    </Grid>
  );
}
