import react,{useEffect} from "react";

import {Card,CardBody, CardTitle, CardSubtitle,CardText,CardFooter,Button,Container,} from "reactstrap";
    
const Exams=({exam}) =>{
    useEffect(()=> {
        document.title="View Exams"
    }, []);
    return (
        <Card className="text-center">
            <CardBody>
                <b><CardSubtitle>{exam.title}</CardSubtitle> </b>
                <CardText>{exam.description}</CardText>
                <Container>
                <Button color="danger">Delete</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Exams;