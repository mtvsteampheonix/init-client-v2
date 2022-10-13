import styled from 'styled-components';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import DaumPostcode from 'react-daum-postcode';
import Modal from '@mui/material/Modal';
import {useDispatch} from 'react-redux';
import {RESUME_MAIN_FORM} from '../../modules/resume/resumeFormModule';
import {useEffect} from 'react';

/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////

export const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

export const ResumeTitleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;

  border-bottom: 1px solid black;
`;

export const ResumeTitleText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
`;

export const ResumeTitleTextBox = styled.input`
  width: 100%;
  max-width: 1185px;
  height: 100px;

  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;

  background: #ffffff;
  border: 5px solid #000000;
`;

export const ResumeText = styled.div`
  width: 100%;
  max-width: 285px;
  height: 77px;

  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 77px;
  text-align: center;

  color: #000000;
`;

export const PersonalDetailContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  background: #ffffff;
  margin-top: 30px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;

  border-width: 3px 0px 3px 0px;
  border-style: solid;
  border-color: #000000;
  margin-bottom: 30px;
`;

export const PersonalDetailImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 39px 45px;
  gap: 30px;

  max-width: 347px;

  background: #ffffff;
  border-width: 0px 1px 0px 0px;
  border-style: solid;
  border-color: #000000;
`;

export const PersonalDetailImageFrame = styled.img`
  width: 257px;
  height: 342px;

  background: #f0f0f0;
`;

export const PersonalDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;

  width: 853px;
  max-width: 853px;

  background: #ffffff;
`;

export const PersonalDetailContentTextBox = styled.div`
  width: 100%;
  height: 100px;

  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const PersonalDetailContentTextBoxLast = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const PersonalDetailContentTextCard = styled.div`
  height: 47px;
  // width: 175px;
  // max-width: 175px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const PersonalDetailContentTextCardLast = styled.div`
  height: 47px;
  // width: 175px;
  // max-width: 175px;
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const PersonalDetailContentTextCardText = styled.div`
  height: 47px;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 148.02%;
  display: flex;
  flex-direction: row;
`;

export const OrangedColor = styled.div`
  color: #fd4f00;
`;

export const PersonalDetailContentTextBox2 = styled.div`
  width: 100%;
  height: 200px;

  border-bottom: 1px solid #000000;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const AddressText = styled.div`
  width: 100px;
  height: 47px;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 148.02%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const AddressContentContainer = styled.div`
  width: 700px;
  height: 147px;
`;

export const ImageIsOpenCheckBoxContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageIsOpenCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 29px;
  margin-bottom: 40px;
`;

export const ImageIsOpenCheckBoxText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`;

export const SchoolCareerContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 30px;
  margin-top: 30px;

  border-bottom: 1px solid black;
`;

export const SchoolMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  // border-width: 2px 0px;
  // border-style: solid;
  // border-color: #000000;
`;

export const SchoolMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
  max-width: 1200px;
  height: 61px;

  border-bottom: 2px solid #000000;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const CareerMenuBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  width: 100%;
  max-width: 1200px;
  height: 61px;

  border-bottom: 2px solid #000000;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
`;

export const CareerPeriod = styled.div`
  width: 300px;
  height: 29px;
  text-align: center;
`;

export const ActivityDivision = styled.div`
  width: 128px;
  height: 29px;
  text-align: center;
`;

export const ActivityPeriod = styled.div`
  width: 305px;
  height: 29px;
  text-align: center;
`;

export const ActivityInstitution = styled.div`
  width: 171px;
  height: 29px;
  text-align: center;
`;

export const ActivityName = styled.div`
  width: 231px;
  height: 29px;
  text-align: center;
`;

export const ActivityDelete = styled.div`
  width: 50px;
  height: 29px;
  text-align: center;
`;

export const CareerCorName = styled.div`
  width: 290px;
  height: 29px;
  text-align: center;
`;

export const CareerPosName = styled.div`
  width: 145px;
  height: 29px;
  text-align: center;
`;

export const CareerStatus = styled.div`
  width: 88px;
  height: 29px;
  text-align: center;
`;

export const CareerDelete = styled.div`
  width: 70px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarName = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 241px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarPeriod = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 300px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarMajor = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 145px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarScore = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 158px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarStatus = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 100px;
  height: 29px;
  text-align: center;
`;

export const SchoolMenuBarDelete = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  width: 50px;
  height: 29px;
  text-align: center;
`;

export const SchoolContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;

  width: 100%;
  max-width: 1200px;
  height: 62px;

  border-bottom: 1px solid #000000;
`;

export const CareerContentBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 70px;

  width: 100%;
  max-width: 1200px;
  height: 62px;

  border-bottom: 1px solid #000000;
`;

