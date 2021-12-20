import { useLocation } from "react-router"
import ModifyClass from "../../components/ModifyClass"
import Navigation from "../../components/Navigation"
import '../../style/Background.css'

function EditClassPage() {
    const { search } = useLocation()
    let id: any = search.match(/\d/g);
    id = id.join("");
    console.log(id)

    return(
        <div id="background">
            <Navigation />
            <ModifyClass props={id} />
        </div>
    )
}
export default EditClassPage;