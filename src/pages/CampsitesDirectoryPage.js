import { Container, Row, Col } from 'reactstrap';
//import CampsiteDetail from '../features/campsites/CampsiteDetail'
import CampsitesList from '../features/campsites/CampsitesList'
//import { selectCampsiteById } from '../features/campsites/campsitesSlice';
//import { useState } from "react";


const CampsitesDirectoryPage = () => {

    return (
        <Container>
            <CampsitesList  />
        </Container>

    )

};
export default CampsitesDirectoryPage;