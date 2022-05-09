import React , {useState, useEffect} from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const QuestionsPage=()=> {
    useEffect(()=> {
        document.title="Add Questions"
    }, []);
    const navigate = useNavigate();

    const [isSubmitted, setIsSubmitted] = useState(false);

  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [answer, setAnswer] = useState('');

  const questionSubmit = async (e) => {
    e.preventDefault();
    const data = { question, optionA, optionB, optionC, optionD, answer};
        try {
            const res = await axios.post('http://localhost:8080/addquestion', data);
            console.log('Posting data', res);
            setIsSubmitted(true);
            setTimeout(() => {
              navigate("/");

            }, 2000);
        } catch(e) {
          console.error(e)
        }
      }
    return (
        <div>
            {!isSubmitted ? (
            <Form>
            <FormGroup>
                <b><label for="question">Question</label></b>
                <Input type="textarea" placeholder='Enter question here' 
                value={question}
                onChange={e => setQuestion(e.target.value)}/>
                <div> <br/>
                <b>
                <label for="option 1">Option A</label> <space />
                <input type="text" name="option A" 
                value={optionA} onChange={e => setOptionA(e.target.value)}/><br/>
                <label for="option 2">Option B</label> <space/>
                <input type="text" name="option A" 
                value={optionB} onChange={e => setOptionB(e.target.value)}/><br/>
                <label for="option 3">Option C</label> <space/>
                <input type="text" name="option A"
                value={optionC} onChange={e => setOptionC(e.target.value)}/> <br/>
                <label for="option 4">Option D</label> <space/>
                <input type="text" name="option A"
                value={optionD} onChange={e => setOptionD(e.target.value)}/><br/>
                </b> <br/>
                <b><label for="answer" 
                value={answer} onChange={e => setAnswer(e.target.value)}>Answer</label></b>
                <input type="text"/> <space/>
                <button className='form-input-btn' onClick={questionSubmit}>
                    Add Question </button>
                </div>
            </FormGroup>
            </Form>
            ) : (
                <div className='form-content-right'>Question added</div>
            ) }
        </div>
    );
};
export default QuestionsPage;