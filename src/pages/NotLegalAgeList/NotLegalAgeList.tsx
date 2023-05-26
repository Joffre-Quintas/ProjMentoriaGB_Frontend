import GeneralList from "../../components/GeneralList/GeneralList";
import { URL } from "../../variavelURL";

export default function NotLegalAgeList() {
    return(
        <>
            <GeneralList endpoint={`${URL}/list-of-not-legalage`}/>
        </>
    )
}