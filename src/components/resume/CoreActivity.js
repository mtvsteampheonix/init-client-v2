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
import Button from '@mui/material/Button';
import * as React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function CoreActivity({register, setValue, isReadOnly, resumeInfo}) {
  const [awardsCount, setAwardsCount] = React.useState(1);
  const [awards, setAwards] = React.useState('');
  const [externalCount, setExternalCount] = React.useState(1);

  const onChangeAwardHandler = (e) => {
    setAwards(e.target.value);
  };

  React.useEffect(() => {
    if (resumeInfo) {
      setAwardsCount(resumeInfo.coreActivityInfoList.length);
    } else {
      setValue('awardsCount', 1);
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

  const coreActivityHandler = () => {
    const activityResult = [];
    for (let i = 0; i < awardsCount; i++) {
      activityResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 120}}
              size='small'
              id='demo-select-small'
              onChange={onChangeAwardHandler}
              value={
                resumeInfo &&
                resumeInfo.coreActivityInfoList[i] &&
                resumeInfo.coreActivityInfoList[i].division
              }
              inputProps={{
                readOnly: isReadOnly
              }}
              {...register('coreActivityDivision' + (i + 1))}
            >
              <MenuItem value='장관상'>장관상</MenuItem>
              <MenuItem value='국무총리상'>국무총리상</MenuItem>
              <MenuItem value='대통령상'>대통령상</MenuItem>
            </Select>
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
                        resumeInfo.coreActivityInfoList[i] &&
                          resumeInfo.coreActivityInfoList[i].startDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('coreActivityStartDate' + (i + 1))}
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
                        resumeInfo.coreActivityInfoList[i] &&
                          resumeInfo.coreActivityInfoList[i].endDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('coreActivityEndDate' + (i + 1))}
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
                  label={isReadOnly ? '' : '기관명'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo &&
                    resumeInfo.coreActivityInfoList[i] &&
                    resumeInfo.coreActivityInfoList[i].institutionName
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('coreActivityInstitution' + (i + 1))}
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
                label={isReadOnly ? '' : '수상/활동명'}
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  resumeInfo.coreActivityInfoList[i] &&
                  resumeInfo.coreActivityInfoList[i].activityName
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('coreActivityName' + (i + 1))}
              ></TextField>
            </Box>
            {!isReadOnly && (
              <DeleteBoxContainer>
                <DeleteForeverIcon
                  onClick={() => {
                    setExternalCount(externalCount - 1);
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
                  resumeInfo.coreActivityInfoList[i] &&
                  resumeInfo.coreActivityInfoList[i].coreActivity
                }
                readOnly={isReadOnly}
                {...register('coreActivityText' + (i + 1))}
              ></CareerDetailContentPositionTextBox>
            </EtcDetailContentPositionContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return activityResult;
  };

  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>주요활동 및 수상경력</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>기간</ActivityPeriod>
            <ActivityInstitution>기관명</ActivityInstitution>
            <ActivityName>수상/활동명</ActivityName>
            {!isReadOnly && <ActivityDelete>삭제</ActivityDelete>}
          </CareerMenuBar>
          {/* 커리어 컨텐츠 */}
          {coreActivityHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setAwardsCount(awardsCount + 1);
              setValue('awardsCount', awardsCount + 1);
            }}
          >
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default CoreActivity;
