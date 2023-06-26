import { useState } from "react";
const Form = (props) => {
    

    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(input);
        console.log("form submitted");
        props.addItem(input);
    }
    // const x = "Hallo World";
    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3 d-flex">
                <input 
                    name="title"
                    type="text"
                    value={input}
                    className="form-control mx-2" 
                    id="title" 
                    placeholder="Todo Title"
                    onChange={(e)=>{
                        setInput(e.target.value);
                    }}
                />
                <button type="submit" className="btn btn-primary">submit</button>
                
            </div>
            <pre>{input}</pre>
        </form>
    );
}
 
export default Form;