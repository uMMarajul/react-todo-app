
function Item(props){
    console.log(props);
    return(
        <li className="list-group-item">{props.data}</li>
    );
}

export default Item;