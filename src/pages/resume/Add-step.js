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
        <AddHeaderText>????????? ??????</AddHeaderText>
        <AddBox>
          <AddBoxText>
            ???????????? ?????? 5????????? ????????? ???????????????.
            <br />
            ????????? ????????? ???????????? ???????????? ???????????? ????????? ??? ????????????.
            <br />
            <AddBoxTextRed>
              ??????????????? ????????? ????????? ??????????????? ?????? ??? ??? ????????? ?????? ?????????
              ???????????? ???????????? ?????? ?????????.
            </AddBoxTextRed>
          </AddBoxText>
        </AddBox>
        <SelectCategoryTextBox>
          <AddHeaderSelectText>????????? ?????? ??????</AddHeaderSelectText>
          <SelectCategoryTextBoxBasix>
            ?????? ??????, ????????????, ?????? ??????, ?????? ????????? ?????? ?????? ???????????????.
          </SelectCategoryTextBoxBasix>
        </SelectCategoryTextBox>
        {/* ????????? ?????? ?????? */}
        <SelectCategoryContentContainer>
          <SelectCategoryContentContainerList>
            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('career')} />
              <CardText>????????????</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('activity')} />
              <CardText>???????????? ??? ????????????</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('external')} />
              <CardText>????????????</CardText>
            </SelectCategoryContentContainerCard>
          </SelectCategoryContentContainerList>

          <SelectCategoryContentContainerList>
            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('foreign')} />
              <CardText>????????? ??????</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('experience')} />
              <CardText>?????? ?????? ?????? ??????</CardText>
            </SelectCategoryContentContainerCard>

            <SelectCategoryContentContainerCard>
              <Checkbox {...label} {...register('qualification')} />
              <CardText>?????? ?????? ??????</CardText>
            </SelectCategoryContentContainerCard>
          </SelectCategoryContentContainerList>
        </SelectCategoryContentContainer>

        <StyledButton type='submit'>????????? ????????????</StyledButton>
      </AddMainContainer>
    </OutletContainer>
  );
}
