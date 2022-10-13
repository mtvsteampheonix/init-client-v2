import {
  CareerContentBar,
  SchoolNamePeriodContainer,
  CareerDetailContentContainer,
  CareerDetailContentPositionText,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  CareerDetailContentPositionTextBox,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  CareerMenuBar,
  ActivityPeriod,
  ActivityInstitution,
  ActivityName,
  ActivityDelete,
  EtcDetailContentPositionContainer
} from '../../components/resume/MainResume';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';

function TrainingCareer({register, setValue, isReadOnly, resumeInfo}) {
  const [experienceCount, setExperienceCount] = React.useState(1);

  React.useEffect(() => {
    if (resumeInfo) {
      setExperienceCount(resumeInfo.trainingInfoList.length);
    } else {
      setValue('experienceCount', 1);
    }
  }, []);

  function toStringByFormatting(source, delimiter = '-') {
    const year = source.getFullYear();
    const month = leftPad(source.getMonth() + 1);
    const day = leftPad(source.getDate());

    return [year, month, day].join(delimiter);
  }

  function leftPad(value) {
    if (value >= 10) {
      return value;
    }

    return `0${value}`;
  }
  const experienceHandler = () => {
    const experienceResult = [];
    for (let i = 0; i < experienceCount; i++) {
      experienceResult.push(
        <>
          <CareerContentBar>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 0, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  type='date'
                  value={
                    resumeInfo &&
                    toStringByFormatting(
                      new Date(
                        resumeInfo.trainingInfoList[i] &&
                          resumeInfo.trainingInfoList[i].startDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('TrainingStartDate' + (i + 1))}
                ></TextField>
              </Box>
              -
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 0, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  type='date'
                  value={
                    resumeInfo &&
                    toStringByFormatting(
                      new Date(
                        resumeInfo.trainingInfoList[i] &&
                          resumeInfo.trainingInfoList[i].endDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('TrainingEndDate' + (i + 1))}
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '18ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label={isReadOnly ? '' : '훈련 기관'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo &&
                    resumeInfo.trainingInfoList[i] &&
                    resumeInfo.trainingInfoList[i].institution
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('TrainingInstitution' + (i + 1))}
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '25ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                label={isReadOnly ? '' : '훈련 과정명'}
                label-align='center'
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  resumeInfo.trainingInfoList[i] &&
                  resumeInfo.trainingInfoList[i].course
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('TrainingName' + (i + 1))}
              ></TextField>
            </Box>
            {!isReadOnly && (
              <DeleteBoxContainer>
                <DeleteForeverIcon
                  onClick={() => {
                    setExperienceCount(experienceCount - 1);
                  }}
                ></DeleteForeverIcon>
              </DeleteBoxContainer>
            )}
          </CareerContentBar>
          <CareerDetailContentContainer>
            <EtcDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                주요 활동
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox
                placeholder='입력'
                value={
                  resumeInfo &&
                  resumeInfo.trainingInfoList[i] &&
                  resumeInfo.trainingInfoList[i].content
                }
                readOnly={isReadOnly}
                {...register('TrainingText' + (i + 1))}
              ></CareerDetailContentPositionTextBox>
            </EtcDetailContentPositionContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return experienceResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>직업훈련 이수이력</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityPeriod>기간</ActivityPeriod>
            <ActivityInstitution>훈련 기관</ActivityInstitution>
            <ActivityName>훈련 과정</ActivityName>
            {!isReadOnly && <ActivityDelete>삭제</ActivityDelete>}
          </CareerMenuBar>
          {experienceHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setExperienceCount(experienceCount + 1);
              setValue('experienceCount', experienceCount + 1);
            }}
          >
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default TrainingCareer;
