import * as React from 'react';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

export default function Tags({title, list}) {
  return (
    <Stack spacing={3} fullwidth>
      <Autocomplete
        multiple
        id='multipls-select'
        options={list}
        getOptionLabel={(option) => option}
        // defaultValue={[list[13]]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField {...params} label={title} placeholder={title} />
        )}
      />
    </Stack>
  );
}

// const list = [
//   {title: 'java', year: 1994},
//   {title: 'python', year: 1972},
//   {title: 'C', year: 1974},
//   {title: 'spring', year: 2008},
//   {title: 'react', year: 1957},
//   {title: "spring boot", year: 1993},
// ];
