import {Menu} from 'semantic-ui-react';
import {logo} from '../../consonants/constant';
import { Link } from 'react-router-dom';

const Navbar = () =>{
    return (

        <Menu borderless fixed='top'>
            <Menu.Item>
                    <img src="logo.png" alt="logo"  style={{ width: 100 }} />
            </Menu.Item>
            <Menu.Item name="Home" as={Link} to="/" />
            <Menu.Item name="Recipes" as={Link} to="/recipe" />
        </Menu>
    )
}
export default Navbar;