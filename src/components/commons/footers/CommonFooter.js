import styled from '@emotion/styled';
import {Box, Container, Divider, Grid, Stack, Typography} from '@mui/material';

const StyledCssTitle = styled(Typography)(({theme}) => ({
  fontWeight: 'bold',
  fontSize: theme.typography.h4.fontSize,
  color: theme.palette.common.white
}));
const StyledCssDetails = styled(Typography)(({theme}) => ({}));
const StyledBox = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.common.white
}));
export default function CommonFooter() {
  return (
    <>
      <Divider sx={{width: '100%'}} />
      <StyledBox padding={5} display='flex' alignItems='center'>
        <Container disableGutters component={Stack} spacing={5}>
          <Grid container justifyContent='space-between' rowGap={5}>
            <Grid item xs={4}>
              <StyledCssTitle>고객센터</StyledCssTitle>
              <StyledCssDetails>대표 번호 : 1588-1588</StyledCssDetails>
              <StyledCssDetails>
                운영시간 : 오전 9시 ~ 오후 6시
              </StyledCssDetails>
              <StyledCssDetails>(주말 및 공휴일 휴무)</StyledCssDetails>
              <StyledCssDetails>
                점심시간 : 오후 11시 30분 ~ 오후 1시
              </StyledCssDetails>
            </Grid>
            <Grid item xs={4}>
              <StyledCssTitle>문의</StyledCssTitle>
              <StyledCssDetails>bool_size_oh@metaverse.com</StyledCssDetails>
              <StyledCssDetails>자주묻는질문 FAQ</StyledCssDetails>
              <StyledCssDetails>1:1 문의하기</StyledCssDetails>
            </Grid>
            <Grid item xs={4}>
              <StyledCssTitle>개인정보 처리방침</StyledCssTitle>
              <StyledCssDetails>이용약관</StyledCssDetails>
              <StyledCssDetails>결제/ 환불에 대한 법률</StyledCssDetails>
            </Grid>
          </Grid>
          <Divider light />
          <StyledCssDetails>
            Copyrightⓒ2022 team-phoenix All rights reserved.
          </StyledCssDetails>
        </Container>
      </StyledBox>
    </>
  );
}
