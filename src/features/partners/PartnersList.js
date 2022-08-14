import {Col, col} from "reactstrap";
import Partner from './Partner';
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";
import Error from "../../components/Error";
import Loading from '../../components/Loading';


const PartnersList = ()=>{
    const isLoading= useSelector((state)=> state.partners.isLoading);
    const errMsg=  useSelector((state)=> state.partners.errMsg);
    const partners= useSelector(selectAllPartners);
    return isLoading ? (
        <Loading/>
    )  : errMsg ? (
        <Error errMsg={errMsg}/>

    )  : (
        <Col className="mt-4">
            {partners.map((partner)=>{
                return(
                    <div  className='d-flex mb-5'  key={partner.id}>
                        <Partner partner={partner}/>
                    </div>
                )
            })}

        </Col>
    )

}

export default PartnersList;