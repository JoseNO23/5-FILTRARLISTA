import { useState } from 'react';
import frameworksList from './items';
import ListView from './ListView';

// Componentes de presentación y componentes contenedores

function List(){
    let [items, setItems] = useState(frameworksList);

    function filterItems(searchPattern){
        if(searchPattern === ""){
            setItems(frameworksList);
        }else{
            let newItems = filterItemsBySearchPattern(searchPattern)
            setItems(newItems)
        }
    }

    function filterItemsBySearchPattern(searchPattern){
        let filterItems = frameworksList
            .map( item => item.toLowerCase().includes(searchPattern.toLowerCase()));
        return filterItems;
    }

    return(
        <ListView elements = {items} funFilterItems = {filterItems}/>
    )
}
export default List;