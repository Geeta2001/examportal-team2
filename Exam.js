import react from "react";

import {Card,CardBody, CardTitle, CardSubtitle,CardText,CardFooter,Button,Container,} from "reactstrap";

const Exams=({exam}) =>{
    return (
        <Card className="text-center">
            <CardBody>
                <b><CardSubtitle>{exam.title}</CardSubtitle> </b>
                <CardText>{exam.description}</CardText>
                <Container>
                <Button color="success">Start</Button>
                </Container>
            </CardBody>
        </Card>
    )
}
export default Exams;