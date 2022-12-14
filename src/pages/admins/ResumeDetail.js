import styled from 'styled-components';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import AutoSelect from '../../components/resume/AutoSelect';
import CareerComponent from '../../components/resume/CareerComponent';
import CoreActivity from '../../components/resume/CoreActivity';
import ExternalActivity from '../../components/resume/ExternalActivity';
import ForeignAbility from '../../components/resume/ForeignAbility';
import TrainingCareer from '../../components/resume/TrainingCareer';
import Qualification from '../../components/resume/Qualification';
import SchoolAbility from '../../components/resume/SchoolAbility';
import MainResume from '../../components/resume/MainResume';
import {useForm} from 'react-hook-form';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {
  CallDeleteResumeAPI,
  CallFindResumeAPI
} from '../../apis/resume/ResumeAPICalls';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const OutletContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;
  gap: 30px;

  width: 100%;
  min-width: 1200px;
`;

export const BackButtonContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  max-width: 1200px;
  height: 50px;
`;

export const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

function ResumeDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const {register, handleSubmit, setValue} = useForm();
  const dispatch = useDispatch();

  const resumeInfo = useSelector(
    (state) => state.resumeCombineReducer.resumeFindReducer
  );
  const selectedList = useSelector(
    (state) => state.resumeCombineReducer.resumeSelectReducer
  );

  const [open, setOpen] = React.useState(false);

  const resumeCode = useParams().resumeCode;

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseYesHandler = () => {
    setOpen(false);
    CallDeleteResumeAPI(resumeCode);
    navigate('/resume');
  };

  React.useEffect(() => {
    dispatch(CallFindResumeAPI(resumeCode));
  }, []);

  console.log('resumeInfo');
  console.log(resumeInfo);

  if (resumeInfo) {
    selectedList.career = resumeInfo.careerInfoList.length > 0 ? true : false;
    selectedList.activity =
      resumeInfo.coreActivityInfoList.length > 0 ? true : false;
    selectedList.external =
      resumeInfo.externalInfoList.length > 0 ? true : false;
    selectedList.foreign =
      resumeInfo.foreignLanguageAndTestNameInfoList.length > 0 ? true : false;
    selectedList.experience =
      resumeInfo.externalInfoList.length > 0 ? true : false;
    selectedList.qualification =
      resumeInfo.qualificationInfoList.length > 0 ? true : false;
  }

  console.log(selectedList);
  return (
    <OutletContainer>
      <BackButtonContainter>
        <StyledButton
          onClick={() => {
            navigate(-1);
          }}
        >
          ????????????
        </StyledButton>
      </BackButtonContainter>
      <FormContainer
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* ????????? ?????? */}
        <MainResume
          register={register}
          setValue={setValue}
          isReadOnly={true}
          resumeInfo={resumeInfo}
          isUpdate={true}
        />
        {/* ???????????? */}
        <SchoolAbility
          register={register}
          setValue={setValue}
          resumeInfo={resumeInfo}
          isReadOnly={true}
        />
        {/* ?????? ?????? */}
        {resumeInfo && resumeInfo.skillInfoList && (
          <AutoSelect
            keyName={'skillStack'}
            title={'?????? ??????'}
            list={resumeInfo.skillInfoList}
            register={register}
            setValue={setValue}
            isReadOnly={true}
            resumeInfo={resumeInfo}
          />
        )}

        {/* ?????? ?????? */}
        {resumeInfo && resumeInfo.desiredJobInfoList && (
          <AutoSelect
            keyName={'desiredJob'}
            title={'?????? ??????'}
            list={resumeInfo.desiredJobInfoList}
            register={register}
            setValue={setValue}
            isReadOnly={true}
            resumeInfo={resumeInfo}
          />
        )}

        {/* ???????????? */}
        {selectedList.career && (
          <CareerComponent
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        {/* ???????????? ??? ???????????? */}
        {selectedList.activity && (
          <CoreActivity
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        {/* ???????????? */}
        {selectedList.external && (
          <ExternalActivity
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        {/* ????????? ?????? */}
        {selectedList.foreign && (
          <ForeignAbility
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        {/* ???????????? ???????????? */}
        {selectedList.experience && (
          <TrainingCareer
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        {/* ?????? ?????? ?????? */}
        {selectedList.qualification && (
          <Qualification
            register={register}
            setValue={setValue}
            resumeInfo={resumeInfo}
            isReadOnly={true}
          />
        )}
        <div style={{display: 'flex', flexDirection: 'row', gap: '30px'}}>
          <Button
            variant='contained'
            size='large'
            /* type='submit' */ onClick={() => {
              navigate(-1);
            }}
          >
            ????????????
          </Button>
        </div>
      </FormContainer>
    </OutletContainer>
  );
}

export default ResumeDetail;
