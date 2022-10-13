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
import {CallQualificationListAPI} from '../../apis/resume/ResumeAPICalls';

function Qualification({register, setValue, isReadOnly, resumeInfo}) {
  const [qualificationCount, setQualificationCount] = React.useState(1);
  const [division, setDivision] = React.useState('');

  const onChangeDivisionHandler = (e) => {
    setDivision(e.target.value);
  };

  const qualificationList = useSelector(
    (state) => state.resumeCombineReducer.resumeQualificationReducer
  );
  const dispatch = useDispatch();

  const nationalAdmission = qualificationList
    .filter((certificate) => certificate.certificateType === '국가 공인')
    .map((test) => (
      <MenuItem value={test.certificateDivCode}>
        {test.certificateName}
      </MenuItem>
    ));
  const privateAdmission = qualificationList
    .filter((certificate) => certificate.certificateType === '민간')
    .map((test) => (
      <MenuItem value={test.certificateDivCode}>
        {test.certificateName}
      </MenuItem>
    ));

  React.useEffect(() => {
    if (resumeInfo) {
      setQualificationCount(resumeInfo.qualificationInfoList.length);
    } else {
      setValue('qualificationCount', 1);
    }

    dispatch(CallQualificationListAPI());
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

  const qualificationHandler = () => {
    const qualificationResult = [];
    for (let i = 0; i < qualificationCount; i++) {
      qualificationResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 112}}
              size='small'
              id='division'
              onChange={onChangeDivisionHandler}
              value={
                resumeInfo
                  ? resumeInfo.qualificationInfoList[i]
                    ? resumeInfo.qualificationInfoList[i].certificateDivCode <
                      100
                      ? '국가 공인'
                      : '민간'
                    : division
                  : division
              }
              inputProps={{
                readOnly: isReadOnly
              }}
            >
              <MenuItem value='국가 공인'>국가 공인</MenuItem>
              <MenuItem value='민간'>민간</MenuItem>
            </Select>
            <SchoolNamePeriodContainer>
              <Select
                sx={{m: 1, minWidth: 289}}
                size='small'
                id='qualification'
                value={
                  resumeInfo &&
                  resumeInfo.qualificationInfoList[i] &&
                  resumeInfo.qualificationInfoList[i].certificateDivCode
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('QualificationDivision' + (i + 1))}
              >
                {division == '국가 공인' ? nationalAdmission : null}
                {division == '민간' ? privateAdmission : null}
                {isReadOnly ? nationalAdmission : null}
                {isReadOnly ? privateAdmission : null}
              </Select>
            </SchoolNamePeriodContainer>
            <SchoolNamePeriodContainer>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: 156}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  label={!isReadOnly ? '' : '발급 기관'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo &&
                    resumeInfo.qualificationInfoList[i] &&
                    resumeInfo.qualificationInfoList[i].institution
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('QualificationInstitution' + (i + 1))}
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: 231}
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
                      resumeInfo.qualificationInfoList[i] &&
                        resumeInfo.qualificationInfoList[i].acquisitionDate
                    )
                  )
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('QualificationDate' + (i + 1))}
              ></TextField>
            </Box>
            {!isReadOnly && (
              <DeleteBoxContainer>
                <DeleteForeverIcon
                  onClick={() => {
                    setQualificationCount(qualificationCount - 1);
                  }}
                ></DeleteForeverIcon>
              </DeleteBoxContainer>
            )}
          </CareerContentBar>
        </>
      );
    }
    return qualificationResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>보유 자격 면허</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>자격 면허</ActivityPeriod>
            <ActivityInstitution>발급 기관</ActivityInstitution>
            <ActivityName>취득일</ActivityName>
            {!isReadOnly && <ActivityDelete>삭제</ActivityDelete>}
          </CareerMenuBar>

          {qualificationHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setQualificationCount(qualificationCount + 1);
              setValue('qualificationCount', qualificationCount + 1);
            }}
          >
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default Qualification;
