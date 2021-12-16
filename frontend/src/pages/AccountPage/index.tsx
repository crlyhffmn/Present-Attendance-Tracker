import Account from "../../components/Account";
import Navigation from "../../components/Navigation";
import '../../style/MyAccountPage.css';
import background from '../../style/pencils.png'


const AccountPage = () => {
    return (
        <div style={{backgroundImage: `url(${background})`, minHeight:1440}}>
            <Navigation />
            <Account />
        </div>
    )
}
export default AccountPage;