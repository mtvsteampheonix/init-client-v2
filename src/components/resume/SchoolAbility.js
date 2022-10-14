import {
  SchoolNamePeriodContainer,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  SchoolContentBar,
  SchoolMenuBar,
  SchoolMenuBarName,
  SchoolMenuBarPeriod,
  SchoolMenuBarMajor,
  SchoolMenuBarScore,
  SchoolMenuBarStatus,
  SchoolMenuBarDelete
} from '../../components/resume/MainResume';
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import {InputSharp} from '@mui/icons-material';

function SchoolAbility({register, setValue, isReadOnly, resumeInfo}) {
  const [schoolCount, setSchoolCount] = React.useState(1);
  const [schoolData, setSchoolData] = React.useState({
    schoolDivision: [],
    schoolName: []
  });
  const {schoolDivision, schoolName} = schoolData;

  const onChangeNameHandler = (e) => {
    setSchoolData({
      ...schoolData,
      schoolName: [e.target.value]
    });
  };

  const onChangeHandler = (e) => {
    console.log('value');
    console.log(e.target.value);
    setSchoolData({
      ...schoolData,
      [e.target.name]: [e.target.value]
    });
    setValue(e.target.name, e.target.value);
  };

  React.useEffect(() => {
    const schoolDivisionArray = [];
    const schoolNameArray = [];
    if (resumeInfo) {
      for (let i = 0; i < resumeInfo.schoolInfoList.length; i++) {
        schoolDivisionArray.push(resumeInfo.schoolInfoList[i].schoolDivision);
        schoolNameArray.push(resumeInfo.schoolInfoList[i].schoolName);
      }
    }

    // console.log(schoolDivisionArray);
    setSchoolData({
      ...schoolData,
      schoolDivision: schoolDivisionArray,
      schoolName: schoolNameArray
    });

    if (resumeInfo) {
      setSchoolCount(resumeInfo.schoolInfoList.length);
    } else {
      setValue('schoolCount', 1);
    }
  }, [resumeInfo]);

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

  const schoolOnClilckHandler = (e) => {
    setSchoolCount(schoolCount + 1);
    setValue('schoolCount', schoolCount + 1);
  };

  const schoolContentHandler = () => {
    const result = [];
    for (let i = 0; i < schoolCount; i++) {
      console.log(schoolName);
      result.push(
        <SchoolContentBar>
          <SchoolNamePeriodContainer>
            <Select
              sx={{m: 1, minWidth: 80}}
              size='small'
              id={i}
              // defaultValue='중학교'
              // onChange={onChangeHandler}
              defaultValue={
                resumeInfo &&
                resumeInfo.schoolInfoList[i] &&
                resumeInfo.schoolInfoList[i].schoolDivision
              }
              name={'schoolDivision'}
              readOnly={isReadOnly}
              {...register('schoolDivision' + (i + 1))}
            >
              <MenuItem value='중학교'>중학교</MenuItem>
              <MenuItem value='고등학교'>고등학교</MenuItem>
              <MenuItem value='2년제 대학'>2년제 대학</MenuItem>
              <MenuItem value='4년제 대학'>4년제 대학</MenuItem>
            </Select>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '15ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                label='학교명'
                variant='outlined'
                size='small'
                type='text'
                // onChange={onChangeNameHandler}
                defaultValue={
                  resumeInfo &&
                  resumeInfo.schoolInfoList[i] &&
                  resumeInfo.schoolInfoList[i].schoolName
                }
                name={'schoolName'}
                inputProps={{readOnly: isReadOnly}}
                {...register('schoolName' + (i + 1))}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
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
                      resumeInfo.schoolInfoList[i]
                        ? resumeInfo.schoolInfoList[i].schoolStartDate
                        : ''
                    )
                  )
                }
                readOnly={isReadOnly}
                {...register('schoolStartDate' + (i + 1))}
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
                      resumeInfo.schoolInfoList[i]
                        ? resumeInfo.schoolInfoList[i].schoolEndDate
                        : ''
                    )
                  )
                }
                readOnly={isReadOnly}
                {...register('schoolEndDate' + (i + 1))}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
          <Box
            component='form'
            sx={{
              '& > :not(style)': {m: 1, width: '15ch'}
            }}
            noValidate
            autoComplete='off'
          >
            <TextField
              id='outlined-basic'
              label='전공학과'
              variant='outlined'
              size='small'
              type='text'
              value={
                resumeInfo &&
                (resumeInfo.schoolInfoList[i]
                  ? resumeInfo.schoolInfoList[i].major
                  : '')
              }
              readOnly={isReadOnly}
              {...register('major' + (i + 1))}
            ></TextField>
          </Box>
          <SchoolNamePeriodContainer>
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '7ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  (resumeInfo.schoolInfoList[i]
                    ? resumeInfo.schoolInfoList[i].recordedScore
                    : '')
                }
                readOnly={isReadOnly}
                {...register('recordedScore' + (i + 1))}
              ></TextField>
            </Box>
            /
            <Box
              component='form'
              sx={{
                '& > :not(style)': {m: 1, width: '7ch'}
              }}
              noValidate
              autoComplete='off'
            >
              <TextField
                id='outlined-basic'
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  (resumeInfo.schoolInfoList[i]
                    ? resumeInfo.schoolInfoList[i].totalScore
                    : '')
                }
                readOnly={isReadOnly}
                {...register('totalScore' + (i + 1))}
              ></TextField>
            </Box>
          </SchoolNamePeriodContainer>
          <Select
            sx={{m: 1, minWidth: 80}}
            size='small'
            id='demo-select-small'
            // onChange={onChangeStatusHandler}
            value={
              resumeInfo &&
              (resumeInfo.schoolInfoList[i]
                ? resumeInfo.schoolInfoList[i].schoolStatus
                : '')
            }
            readOnly={isReadOnly}
            {...register('schoolStatus' + (i + 1))}
          >
            <MenuItem value='재학'>재학</MenuItem>
            <MenuItem value='수료'>수료</MenuItem>
            <MenuItem value='졸업'>졸업</MenuItem>
          </Select>
          {!isReadOnly && (
            <DeleteBoxContainer>
              <DeleteForeverIcon
                onClick={() => {
                  setSchoolCount(schoolCount - 1);
                }}
              ></DeleteForeverIcon>
            </DeleteBoxContainer>
          )}
        </SchoolContentBar>
      );
    }
    return result;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>학력사항</ResumeTitleText>
        <SchoolMainContainer>
          <SchoolMenuBar>
            <SchoolMenuBarName>학교명</SchoolMenuBarName>
            <SchoolMenuBarPeriod>기간</SchoolMenuBarPeriod>
            <SchoolMenuBarMajor>전공학과</SchoolMenuBarMajor>
            <SchoolMenuBarScore>학점</SchoolMenuBarScore>
            <SchoolMenuBarStatus>상태</SchoolMenuBarStatus>
            {!isReadOnly && <SchoolMenuBarDelete>삭제</SchoolMenuBarDelete>}
          </SchoolMenuBar>
          {schoolContentHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button variant='outlined' onClick={schoolOnClilckHandler}>
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default SchoolAbility;
