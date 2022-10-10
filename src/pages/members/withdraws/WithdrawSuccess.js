import {Typography, Grid, Button} from '@mui/material';
import {Link} from 'react-router-dom';

export default function WithdrawSuccess() {
  return (
    <>
      <Grid container marginTop={5} spacing={10} paddingBottom={5}>
        <Grid item xs={12}>
          <Typography align='center' variant='h4'>
            INIT 회원 탈퇴
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid
            container
            border='3px solid gray'
            borderRadius={2}
            justifyContent='center'
            paddingTop={5}
            paddingBottom={5}
            rowGap={5}
          >
            <Grid item xs={12}>
              <Typography align='center' variant='h5'>
                회원 탈퇴가 완료 되었습니다.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography align='center'>
                지금까지 INIT과 함께해주셔서 감사합니다.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} display='flex' justifyContent='center'>
          <Button
            component={Link}
            to='/'
            variant='contained'
            size='large'
            sx={{height: '60px'}}
          >
            홈으로 돌아가기
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
