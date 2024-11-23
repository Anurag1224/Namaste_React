
const ContactUs = () => {
    return (
        <div className="w-6/12 m-auto shadow-lg bg-amber-100 p-4" >
            <h1 className = "m-5 text-center text-xl font-bold">This is a Contact Us Page</h1>
            <div className="w-9/12 m-auto shadow-lg bg-orange-200">
                <form >
                    <input type="text" placeholder="Name" className ="px-2 m-2 shadow-lg"></input> 
                    <input type="text" placeholder="Message" className ="px-2 m-2 shadow-lg"></input>
                    <button className="px-1 ml-6 rounded-md bg-red-300 shadow-lg">Submit</button>
                </form>

            </div>
        </div>

        
       
    );
};

export default ContactUs;