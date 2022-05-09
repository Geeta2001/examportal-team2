import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";
import Exams from "./Exams";
import axios from "axios";

const AllExams=()=> {

    const [exams, setExams]=useState([
        {title:"Exam-1", description:"First exam"},
        {title:"Exam-2", description:"Second exam"},
        {title:"Exam-3", description:"Third exam"}
    ]);

    return (
        <div className="text-center">
            <h1>All Exams</h1>
            <p>List of exams</p>
            {
                exams.length>0
                ? exams.map((item) => <Exams key={item.id} exam={item} /> )
                : "No exams updated" }
        </div>
    );
};
export default AllExams;