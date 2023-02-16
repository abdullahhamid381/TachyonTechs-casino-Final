import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordiandata } from "../../assets/data";
import '../../scss/Accordian.scss'
export default function Accordian() {
  const [Accordian, setAccordian] = useState(Accordiandata);
  return (
    <div className="accordian-parent">




      {/*------------------------- START HERE THIS SECTION OF ACCORDIAN ------------------------- */}
      <div>
        {Accordian.map((Accordianmap) => {
          return (
            <div className="accordian">
              <Accordion
                className="accordian"
                style={{ borderBottom: "1px solid gray", padding: "5px 0" }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                  className="accordian"
                >
                  <Typography style={{ fontSize: "20px" }}>
                    <span style={{
                      background: "rgb(73, 73, 81)",
                      padding: "10px",
                      borderRadius: '80px',
                      marginRight: '13px',
                      fontSize: '22px',
                    }}> Q </span>
                    {Accordianmap.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className="accordian">
                  {Accordianmap.description}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      </div>
      {/*<======================>  END HERE  THIS SECTION OF THE ACCORDIAN  <======================> */}




      { /*------------------------- START HERE THIS DIV SECTION IS ACCORDIAN IMAGE ------------------------- */}

    </div>

    /*<======================>  END HERE  THIS DIV SECTION IS ACCORDIAN IMAGE  <======================> */
  );
}
