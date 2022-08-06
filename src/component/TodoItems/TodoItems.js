import React from "react"

const Todoitems = (props) => {
    const {items , deleteItem } = props ;
    let length = items.length
    const ListItems = length > 0 ? 
    items.map( item => {
        return (
            <div key={Math.random()}>
            <span className="name">{item.name}</span>
            <span className="age">{item.age}</span>
            <span className="action icon" onClick={ () => deleteItem(item.id)}>&times;</span>

            </div>
        )
    }) : (
        <p>There is No Items </p>
    )

    
    return (
        <div className="listitem">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {ListItems}
        </div>
    )
    
}

export default Todoitems ;