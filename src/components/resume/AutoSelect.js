import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const TitleText = styled.div`
  // font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  margin-top: 30px;
`;

const MainContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-bottom: 50px;
`;

export default function AutoSelect({
  keyName,
  title,
  list,
  register,
  setValue,
  isReadOnly,
  resumeInfo
}) {
  return (
    <MainContainer>
      <TitleText>{title}</TitleText>
      {list && (
        <Stack spacing={3} width={1200}>
          <Autocomplete
            multiple
            id='multipls-select'
            options={list}
            value={isReadOnly ? list : undefined}
            getOptionLabel={(option) =>
              keyName === 'skillStack' ? option.techValue : option.posValue
            }
            // defaultValue={[list[13]]}
            filterSelectedOptions
            renderTags={
              isReadOnly &&
              ((tagValue, getTagProps) =>
                tagValue.map((option, index) => (
                  <Chip
                    label={
                      keyName === 'skillStack'
                        ? option.techValue
                        : option.posValue
                    }
                    {...getTagProps({index})}
                    disabled={list.indexOf(option) !== -1}
                  />
                )))
            }
            renderInput={(params) => (
              <TextField {...params} label={title} placeholder={title} />
            )}
            readOnly={isReadOnly}
            onChange={(event, newValue) => {
              console.log(newValue); // 그 자체로 Object 형태.
              setValue(keyName, newValue);
            }}
          />
        </Stack>
      )}
    </MainContainer>
  );
}
