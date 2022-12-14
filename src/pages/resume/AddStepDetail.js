import styled from 'styled-components';
import Button from '@mui/material/Button';
import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
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
import {
  CallDesiredJobListAPI,
  CallInsertResumeAPI,
  CallSkillListAPI
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

function AddStepDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const {register, handleSubmit, setValue} = useForm();

  const selectedList = useSelector(
    (state) => state.resumeCombineReducer.resumeSelectReducer
  );
  const dispatch = useDispatch();

  const onSubmitHandler = handleSubmit(async (data) => {
    console.log(data);

    // skill stack ????????????.
    let skillStackList = [];
    for (let i = 0; i < data.skillStack.length; i++) {
      skillStackList.push({
        techDivCode: data.skillStack[i].techDivCode,
        techValue: data.skillStack[i].techValue
      });
    }

    // ?????? ?????? ????????????
    let desiredJobList = [];
    for (let i = 0; i < data.desiredJob.length; i++) {
      desiredJobList.push({
        posDivCode: data.desiredJob[i].posDivCode,
        posValue: data.desiredJob[i].posValue
      });
    }

    // ??? ???????????? 2??? ????????? ???????????? ????????? ????????? ??? ????????? ????????? ????????? ??????.
    let schoolData = [];
    for (let i = 0; i < data.schoolCount; i++) {
      let schoolExamData = {
        schoolDivision: data['schoolDivision' + (i + 1)],
        schoolName: data['schoolName' + (i + 1)],
        schoolStartDate: data['schoolStartDate' + (i + 1)],
        schoolEndDate: data['schoolEndDate' + (i + 1)],
        major: data['major' + (i + 1)],
        recordedScore: data['recordedScore' + (i + 1)],
        totalScore: data['totalScore' + (i + 1)],
        schoolStatus: data['schoolStatus' + (i + 1)]
      };
      schoolData.push(schoolExamData);
    }

    let careerData = [];
    for (let i = 0; i < data.careerCount; i++) {
      let careerSeparateData = {
        startDate: data['careerStartDate' + (i + 1)],
        endDate: data['careerEndDate' + (i + 1)],
        companyName: data['careerCompanyName' + (i + 1)],
        nameIsOpened: data['isUnopenedCompanyName' + (i + 1)] ? 'Y' : 'N',
        position: data['carrerPosition' + (i + 1)],
        status: data['carrerStatus' + (i + 1)],
        task: data['carrerActivityText' + (i + 1)],
        etc: data['carrerEtcText' + (i + 1)],
        // image test
        certificate: 'example certificate'
      };
      careerData.push(careerSeparateData);
    }

    let coreActivityData = [];
    for (let i = 0; i < data.awardsCount; i++) {
      let coreActivitySeparateData = {
        division: data['coreActivityDivision' + (i + 1)],
        startDate: data['coreActivityStartDate' + (i + 1)],
        endDate: data['coreActivityEndDate' + (i + 1)],
        institutionName: data['coreActivityInstitution' + (i + 1)],
        activityName: data['coreActivityName' + (i + 1)],
        coreActivity: data['coreActivityText' + (i + 1)]
      };
      coreActivityData.push(coreActivitySeparateData);
    }

    let externalData = [];
    for (let i = 0; i < data.externalCount; i++) {
      let externalSeparateData = {
        division: data['externalDivision' + (i + 1)],
        startDate: data['externalStartDate' + (i + 1)],
        endDate: data['externalEndDate' + (i + 1)],
        nation: data['externalCountry' + (i + 1)],
        institution: data['externalInstitution' + (i + 1)],
        content: data['externalText' + (i + 1)]
      };
      externalData.push(externalSeparateData);
    }

    let foreignData = [];
    for (let i = 0; i < data.languageCount; i++) {
      let foreignSeparateData = {
        testDivCode: data['ForeignExam' + (i + 1)],
        grade: data['ForeignGrade' + (i + 1)],
        examDate: data['ForeignExamDate' + (i + 1)]
      };
      foreignData.push(foreignSeparateData);
    }

    let trainingData = [];
    for (let i = 0; i < data.experienceCount; i++) {
      let trainingSeparateData = {
        startDate: data['TrainingStartDate' + (i + 1)],
        endDate: data['TrainingEndDate' + (i + 1)],
        institution: data['TrainingInstitution' + (i + 1)],
        course: data['TrainingName' + (i + 1)],
        content: data['TrainingText' + (i + 1)]
      };
      trainingData.push(trainingSeparateData);
    }

    let qualificationData = [];
    for (let i = 0; i < data.qualificationCount; i++) {
      let qualificationSeparateData = {
        certificateDivCode: data['QualificationDivision' + (i + 1)],
        institution: data['QualificationInstitution' + (i + 1)],
        acquisitionDate: data['QualificationDate' + (i + 1)]
      };
      qualificationData.push(qualificationSeparateData);
    }

    const body = JSON.stringify({
      memberCode: 3,
      imageCode: 999,
      title: data.title,
      name: data.name,
      gender: data.gender,
      birthday: data.birthday,
      zipCode: data.zipCode,
      address:
        data.mainAddress + '/' + data.detailAddress + '/' + data.alphaAddress,
      housePhone: data.phone,
      mobilePhone: data.mobilePhone,
      email: data.emailFront + '@' + data.emailBack,
      isOpenedPicture: data.isOpenedPhoto ? 'Y' : 'N',

      //// ????????????
      schoolInfoList: schoolData,

      //// ?????? ??????
      skillInfoList: skillStackList,

      //// ?????? ??????
      desiredJobInfoList: desiredJobList,

      //// ????????????
      careerInfoList: careerData,

      //// ???????????? ??? ????????????
      coreActivityInfoList: coreActivityData,

      //// ????????????
      externalInfoList: externalData,

      //// ????????? ??????
      foreignLanguageInfoList: foreignData,

      //// ???????????? ????????????
      trainingInfoList: trainingData,

      //// ?????? ?????? ??????
      qualificationInfoList: qualificationData
    });

    console.log(body);
    // API ??????
    CallInsertResumeAPI(body);
  });

  const skillList = useSelector(
    (state) => state.resumeCombineReducer.resumeSkillReducer
  );
  const desiredJobList = useSelector(
    (state) => state.resumeCombineReducer.resumeDesiredJobReducer
  );

  console.log(skillList);
  console.log(desiredJobList);

  React.useEffect(() => {
    dispatch(CallSkillListAPI());
    dispatch(CallDesiredJobListAPI());
  }, []);

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
      <FormContainer onSubmit={onSubmitHandler}>
        {/* ????????? ?????? */}
        <MainResume register={register} setValue={setValue} />
        {/* ???????????? */}
        <SchoolAbility
          register={register}
          setValue={setValue}
          isReadOnly={false}
        />
        {/* ?????? ?????? */}
        <AutoSelect
          keyName={'skillStack'}
          title={'?????? ??????'}
          list={skillList}
          isReadOnly={false}
          register={register}
          setValue={setValue}
        />
        {/* ?????? ?????? */}
        <AutoSelect
          keyName={'desiredJob'}
          title={'?????? ??????'}
          list={desiredJobList}
          isReadOnly={false}
          register={register}
          setValue={setValue}
        />
        {/* ???????????? */}
        {selectedList.career && (
          <CareerComponent register={register} setValue={setValue} />
        )}
        {/* ???????????? ??? ???????????? */}
        {selectedList.activity && (
          <CoreActivity register={register} setValue={setValue} />
        )}
        {/* ???????????? */}
        {selectedList.external && (
          <ExternalActivity register={register} setValue={setValue} />
        )}
        {/* ????????? ?????? */}
        {selectedList.foreign && (
          <ForeignAbility register={register} setValue={setValue} />
        )}
        {/* ???????????? ???????????? */}
        {selectedList.experience && (
          <TrainingCareer register={register} setValue={setValue} />
        )}
        {/* ?????? ?????? ?????? */}
        {selectedList.qualification && (
          <Qualification register={register} setValue={setValue} />
        )}
        <Button
          variant='contained'
          size='large'
          type='submit'
          onClick={() => {
            // navigate('/resume');
          }}
        >
          ?????? ??????
        </Button>
      </FormContainer>
    </OutletContainer>
  );
}

export default AddStepDetail;
