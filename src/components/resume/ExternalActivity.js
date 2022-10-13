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

function ExternalActivity({register, setValue, isReadOnly, resumeInfo}) {
  const [externalCount, setExternalCount] = React.useState(1);
  const [external, setExternal] = React.useState('');
  const onChangeExternalHandler = (e) => {
    setExternal(e.target.value);
  };

  React.useEffect(() => {
    if (resumeInfo) {
      setExternalCount(resumeInfo.externalInfoList.length);
    } else {
      setValue('externalCount', 1);
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

  const externalActivityHandler = () => {
    const externalResult = [];
    for (let i = 0; i < externalCount; i++) {
      externalResult.push(
        <>
          <CareerContentBar>
            <Select
              sx={{m: 1, minWidth: 120}}
              size='small'
              id='demo-select-small'
              onChange={onChangeExternalHandler}
              {...register('externalDivision' + (i + 1))}
              value={
                resumeInfo &&
                resumeInfo.externalInfoList[i] &&
                resumeInfo.externalInfoList[i].division
              }
              inputProps={{
                readOnly: isReadOnly
              }}
            >
              <MenuItem value='봉사활동'>봉사활동</MenuItem>
              <MenuItem value='어학연수'>어학연수</MenuItem>
              <MenuItem value='교환학생'>교환학생</MenuItem>
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
                        resumeInfo.externalInfoList[i] &&
                          resumeInfo.externalInfoList[i].startDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('externalStartDate' + (i + 1))}
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
                        resumeInfo.externalInfoList[i] &&
                          resumeInfo.externalInfoList[i].endDate
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('externalEndDate' + (i + 1))}
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
                  label={isReadOnly ? '' : '국가명'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo &&
                    resumeInfo.externalInfoList[i] &&
                    resumeInfo.externalInfoList[i].nation
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('externalCountry' + (i + 1))}
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
                label={isReadOnly ? '' : '기관/경험명'}
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  resumeInfo.externalInfoList[i] &&
                  resumeInfo.externalInfoList[i].institution
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('externalInstitution' + (i + 1))}
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
                  resumeInfo.externalInfoList[i] &&
                  resumeInfo.externalInfoList[i].content
                }
                readOnly={isReadOnly}
                {...register('externalText' + (i + 1))}
              ></CareerDetailContentPositionTextBox>
            </EtcDetailContentPositionContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return externalResult;
  };
  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>해외 경험</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            <ActivityDivision>구분</ActivityDivision>
            <ActivityPeriod>기간</ActivityPeriod>
            <ActivityInstitution>국가</ActivityInstitution>
            <ActivityName>기관/경험명</ActivityName>
            {!isReadOnly && <ActivityDelete>삭제</ActivityDelete>}
          </CareerMenuBar>

          {externalActivityHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setExternalCount(externalCount + 1);
              setValue('externalCount', externalCount + 1);
            }}
          >
            항목 추가
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}

export default ExternalActivity;
