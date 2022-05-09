import React from "react";
import {Link} from "react-router-dom";
import { ListGroup } from "reactstrap";

const Menu=()=> {
    
    return(
        <ListGroup>
            <Link className="list-group-item list-group-item-action" to="/" action>
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" to="/addexam" action>
                Add Exam
            </Link>
            <Link className="list-group-item list-group-item-action" to="/addquestions" action>
                Add Question
            </Link>
        </ListGroup>
    );
};
export default Menu;