
import { CAMPSITES } from"../../app/shared /CAMPSITES";
import {Col,Row} from "reactstrap";
import CampsiteCard from './CampsiteCard';
import {sellectAllcampsites} from './campsitesSlice';

const CampsitesList =()=>{
    const CampsitesList= sellectAllcampsites()

    return(
        <Row className='ms-auto'>
            {CAMPSITES.map((campsite)=>{
                return (
                    <Col md="5" className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })}

        </Row>
    )

}
export  default CampsitesList;
