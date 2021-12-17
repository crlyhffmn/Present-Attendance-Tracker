import Navigation from "../../components/Navigation";
import '../../style/MyAccountPage.css';
import AccountDetails from "../../components/AccountDetails";
import background from '../../style/pencils.png'


const AccountDetailsPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`, minHeight:1440}}>
            <Navigation />
            <AccountDetails />
        </div>
    )
}
export default AccountDetailsPage;