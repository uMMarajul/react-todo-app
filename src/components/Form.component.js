
const Form = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
        console.log("form submitted");
    }
    // const x = "Hallo World";
    return (
        <form onSubmit={handleSubmit} >
            <div className="mb-3 d-flex">
                <input 
                    name="title"
                    type="text" 
                    className="form-control mx-2" 
                    id="title" 
                    placeholder="Todo Title"
                />
                <button type="submit" className="btn btn-primary">submit</button>
            </div>
        </form>
    );
}
 
export default Form;