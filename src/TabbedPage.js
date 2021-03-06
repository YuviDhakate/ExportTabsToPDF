import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import TabPanel from './TabPanel'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const TabbedPage = ({ tabs }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (<div className={classes.root}>
        <Typography variant="h4">{tabs[value].name}</Typography>
        <AppBar position="static">
            <Tabs value={value} onChange={handleChange}>
                {tabs.map((tab) => <Tab key={tab.id} label={tab.name} />
                )}
            </Tabs>
        </AppBar>
        <Divider />
        <TabPanel value={value} index={value}>
            {tabs[value].contents}
        </TabPanel>
    </div >
    )
};

export default TabbedPage