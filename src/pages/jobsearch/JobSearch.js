import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Container} from '@mui/system';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import BasicTable from '../../components/jobsearch/BasicTable';

function TabPanel(props) {
  const {children, value, index, ...other} = props;

  return (
    <Box
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Box>{children}</Box>
        </Box>
      )}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

function JobSearch() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab label='전체' {...a11yProps(0)} />
            <Tab label='대기업' {...a11yProps(1)} />
            <Tab label='중견·중소' {...a11yProps(2)} />
            <Tab label='공기업·공사 ' {...a11yProps(3)} />
            <Tab label='외국계' {...a11yProps(4)} />
            <Tab icon={<StarIcon />} iconPosition='end' label='관심기업'></Tab>
          </Tabs>

          {/*위에 탭목록, 아래는 탭에 매칭되는 페이지*/}
        </Box>
        <TabPanel value={value} index={0}>
          <BasicTable />
        </TabPanel>

        <TabPanel value={value} index={1}>
          대기업
        </TabPanel>
        <TabPanel value={value} index={2}>
          중견중소
        </TabPanel>
        <TabPanel value={value} index={3}>
          공기업공사
        </TabPanel>
        <TabPanel value={value} index={4}>
          외국계
        </TabPanel>
        <TabPanel value={value} index={5}>
          관심기업
        </TabPanel>
      </Box>
    </Container>
  );
}

export default JobSearch;
