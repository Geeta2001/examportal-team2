import React from "react"
import { Card, CardBody } from "reactstrap";
function Header({name, title}) {
    return (
        <div>
            <Card className="my-2 bg-dark">
                <CardBody>
                <h1 className="text-light text-center my-2">User Dashboard</h1>
                </CardBody>
            </Card>
        </div>
    )
}
export default Header;