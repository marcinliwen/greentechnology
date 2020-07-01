import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {data} from "./../data/faq.js"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '16px',
    flexBasis: '80%',
    flexShrink: 0,
  },
  content:{
    margin: '20px 0',
  },
  secondaryHeading: {
    fontSize: '16px',
    color: theme.palette.text.secondary,
  },
}));

const data_faq = data;

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
        {data_faq.map((data, index)=>(
          
            <Accordion expanded={expanded === 'panel'+index} onChange={handleChange('panel'+index)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography className={classes.heading, classes.content}>{data.q}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography className={classes.p}>
                  {data.a}
                </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
     
      
    </div>
  );
}
