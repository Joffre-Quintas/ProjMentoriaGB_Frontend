import OrdnerList from '../../components/OrdnerList/OrdnerList';
import { URL } from "../../variavelURL";

export default function OrderASC() {
    return(
        <>
            <OrdnerList endpoint={`${URL}/list-of-asc-alfabetic`}/>
        </>
    )
}