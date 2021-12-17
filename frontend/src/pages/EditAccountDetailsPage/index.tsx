import EditAccount from "../../components/EditAccount"
import Navigation from "../../components/Navigation"
import background from '../../style/pencils.png'

const EditAccountDetailsPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`, minHeight:1440}}>
            <Navigation />
            <EditAccount />
        </div>
    )
}
export default EditAccountDetailsPage;