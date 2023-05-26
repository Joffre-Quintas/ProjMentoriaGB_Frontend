import GeneralList from "../../components/GeneralList/GeneralList";
import { URL } from "../../variavelURL";

export default function LegalAgeList() {
    return(
        <>
            <GeneralList endpoint={`${URL}/list-of-legalage`}/>
        </>
    )
}