import styled from 'styled-components';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {
  CallDeleteResumeAPI,
  CallResumeCodeAPI
} from '../../apis/resume/ResumeAPICalls';

const OutletContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;

  width: 100%;
  min-width: 1200px;
`;

const ResumeMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;

  width: 100%;
  max-width: 1200px;
  height: fit-content;
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  width: 100%;
  max-width: 1200px;
  height: 72px;
`;
const ResumeHeaderText = styled.div`
  // font-family: 'Inder';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 100%;
  color: black;
`;
const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

const ResumeList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1200px;

  border-width: 1px 0px;
  border-style: solid;
  border-color: #000000;
`;

const ResumeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  width: 100%;
  height: 109px;
  background: #ffffff;
`;

const ResumeCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  gap: 24px;

  width: 100%;
  height: 73px;
`;

const ResumeCardText = styled.div`
  // font-family: 'Inder';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
`;

const ResumeCardButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

const ResumeCardDetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  width: 100%;
  height: 36px;

  background: #ffffff;
`;

const ResumeCardDetailContainerText = styled.div`
  height: 16px;
  // font-family: 'Inder';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
`;

export function Manage() {
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const resumeList = useSelector(
    (state) => state.resumeCombineReducer.resumeFindCodeReducer
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYesHandler = (resumeCode) => {
    setOpen(false);
    CallDeleteResumeAPI(resumeCode);
    window.location.replace('/resume');
  };

  React.useEffect(() => {
    dispatch(CallResumeCodeAPI());
  }, []);

  const createResumeCard = (cardNumber, selectCategory) => {
    const resumeResult = [];

    for (let i = 0; i < resumeList.length; i++) {
      console.log(resumeList[i].title);
      resumeResult.push(
        <ResumeCard>
          <ResumeCardContainer>
            <ResumeCardText
              onClick={() => {
                navigate('/resume/detail/' + resumeList[i].resumeCode);
              }}
            >
              {resumeList[i].title}
            </ResumeCardText>
            <ResumeCardButtonContainer>
              <StyledButton
                onClick={() => {
                  navigate('/resume/edit/' + resumeList[i].resumeCode);
                }}
              >
                ????????????
              </StyledButton>
              <div>
                <StyledButton onClick={handleClickOpen}>????????????</StyledButton>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <DialogTitle id='alert-dialog-title'>
                    {'?????????????????????????'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                      ???????????? ???????????? ???????????????.
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={() =>
                        handleCloseYesHandler(resumeList[i].resumeCode)
                      }
                    >
                      ???
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                      ?????????
                    </Button>
                  </DialogActions>
                </Dialog>
              </div>
            </ResumeCardButtonContainer>
          </ResumeCardContainer>
          {/* <ResumeCardDetailContainer>
            <ResumeCardDetailContainerText>
              ?????? ??????: {selectCategory}
            </ResumeCardDetailContainerText>
          </ResumeCardDetailContainer> */}
        </ResumeCard>
      );
    }
    return resumeResult;
  };

  return (
    <OutletContainer>
      <ResumeMainContainer>
        <ResumeContainer>
          <ResumeHeaderText>?????? ?????????</ResumeHeaderText>
          <StyledButton
            onClick={() => {
              // setResumeCount(resumeCount + 1);
              if (resumeList.length > 5) {
                alert('???????????? 5???????????? ????????? ??? ????????????.');
              } else {
                navigate('/resume/add');
              }
            }}
          >
            ??? ????????? ??????
          </StyledButton>
        </ResumeContainer>
        <ResumeList>
          {resumeList && createResumeCard(1, '????????????, ?????????, ????????? ??????')}
        </ResumeList>
      </ResumeMainContainer>
    </OutletContainer>
  );
}
