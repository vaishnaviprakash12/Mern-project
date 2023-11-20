
import { Grid , Form , Input, Icon} from "semantic-ui-react";
import { useState } from "react";

const Search = ({ setSearchedQuery }) => {
    const [value, setValue]=useState(" ");

    const onFormSubmit = () => {
        setSearchedQuery(value);
    }

    return (
       <Grid columns={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2 className='search-heading'>Search With <span style={ { color: '#2185D0'}}>Our Recipes</span></h2>
                <h4>What would you like to eat today?</h4>
                <Form onSubmit={onFormSubmit}>
                    <Input
                         placeholder=" Tomato, Pizza, Potato"
                         action= {{icon: 'search' ,color: 'blue'}}
                         onChange={(e) => setValue(e.target.value)}
                        value={value}
                    />
                </Form>
            </Grid.Column>
       </Grid>
    )
}

export default Search;