export const SchoolNamePeriodContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DeleteBoxContainer = styled.div`
  width: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SchoolCareerAddButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

export const CareerDetailContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0px;

  width: 100%;
  height: fit-content;
  border-bottom: 1px solid black;
`;

export const CareerDetailContentPositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 16px;

  border-bottom: 1px solid black;

  width: 1082px;
  height: 176px;
`;

export const EtcDetailContentPositionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  gap: 16px;

  // border-bottom: 1px solid black;

  width: 1082px;
  height: 176px;
`;

export const CareerDetailContentPositionText = styled.div`
  width: 150px;
  height: 19px;

  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;

  color: #000000;
`;

export const CareerDetailContentPositionTextBox = styled.textarea`
  width: 900px;
  height: 160px;

  background: #f0f0f0;
  border-radius: 5px;

  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
`;

export const CareerDetailContentTechCertificateContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  max-width: 1170px;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 40px;
`;

export const CareerDetailContentTechCertificateImageUploader = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  border: 5px dashed #dedede;
  height: 156px;
  width: 100%;
  max-width: 1150px;
  gap: 10px;
`;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function MainResume({
  register,
  setValue,
  variable,
  isReadOnly,
  resumeInfo,
  isUpdate
}) {
  const [imgSrc, setImgSrc] = React.useState('');
  const [postCode, setPostCode] = React.useState(false);

  const [mainInputs, setMainInputs] = React.useState({
    title: '',
    name: '',
    gender: '',
    birthday: '',
    zipCode: '',
    mainAddress: '',
    detailAddress: '',
    alphaAddress: '',
    phone: '',
    mobilePhone: '',
    emailFront: '',
    emailBack: '',
    isOpenedPhoto: false
  });

  const {
    title,
    name,
    gender,
    birthday,
    zipCode,
    mainAddress,
    detailAddress,
    alphaAddress,
    phone,
    mobilePhone,
    emailFront,
    emailBack,
    isOpenedPhoto
  } = mainInputs;

  console.log(mainInputs);

  const onChangeHandler = (e) => {
    console.log(e.target.name);
    setMainInputs({
      ...mainInputs,
      [e.target.name]: e.target.value
    });
    setValue(e.target.name, e.target.value);
  };

  // const {register, handleSubmit} = useForm();
  const dispatch = useDispatch();

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();

    reader.readAsDataURL(fileBlob);
    return new Promise((resolve, reject) => {
      reader.onload = () => {
        setImgSrc(reader.result);
        resolve();
      };
    });
  };

  const onCompleteHandler = (data) => {
    setMainInputs({
      ...mainInputs,
      ['zipCode']: data.zonecode,
      ['mainAddress']: data.address
    });
    setValue('zipCode', data.zonecode);
    setValue('mainAddress', data.address);
    // document.getElementById('address2').focus();

    console.log(`
                주소: ${data.address},
                우편번호: ${data.zonecode}
            `);
    setPostCode(false);
  };

  const onToggleModal = (e) => {
    setPostCode(!postCode);
  };

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

  if (!variable) {
    variable = {};
  }

  useEffect(() => {
    setImgSrc(variable.imgSrc);
    setMainInputs({
      ...mainInputs,
      title: resumeInfo ? resumeInfo.title : '',
      name: resumeInfo ? resumeInfo.name : '',
      gender: resumeInfo ? resumeInfo.gender : '',
      birthday: resumeInfo
        ? toStringByFormatting(new Date(resumeInfo.birthday))
        : '',
      zipCode: resumeInfo ? resumeInfo.zipCode : '',
      mainAddress: resumeInfo ? resumeInfo.address.split('/')[0] : '',
      detailAddress: resumeInfo ? resumeInfo.address.split('/')[1] : '',
      alphaAddress: resumeInfo ? resumeInfo.address.split('/')[2] : '',
      phone: resumeInfo ? resumeInfo.housePhone : '',
      mobilePhone: resumeInfo ? resumeInfo.mobilePhone : '',
      emailFront: resumeInfo ? resumeInfo.email.split('@')[0] : '',
      emailBack: resumeInfo ? resumeInfo.email.split('@')[1] : '',
      isOpenedPhoto:
        resumeInfo && resumeInfo.isOpenedPicture === 'Y' ? true : false
    });
    setValue('title', title);
    setValue('name', name);
    setValue('gender', gender);
    setValue('birthday', birthday);
    setValue('zipCode', zipCode);
    setValue('mainAddress', mainAddress);
    setValue('detailAddress', detailAddress);
    setValue('alphaAddress', alphaAddress);
    setValue('phone', phone);
    setValue('mobilePhone', mobilePhone);
    setValue('emailFront', emailFront);
    setValue('emailBack', emailBack);
    setValue('isOpenedPhoto', isOpenedPhoto);
  }, [resumeInfo]);

  return (
    <>
      <ResumeTitleContainer>
        <ResumeTitleText>이력서 제목</ResumeTitleText>
        <ResumeTitleTextBox
          name='title'
          style={{textAlign: 'center'}}
          // {...register('title')}
          onChange={onChangeHandler}
          value={title}
          readOnly={isReadOnly}
        ></ResumeTitleTextBox>
      </ResumeTitleContainer>
      <ResumeText>이 력 서</ResumeText>
      <PersonalDetailContainer>
        <PersonalDetailImageContainer>
          {imgSrc ? (
            <PersonalDetailImageFrame
              // src = {resumeInfo ? (resumeInfo.isOpenedPicture === 'Y' ? resumeInfo.imageCode : null) : imgSrc }
              // alt={resumeInfo ? (resumeInfo.isOpenedPicture === 'Y' ? '비공개 이미지입니다.' : 'preview') : 'preview'}
              src={resumeInfo ? resumeInfo.imageCode : imgSrc}
              alt='photo'
            ></PersonalDetailImageFrame>
          ) : (
            <PersonalDetailImageFrame></PersonalDetailImageFrame>
          )}
          {!isReadOnly && (
            <Button variant='outlined' component='label'>
              사진 첨부
              <input
                hidden
                accept='image/*'
                multiple
                type='file'
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                }}
                {...register('fileImg')}
              />
            </Button>
          )}
        </PersonalDetailImageContainer>
        <PersonalDetailContentContainer>
          {/* 이름, 성별, 생년월일 */}
          <PersonalDetailContentTextBox>
            {/* 이름 */}
            <PersonalDetailContentTextCard>
              <PersonalDetailContentTextCardText>
                이름<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '15ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='name'
                  label={!isReadOnly ? '이름' : ''}
                  variant='outlined'
                  size='small'
                  placeholder='입력'
                  {...register('name')}
                  name='name'
                  onChange={onChangeHandler}
                  value={name}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
            </PersonalDetailContentTextCard>
            {/* 성별 */}
            <PersonalDetailContentTextCard>
              <PersonalDetailContentTextCardText>
                성별<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>

              <FormControl sx={{m: 1, minWidth: 80}} size='small'>
                <InputLabel id='gender'>선택</InputLabel>
                <Select
                  labelId={isReadOnly ? '' : 'gender'}
                  id='demo-select-small'
                  label='선택'
                  name='gender'
                  value={gender}
                  onChange={onChangeHandler}
                  // {...register('gender')}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                >
                  <MenuItem value={'M'}>남</MenuItem>
                  <MenuItem value={'W'}>여</MenuItem>
                </Select>
              </FormControl>
            </PersonalDetailContentTextCard>

            {/* 생년월일 */}
            <PersonalDetailContentTextCard>
              <PersonalDetailContentTextCardText>
                생년월일<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '20ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='outlined-basic'
                  variant='outlined'
                  size='small'
                  placeholder='입력'
                  type='date'
                  name='birthday'
                  onChange={onChangeHandler}
                  value={birthday}
                  // {...register('birthday')}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
            </PersonalDetailContentTextCard>
          </PersonalDetailContentTextBox>

          {/* 주소 */}
          <PersonalDetailContentTextBox2>
            <AddressText>
              주소<OrangedColor>*</OrangedColor>
            </AddressText>
            <AddressContentContainer>
              <PersonalDetailContentTextCard>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '20ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='addressZipCode'
                    label='우편번호'
                    variant='outlined'
                    size='small'
                    value={zipCode}
                    name='zipCode'
                    onChange={onChangeHandler}
                    // {...register('zipCode')}
                    inputProps={{
                      readOnly: isReadOnly
                    }}
                  ></TextField>
                </Box>
                {isReadOnly ? null : (
                  <Button variant='outlined' onClick={onToggleModal}>
                    우편번호 찾기
                  </Button>
                )}

                {postCode && (
                  <Modal
                    open={postCode}
                    onClose={onToggleModal}
                    aria-labelledby='modal-modal-title'
                    aria-describedby='modal-modal-description'
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600,
                        bgcolor: 'background.paper',
                        border: '2px solid #000',
                        boxShadow: 24,
                        p: 4
                      }}
                    >
                      <DaumPostcode
                        onComplete={onCompleteHandler} // 값을 선택할 경우 실행되는 이벤트
                        autoClose={true} // 값을 선택할 경우 사용되는 DOM을 제거하여 자동 닫힘 설정
                        // defaultQuery='판교역로 235' // 팝업을 열때 기본적으로 입력되는 검색어
                        defaultQuery='창업로 17'
                      />
                    </Box>
                  </Modal>
                )}
              </PersonalDetailContentTextCard>
              <PersonalDetailContentTextCard>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '60ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='address1'
                    label='주소'
                    variant='outlined'
                    size='small'
                    value={mainAddress}
                    name='mainAddress'
                    onChange={onChangeHandler}
                    // {...register('mainAddress')}
                    inputProps={{
                      readOnly: isReadOnly
                    }}
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>
              <PersonalDetailContentTextCard>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '40ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='address2'
                    label='상세주소'
                    variant='outlined'
                    size='small'
                    value={detailAddress}
                    name='detailAddress'
                    onChange={onChangeHandler}
                    // {...register('detailAddress')}
                    // value={resumeInfo ? resumeInfo.address.split('/')[1] : null}
                    inputProps={{
                      readOnly: isReadOnly
                    }}
                  ></TextField>
                </Box>
                <Box
                  component='form'
                  sx={{
                    '& > :not(style)': {m: 1, width: '35ch'}
                  }}
                  noValidate
                  autoComplete='off'
                >
                  <TextField
                    id='outlined-basic'
                    label='세부항목'
                    variant='outlined'
                    size='small'
                    value={alphaAddress}
                    name='alphaAddress'
                    onChange={onChangeHandler}
                    // {...register('alphaAddress')}
                    // value={resumeInfo ? resumeInfo.address.split('/')[2] : null}
                    inputProps={{
                      readOnly: isReadOnly
                    }}
                  ></TextField>
                </Box>
              </PersonalDetailContentTextCard>
            </AddressContentContainer>
          </PersonalDetailContentTextBox2>

          {/* 집 전화, 휴대전화 */}
          <PersonalDetailContentTextBox>
            {/* 집 전화 */}
            <PersonalDetailContentTextCard>
              <PersonalDetailContentTextCardText>
                집 전화<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '27ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='phone'
                  label='집 전화'
                  variant='outlined'
                  size='small'
                  placeholder='입력'
                  value={phone}
                  name='phone'
                  onChange={onChangeHandler}
                  // {...register('phone')}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
            </PersonalDetailContentTextCard>

            {/* 휴대전화 */}
            <PersonalDetailContentTextCard>
              <PersonalDetailContentTextCardText>
                휴대전화<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '27ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='mobilePhone'
                  label='휴대 전화'
                  variant='outlined'
                  size='small'
                  value={mobilePhone}
                  name='mobilePhone'
                  onChange={onChangeHandler}
                  // {...register('mobilePhone')}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
            </PersonalDetailContentTextCard>
          </PersonalDetailContentTextBox>

          {/* 이메일 */}
          <PersonalDetailContentTextBoxLast>
            <PersonalDetailContentTextCardLast>
              <PersonalDetailContentTextCardText>
                이메일<OrangedColor>*</OrangedColor>
              </PersonalDetailContentTextCardText>
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '24ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='email-front'
                  label='이메일'
                  variant='outlined'
                  size='small'
                  type='email'
                  value={emailFront}
                  name='emailFront'
                  onChange={onChangeHandler}
                  // {...register('emailFront')}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
              @
              <Box
                component='form'
                sx={{
                  '& > :not(style)': {m: 1, width: '25ch'}
                }}
                noValidate
                autoComplete='off'
              >
                <TextField
                  id='email-back'
                  variant='outlined'
                  size='small'
                  type='email'
                  value={emailBack}
                  name='emailBack'
                  onChange={onChangeHandler}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                ></TextField>
              </Box>
              <FormControl sx={{m: 1, minWidth: 200}} size='small'>
                <InputLabel id='email'>이메일 선택</InputLabel>
                <Select
                  labelId='email'
                  size='small'
                  id='demo-select-small'
                  label='이메일 선택'
                  value={emailBack}
                  name='emailBack'
                  onChange={onChangeHandler}
                  inputProps={{
                    readOnly: isReadOnly
                  }}
                >
                  <MenuItem value=''>직접 입력</MenuItem>
                  <MenuItem value='google.com'>google.com</MenuItem>
                  <MenuItem value='naver.com'>naver.com</MenuItem>
                  <MenuItem value='naver.com'>hanmail.net</MenuItem>
                  <MenuItem value='naver.com'>mtvs.com</MenuItem>
                </Select>
              </FormControl>
            </PersonalDetailContentTextCardLast>
          </PersonalDetailContentTextBoxLast>
        </PersonalDetailContentContainer>
      </PersonalDetailContainer>
      <ImageIsOpenCheckBoxContainer>
        {!isReadOnly && (
          <ImageIsOpenCheckBox>
            <Checkbox
              value={isOpenedPhoto}
              name='isOpenedPhoto'
              onChange={onChangeHandler}
              // {...register('isOpenedPhoto')}
            ></Checkbox>
            <ImageIsOpenCheckBoxText>사진 비공개</ImageIsOpenCheckBoxText>
          </ImageIsOpenCheckBox>
        )}
      </ImageIsOpenCheckBoxContainer>
    </>
  );
}

export default MainResume;
