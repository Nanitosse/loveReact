
import { CAMPSITES } from"../../app/shared /CAMPSITES";
import {Col,Row} from "reactstrap";
import CampsiteCard from './CampsiteCard';
import {sellectAllcampsites} from './campsitesSlice';

const CampsitesList =({setCampsiteId})=>{
    const campsites= sellectAllcampsites()
    return(
        <Row className='ms-auto'>
            {campsites.map((campsite)=>{
                return (
                    <Col md="5" className='m-4' 
                    key={campsite.id}
                    onClick={()=> setCampsiteId(campsite.id)}
                    >
                        <CampsiteCard campsite={campsite}/>
                    </Col>
                );
            })}

        </Row>
    )

}
export  default CampsitesList;
