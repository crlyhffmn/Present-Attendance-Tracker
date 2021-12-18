import CreateClass from "../../components/CreateClass";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import '../../style/Background.css'

const CreateClassPage = () => {
    return (
        <div id="background">
            <Navigation />
            <CreateClass />
            <Footer />
        </div>
    )
}
export default CreateClassPage;