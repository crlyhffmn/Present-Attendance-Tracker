import { useEffect, useState } from 'react';
import { Button, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

function ClassCardsId(props: any) {

    console.log(props.data)

    const [weekdays, setWeekdays] = useState({
        dayList: ""
    })
    useEffect(() => {
        let days: any[] = new Array()
        if (props.data.sunday) {
            days.push("Sunday")
        }
        if (props.data.monday) {
            days.push("Monday")
        }
        if (props.data.tuesday) {
            days.push("Tuesday")
        }
        if (props.data.wednesday) {
            days.push("Wednesday")
        }
        if (props.data.thursday) {
            days.push("Thursday")
        }
        if (props.data.friday) {
            days.push("Friday")
        }
        if (props.data.saturday) {
            days.push("Saturday")
        }
        setWeekdays({
            ...weekdays,
            dayList: days.toString()
        })
    }, []);

    return (
        <Card className="col-sm-12 mb-3">
            <Card.Body className="h-100 text-size-large" style={{ backgroundColor: "rgb(228, 111, 3)" }}>
                <Card.Header as="h5">
                    {props.data.courseName}
                </Card.Header>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Course ID:</label>
                    {" " + props.data.id}
                </ListGroupItem>
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Duration:</label>
                    {" " + props.data.startDate + " to " + props.data.endDate}
                </ListGroupItem>
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Time:</label>
                    {" " + props.data.startTime + " to " + props.data.endTime}
                </ListGroupItem>
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Weekdays:</label>
                    {" " + weekdays.dayList}
                </ListGroupItem>
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Instructor:</label>
                    {" " + props.data.instructorId.firstName + " " + props.data.instructorId.lastName}
                </ListGroupItem>
                <ListGroupItem>
                    <label style={{ fontWeight: 'bold' }}>Description:</label>
                    {" " + props.data.description}
                </ListGroupItem>
            </ListGroup>
            {/* <Button href={"/edit-class?id=" + props.data.id}>Modify Course</Button> */}
        </Card>
    )
}

export default ClassCardsId;
