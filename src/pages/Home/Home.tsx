import GeneralList from "../../components/GeneralList/GeneralList";
import { URL } from "../../variavelURL";

export default function Home() {
    return(
        <>
            <GeneralList endpoint={URL}/>
        </>
    )
}