import {
  Divider,
  Grid,
  Typography,
  Stack,
  Button,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import {useNavigate, useParams} from 'react-router-dom';
import {styled} from '@mui/system';
import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  callGetSignupplzDetailAPI,
  callPutCompanyMemberIsActive
} from '../../apis/admins/AdminAPICalls';

const StyledGridItem = styled(Grid)({
  display: 'flex'
});
const StyledDivider = styled(Divider)(({theme}) => ({
  borderColor: theme.palette.primary.main
}));
function DetailCard({category, children, islink}) {
  return (
    <Grid container>
      <Grid item xs={4}>
        <Typography>{category}</Typography>
      </Grid>
      <Divider flexItem orientation='vertical' variant='middle'></Divider>
      <Grid item xs={6}>
        {islink ? (
          <Typography
            marginLeft={2}
            component='a'
            href={children}
            target='_blank'
            sx={{textDecorationLine: 'none'}}
          >
            {children}
          </Typography>
        ) : (
          <Typography marginLeft={2}>{children}</Typography>
        )}
      </Grid>
    </Grid>
  );
}

export default function SignupplzDetails() {
  const {memberCode} = useParams();
  const [rejectOpen, setRejectOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [details, setDetails] = useState({
    comName: '',
    comUrl: '',
    email: '',
    entMember: {
      remainingPost: 0,
      remainingInquire: 0,
      companyCodeFk: 0,
      isActive: null,
      memberCodeFk: 0
    },
    memberCodePk: '',
    memberId: '',
    memberName: '',
    memberPw: '',
    phone: '',
    registNumber: 0,
    signupDate: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(memberCode);
  console.log(details);
  const toggleConfirmOpen = () => {
    setConfirmOpen(!confirmOpen);
  };
  const toggleRejectOpen = () => {
    setRejectOpen(!confirmOpen);
  };
  useEffect(() => {
    dispatch(callGetSignupplzDetailAPI(memberCode)).then((res) =>
      setDetails(res)
    );
  }, []);
  return (
    details && (
      <>
        <Box
          maxWidth='800px'
          marginLeft='auto'
          marginRight='auto'
          marginTop={5}
          marginBottom={5}
        >
          <Stack spacing={5}>
            <Typography align='center' variant='h4'>
              ?????? ?????? ?????? ??????
            </Typography>
            <StyledDivider
              variant='fullWidth'
              textAlign='center'
              sx={{borderBottomWidth: 4}}
            />
            <Typography align='center' variant='h5'>
              ?????? ??????
            </Typography>
            <StyledDivider
              variant='fullWidth'
              textAlign='center'
              sx={{borderBottomWidth: 2}}
            />
            <Grid container padding={3} gap={1}>
              <StyledGridItem item xs={12}>
                <DetailCard category='?????????'>{details.memberId}</DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='??????'>{details.memberName}</DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='?????????'>{details.phone}</DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='?????????'>{details.email}</DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='????????? ?????? ??????'>
                  {details.registNumber
                    .toString()
                    .replace(/(\d{3})(\d{2})(\d{5})/, '$1-$2-$3')}
                </DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='???????????? ??????' islink='true'>
                  {details.comUrl}
                </DetailCard>
              </StyledGridItem>
              <StyledGridItem item xs={12}>
                <DetailCard category='?????? ??????'>
                  {details.signupDate}
                </DetailCard>
              </StyledGridItem>
              <StyledDivider
                variant='fullWidth'
                textAlign='center'
                sx={{borderBottomWidth: 2}}
              />
            </Grid>
            <StyledDivider
              variant='fullWidth'
              textAlign='center'
              sx={{borderBottomWidth: 2}}
            />
          </Stack>
          <Stack direction='row' spacing={5} marginTop={15}>
            <Button
              onClick={() => {
                setRejectOpen(true);
              }}
              fullWidth
              variant='contained'
              color='gray'
            >
              ??????
            </Button>
            <Button
              onClick={() => {
                setConfirmOpen(true);
              }}
              fullWidth
              variant='contained'
            >
              ??????
            </Button>
          </Stack>
        </Box>

        <Dialog
          open={confirmOpen}
          onClose={toggleConfirmOpen}
          aria-labelledby='confirm-title'
          aria-describedby='confirm-description'
        >
          <DialogTitle id='confirm-title'>?????? ?????????????????????????</DialogTitle>
          <DialogContent>
            <DialogContentText id='confirm-description'>
              ?????? ????????? ??? ????????????.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setConfirmOpen(false);
              }}
              variant='contained'
            >
              ?????????
            </Button>
            <Button
              onClick={() => {
                dispatch(callPutCompanyMemberIsActive(details, 'Y'));
                alert('?????? ??????');
                navigate('/admin/company/signupplz/');
              }}
              variant='contained'
              autoFocus
            >
              ???
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={rejectOpen}
          onClose={toggleRejectOpen}
          aria-labelledby='reject-title'
          aria-describedby='reject-description'
        >
          <DialogTitle id='confirm-title'>?????? ?????? ???????????????????</DialogTitle>
          <DialogContent>
            <DialogContentText id='confirm-description'>
              ?????? ????????? ??? ????????????.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setRejectOpen(false);
              }}
              variant='contained'
            >
              ?????????
            </Button>
            <Button
              onClick={() => {
                dispatch(callPutCompanyMemberIsActive(details, 'N'));
                alert('?????? ??????');
                navigate('/admin/company/signupplz/');
              }}
              variant='contained'
              autoFocus
            >
              ???
            </Button>
          </DialogActions>
        </Dialog>
      </>
    )
  );
}
