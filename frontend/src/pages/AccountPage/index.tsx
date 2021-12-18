import Account from "../../components/Account";
import Navigation from "../../components/Navigation";
import '../../style/MyAccountPage.css';
import '../../style/Background.css'


const AccountPage = () => {
    return (
        <div id="background">
            <Navigation />
            <Account />
        </div>
    )
}
export default AccountPage;