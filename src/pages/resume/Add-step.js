import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {RESUME_SELECT} from '../../modules/resume/addStepModule';

const OutletContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 96px;
  margin-top: 96px;

  width: 100%;
  min-width: 1200px;
`;

const StyledButton = styled.button`
  width: 123.29px;
  height: 48px;
  background: #4199e1;
  border-radius: 5px;
  color: white;
  border-color: #4199e1;
`;

const AddMainContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 64px;

  width: 100%;
  max-width: 1200px;
  height: fit-content;
`;

const AddHeaderText = styled.div`
  width: 100%;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 100%;
`;

const AddHeaderSelectText = styled.div`
  width: 100%;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 100%;
`;

const AddBox = styled.div`
  box-sizing: border-box;

  width: 100%;
  height: 160px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  mix-blend-mode: normal;
  border: 1px solid #4199e1;
  border-radius: 20px;
`;

const AddBoxText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 180%;
`;

const AddBoxTextRed = styled.div`
  color: red;
`;

const SelectCategoryTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 74px;
`;
const SelectCategoryTextBoxBasix = styled.div`
  height: 18px;
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.01em;
`;

const SelectCategoryContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 100%;
  height: 74px;
`;

const SelectCategoryContentContainerList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 50px;

  width: 100%;
  height: 29px;
`;

const SelectCategoryContentContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 16px;

  width: 20%;
  max-width: 245px;
  height: 29px;
`;

const CardText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: 0.01em;
  height: 18px;
  max-width: 200px;
  width: 81%;
`;

export function AddStepCategory() {
  const label = {inputProps: {'aria-label': 'checked'}};
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selectedList = useSelector(
    (state) => state.resumeCombineReducer.resumeSelectReducer
  );

  return (
    <OutletContainer>
      <AddMainContainer
        onSubmit={handleSubmit((data) => {
          dispatch({
            type: RESUME_SELECT,
            payload: {
              career: data.career,
              activity: data.activity,
              external: data.external,
              foreign: data.foreign,
              experience: data.experience,
              qualification: data.qualification
            }
          });
          navigate('/resume/add/detail');
          console.log(data);
        })}
      >
        <AddHeaderText>이력서 등록</AddHeaderText>
        <AddBox>
          <AddBoxText>
            이력서는 최대 5개까지 등록이 가능합니다.
            <br />
            원하는 항목을 자유롭게 선택하여 이력서를 작성할 수 있습니다.
            <br />
            <AddBoxTextRed>
              구직신청은 이력서 작성과 포트폴리오 작성 후 꼭 인재풀 매칭 서비스
              활성화를 하셔야만 완료 됩니다.
            </AddBoxTextRed>
          </AddBoxText>
        </AddBox>
        <SelectCategoryTextBox>
          <AddHeaderSelectText>이력서 항목 선택</AddHeaderSelectText>
          <SelectCategoryTextBoxBasix>
            인적 사항, 학력사항, 기술 스택, 희망 직군은 기본 입력 항목입니다.
          </SelectCategoryTextBoxBasix>
        </SelectCategoryTextBox>
        {/* 이력서 항목 선택 */}
        <SelectCategoryContentContainer>
          <SelectCategoryContentContainerList>
            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('career')} />
              <CardText>경력사항</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('activity')} />
              <CardText>주요활동 및 수상경력</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('external')} />
              <CardText>해외경험</CardText>
            </SelectCategoryContentContainerCard>
          </SelectCategoryContentContainerList>

          <SelectCategoryContentContainerList>
            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('foreign')} />
              <CardText>외국어 능력</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('experience')} />
              <CardText>직업 훈련 이수 이력</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('qualification')} />
              <CardText>보유 자격 면허</CardText>
            </SelectCategoryContentContainerCard>
          </SelectCategoryContentContainerList>
        </SelectCategoryContentContainer>

        <StyledButton type='submit'>이력서 작성하기</StyledButton>
      </AddMainContainer>
    </OutletContainer>
  );
}
