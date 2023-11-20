import Search from "../components/common/Search";
import RecipeList from "../components/common/RecipeList";
import { getRecipes } from "../services/api";
import { useEffect, useState } from "react";

const Recipe = () => {

    const [searchedQuery, setSearchedQuery] = useState('pizza');
    const[recipes, setRecipes] = useState([]);

    useEffect (() => {
        getSearchedResult();
    }, [searchedQuery])

    const getSearchedResult = async () =>{
        let result=await getRecipes(searchedQuery);
        if(result && result.recipes){
            setRecipes(result.recipes);
        }
    }
    return(
        <>
           <Search setSeachedQuery={setSearchedQuery} />
           <RecipeList recipes={recipes} searchedQuery={searchedQuery}/>
        </>
    )
}

export default Recipe;