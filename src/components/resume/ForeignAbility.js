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
  ActivityDivision,
  ActivityPeriod,
  ActivityInstitution,
  ActivityName,
  ActivityDelete,
  EtcDetailContentPositionContainer
} from '../../components/resume/MainResume';
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import {useSelector, useDispatch} from 'react-redux';
import {CallForeignLanguageTestAPI} from '../../apis/resume/ResumeAPICalls';

function ForeignAbility({register, setValue, isReadOnly, resumeInfo}) {
  const [languageCount, setLanguageCount] = React.useState(1);
  const [division, setDivision] = React.useState('공인');

  const onChangeDivisionHandler = (e) => {
    setDivision(e.target.value);
  };

  const privateTestList = useSelector(
    (state) => state.resumeCombineReducer.resumeForeignLanguageReducer
  );
  const dispatch = useDispatch();

  // const nationalAdmission = nationalTestList.map((test) => (
  //   <MenuItem value={test.value}>{test.name}</MenuItem>
  // ));
  const privateAdmission = privateTestList.map((test) => (
    <MenuItem value={test.testCode}>{test.testTitle}</MenuItem>
  ));

  React.useEffect(() => {
    if (resumeInfo) {
      setLanguageCount(resumeInfo.foreignLanguageAndTestNameInfoList.length);
    } else {
      setValue('languageCount', 1);
    }

    dispatch(CallForeignLanguageTestAPI());
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

  const foreignLanguageActivityHandler = () => {
    const languageResult = [];
    for (let i = 0; i < languageCount; i++) {
      languageResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 115}}
              size='small'
              id='division'
              onChange={onChangeDivisionHandler}
              value={
                resumeInfo
                  ? resumeInfo.foreignLanguageAndTestNameInfoList[i]
                    ? '공인'
                    : division
                  : division
              }
              inputProps={{
                readOnly: isReadOnly
              }}
            >
              {/* <MenuItem value='국가 공인'>국가 공인</MenuItem> */}
              <MenuItem value='공인'>공인</MenuItem>
            </Select>
            <Select
              sx={{m: 1, minWidth: 300}}
              size='small'
              id='demo-select-small'
              value={
                resumeInfo &&
                resumeInfo.foreignLanguageAndTestNameInfoList[i] &&
                resumeInfo.foreignLanguageAndTestNameInfoList[i].testDivCode
              }
              inputProps={{
                readOnly: isReadOnly
              }}
              {...register('ForeignExam' + (i + 1))}
            >
              {/* {division == '국가 공인' ? nationalAdmission : null} */}
              {division == '공인' ? privateAdmission : null}
            </Select>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '17ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label={isReadOnly ? '' : '점수(등급)'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo &&
                    resumeInfo.foreignLanguageAndTestNameInfoList[i] &&
                    resumeInfo.foreignLanguageAndTestNameInfoList[i].grade
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('ForeignGrade' + (i + 1))}
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
                variant='outlined'
                size='small'
                type='date'
                value={
                  resumeInfo &&
                  toStringByFormatting(
                    new Date(
                      resumeInfo.foreignLanguageAndTestNameInfoList[i] &&
                        resumeInfo.foreignLanguageAndTestNameInfoList[i]
                          .examDate
                    )
                  )
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('ForeignExamDate' + (i + 1))}
              ></TextField>
            </Box>
            {!isReadOnly && (
              <DeleteBoxContainer>
                <DeleteForeverIcon
                  onClick={() => {
                    setLanguageCount(languageCount - 1);
                  }}
                ></DeleteForeverIcon>
              </DeleteBoxContainer>
            )}
          </CareerContentBar>
        </>
      );
    }
    return languageResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>외국어 능력</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>공인시험</ActivityPeriod>
            <ActivityInstitution>점수(등급)</ActivityInstitution>
            <ActivityName>응시일</ActivityName>
            {!isReadOnly && <ActivityDelete>삭제</ActivityDelete>}
          </CareerMenuBar>

          {foreignLanguageActivityHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setLanguageCount(languageCount + 1);
              setValue('languageCount', languageCount + 1);
            }}
          >
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default ForeignAbility;
