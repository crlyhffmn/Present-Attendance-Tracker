import { Container } from "react-bootstrap";
import Jumbotron from "../../components/Home/Jumbotron";
import Navigation from "../../components/Navigation";

const HomePage = () => {
    return (
        <>
            <Navigation />
            <br></br>
            <Container >
                <Jumbotron />
            </Container>
        </>
    )
}
export default HomePage;