// Import
// import { Fragment } from "react";

// Fragment can also be <>

function ListGroup() {

    // List of places
    const items = [
        'New York',
        'San Francisco',
        'Tokyo',
        'London',
        'Paris',
    ];

    // Map items to list
    items.map(item => <li>{item}</li>)

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
                <li className="list-group-item">A fourth item</li>
                <li className="list-group-item">And a fifth one</li>
            </ul>
        </>
    )
}

// Export Component
export default ListGroup;