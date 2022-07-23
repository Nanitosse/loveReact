import { Card,CardImg,CardBody, CardTitle, CardText } from "reactstrap";

const  DisplayCard = ({item})=>{

    const {image,name,description}= item;

    return(
        <Card>
            <CardImg sr={image} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )


}

export default DisplayCard;