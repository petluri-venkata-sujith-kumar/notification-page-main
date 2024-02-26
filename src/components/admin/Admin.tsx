import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

const Admin = () => {
  return (
    <div className="w-[90%]">
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Divyanshu
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <textarea
              name=""
              id=""
              placeholder="Type Message here"
              className="border-2 border-gray-400 w-[100%] p-3"
            ></textarea>
          </form>
        </AccordionDetails>
        <AccordionActions>
          <Button>Send</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Venkata
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <textarea
              name=""
              id=""
             
              placeholder="Type Message here"
              className="border-2 border-gray-400 w-[100%] p-3"
            ></textarea>
          </form>
        </AccordionDetails>
        <AccordionActions>
          <Button>Send</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Monika
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <textarea
              name=""
              id=""
              placeholder="Type Message here"
              className="border-2 border-gray-400 w-[100%] p-3"
            ></textarea>
          </form>
        </AccordionDetails>
        <AccordionActions>
          <Button>Send</Button>
        </AccordionActions>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Krishan
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <textarea
              name=""
              id=""
              placeholder="Type Message here"
              className="border-2 border-gray-400 w-[100%] p-3"
            ></textarea>
          </form>
        </AccordionDetails>
        <AccordionActions>
          <Button>Send</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
};
export default Admin;
