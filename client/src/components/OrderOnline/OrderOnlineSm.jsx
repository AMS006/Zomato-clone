import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FoodCardLg from './FoodCardLg';
function OrderOnlineSm({menus,menuData}) {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <div >
      {menuData.map((menu,index) =>(
        <div key={index} className='my-3'>
            <Accordion expanded={expanded=== `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index+1}a-content`}
                    id={`panel${index+1}a-header`}
                    >
                    <h3 className='font-medium text-lg '>{menu.name}</h3>
                </AccordionSummary>
                <AccordionDetails>
                    {menu.items.map((item) => (
                      <FoodCardLg id={item} key={item} />
                    ))}
                </AccordionDetails>
            </Accordion>
        </div>
      ))}
    </div>
  )
}

export default OrderOnlineSm
