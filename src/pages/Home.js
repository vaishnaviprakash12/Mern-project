
import Header from "../components/common/header";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <Header Title="Our Recipes" bgClass
        ="bg-img">
            <Button
                content= "Search Your Recipes"
                color="primary"
                as={Link}
                to="/recipe"
                size="big"
            />
        </Header>
    )
}

export default Home;