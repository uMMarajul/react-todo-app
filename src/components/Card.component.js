
import { useState } from "react";
import Form from "./Form.component";
import Item from "./Item.componet";
function Card(){

    const [item,setItem] = useState([
        
    ]);

    const addItem = (title) => {
        setItem((previousValue)=>{
            return [...previousValue,{id:previousValue.length+1,title:title}];
        });
    }

    let arr = [];
    for (let i=0;i<item.length;i++){
        arr.push(<Item key={item[i].id} data={item[i].title} />);
    }


    return(
        <div className="card" style={{width: "30rem"}}>
            <div className="card-header">
                Todo
            </div>
            <ul className="list-group list-group-flush">
                {arr}
            </ul>
            <div className="card-footer">
                <Form  addItem={addItem}/>
            </div>
        </div>
    );
}


export default Card;