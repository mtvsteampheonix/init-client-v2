import {
  CareerContentBar,
  SchoolNamePeriodContainer,
  CareerDetailContentContainer,
  CareerDetailContentPositionContainer,
  CareerDetailContentPositionText,
  CareerDetailContentTechCertificateContainer,
  SchoolCareerContainer,
  SchoolCareerAddButtonContainer,
  CareerDetailContentPositionTextBox,
  CareerDetailContentTechCertificateImageUploader,
  DeleteBoxContainer,
  ResumeTitleText,
  SchoolMainContainer,
  CareerMenuBar,
  CareerPeriod,
  CareerCorName,
  CareerPosName,
  CareerStatus,
  CareerDelete
} from '../../components/resume/MainResume';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

export default function CarrerComponent({
  register,
  setValue,
  isReadOnly,
  resumeInfo
}) {
  const [careerCount, setCareerCount] = React.useState(1);
  const [school, setSchool] = React.useState('');
  const [fileName, setFileName] = React.useState('');

  const onChangeSchoolHandler = (e) => {
    setSchool(e.target.value);
  };

  React.useEffect(() => {
    if (resumeInfo) {
      setCareerCount(resumeInfo.careerInfoList.length);
    } else {
      setValue('careerCount', 1);
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

  const careerHandler = () => {
    const careerResult = [];
    for (let i = 0; i < careerCount; i++) {
      careerResult.push(
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
                  id='careerStartDate'
                  variant='outlined'
                  size='small'
                  type='date'
                  value={
                    resumeInfo &&
                    toStringByFormatting(
                      new Date(
                        resumeInfo.careerInfoList[i]
                          ? resumeInfo.careerInfoList[i].startDate
                          : ''
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('careerStartDate' + (i + 1))}
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
                  id='careerEndDate'
                  variant='outlined'
                  size='small'
                  type='date'
                  value={
                    resumeInfo &&
                    toStringByFormatting(
                      new Date(
                        resumeInfo.careerInfoList[i]
                          ? resumeInfo.careerInfoList[i].endDate
                          : ''
                      )
                    )
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('careerEndDate' + (i + 1))}
                ></TextField>
              </Box>
            </SchoolNamePeriodContainer>
            <SchoolNamePeriodContainer>
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
                  label={isReadOnly ? '' : '?????????'}
                  variant='outlined'
                  size='small'
                  type='text'
                  value={
                    resumeInfo
                      ? resumeInfo.careerInfoList[i]
                        ? resumeInfo.careerInfoList[i].companyName
                        : ''
                      : null
                  }
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                  {...register('careerCompanyName' + (i + 1))}
                ></TextField>
              </Box>
              ????????? ?????????{' '}
              <Checkbox
                {...register('isUnopenedCompanyName' + (i + 1))}
                checked={
                  resumeInfo &&
                  resumeInfo.careerInfoList[i] &&
                  resumeInfo.careerInfoList[i].nameIsOpened === 'Y' &&
                  true
                }
              ></Checkbox>
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
                label={isReadOnly ? '' : '??????/??????'}
                variant='outlined'
                size='small'
                type='text'
                value={
                  resumeInfo &&
                  resumeInfo.careerInfoList[i] &&
                  resumeInfo.careerInfoList[i].position
                }
                inputProps={{
                  readOnly: isReadOnly
                }}
                {...register('carrerPosition' + (i + 1))}
              ></TextField>
            </Box>
            <Select
              sx={{m: 1, minWidth: 80}}
              size='small'
              id='demo-select-small'
              onChange={onChangeSchoolHandler}
              value={
                resumeInfo &&
                resumeInfo.careerInfoList[i] &&
                resumeInfo.careerInfoList[i].status
              }
              inputProps={{
                readOnly: isReadOnly
              }}
              {...register('carrerStatus' + (i + 1))}
            >
              <MenuItem value='??????'>??????</MenuItem>
              <MenuItem value='??????'>??????</MenuItem>
            </Select>
            {!isReadOnly ? (
              <DeleteBoxContainer>
                <DeleteForeverIcon
                  onClick={() => {
                    setCareerCount(careerCount - 1);
                  }}
                ></DeleteForeverIcon>
              </DeleteBoxContainer>
            ) : null}
          </CareerContentBar>
          <CareerDetailContentContainer>
            <CareerDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                ?????? ?????? ??? ??????
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox
                placeholder='??????'
                value={
                  resumeInfo &&
                  resumeInfo.careerInfoList[i] &&
                  resumeInfo.careerInfoList[i].task
                }
                readOnly={isReadOnly}
                {...register('carrerActivityText' + (i + 1))}
              ></CareerDetailContentPositionTextBox>
            </CareerDetailContentPositionContainer>
            <CareerDetailContentPositionContainer>
              <CareerDetailContentPositionText>
                ?????? ??????
              </CareerDetailContentPositionText>
              <CareerDetailContentPositionTextBox
                placeholder='??????'
                value={
                  resumeInfo &&
                  resumeInfo.careerInfoList[i] &&
                  resumeInfo.careerInfoList[i].etc
                }
                readOnly={isReadOnly}
                {...register('carrerEtcText' + (i + 1))}
              ></CareerDetailContentPositionTextBox>
            </CareerDetailContentPositionContainer>
            <CareerDetailContentTechCertificateContainer>
              ?????????????????????
              <CareerDetailContentTechCertificateImageUploader>
                <IconButton
                  color='primary'
                  aria-label='upload picture'
                  component='label'
                >
                  {fileName && <p>{fileName}</p>}
                  {!isReadOnly && (
                    <input
                      hidden
                      accept='image/*'
                      type='file'
                      onChange={(e) => {
                        setFileName(e.target.files[0].name);
                      }}
                    />
                  )}

                  {!fileName && <PhotoCamera />}
                </IconButton>
              </CareerDetailContentTechCertificateImageUploader>
            </CareerDetailContentTechCertificateContainer>
          </CareerDetailContentContainer>
        </>
      );
    }
    return careerResult;
  };

  return (
    <>
      <SchoolCareerContainer>
        <ResumeTitleText>????????????</ResumeTitleText>
        <SchoolMainContainer>
          <CareerMenuBar>
            {/* style={isReadOnly ? {gap: '116px'} : null} */}
            <CareerPeriod>??????</CareerPeriod>
            <CareerCorName>?????????</CareerCorName>
            <CareerPosName>??????/??????</CareerPosName>
            <CareerStatus>??????</CareerStatus>
            {!isReadOnly ? <CareerDelete>??????</CareerDelete> : null}
          </CareerMenuBar>
          {/* ????????? ????????? */}
          {careerHandler()}
        </SchoolMainContainer>
      </SchoolCareerContainer>
      {!isReadOnly && (
        <SchoolCareerAddButtonContainer>
          <Button
            variant='outlined'
            onClick={() => {
              setCareerCount(careerCount + 1);
              setValue('schoolCount', careerCount + 1);
            }}
          >
            ?????? ??????
          </Button>
        </SchoolCareerAddButtonContainer>
      )}
    </>
  );
}
