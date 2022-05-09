import React, { Fragment, useEffect,useState} from "react";
import { Container, Form, FormGroup, Input, Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const AddExams=()=> {
    useEffect(()=> {
        document.title="Add exams"
    }, []);
    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [courseType, setCourseType] = useState('');
    const examSubmit = async (e) => {
        e.preventDefault();
        const data = { courseType};
            try {
                const res = await axios.post('http://localhost:8080/addtest', data);
                console.log('Posting data', res);
                setIsSubmitted(true);
                setTimeout(() => {
                  navigate("/addexam");
    
                }, 2000);
            } catch(e) {
              console.error(e)
            }
        } 
    return (<div>
        { !isSubmitted ? (
    <Card className="text-center">
            <CardBody>
                <Container>
                <h1>Add Exams</h1>
                <Form>
                <FormGroup>
                    <b><label for="exam">Exam name</label></b>
                    <Input 
                    type="text" 
                    placeholder="Enter exam name"  
                    value={courseType}
                    onChange={e => setCourseType(e.target.value)} />
                </FormGroup>
                </Form>    
                <button className='form-input-btn' onClick={examSubmit}>
                    Add Exam </button>
                </Container>
            </CardBody>
        </Card>
        ) : (
            <div className="form-content-right">Exam added</div>
        )}
        </div>
    );
};
export default AddExams;