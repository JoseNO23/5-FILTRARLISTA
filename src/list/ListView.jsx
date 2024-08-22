function ListView({elements, funFilterItems}){
    return(
        <div>
            <input type="text" onChange={ ev => funFilterItems(ev.target.value)}/>
            <ul>
                {
                    elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
                    // [<p key={1}>Hola</p>, <p key={2}>Hola</p>]
                }
            </ul>
        </div>
    )
}

export default ListView;