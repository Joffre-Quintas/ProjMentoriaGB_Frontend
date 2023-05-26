import OrdnerList from '../../components/OrdnerList/OrdnerList';
import { URL } from "../../variavelURL";

export default function OrderDESC() {
    return(
        <>
            <OrdnerList endpoint={`${URL}/list-of-desc-alfabetic`}/>
        </>
    )
}