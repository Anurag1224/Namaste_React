const Contact = () => {
    return (
        <div className="w-6/12 m-auto shadow-lg bg-amber-100 p-4" >
            <h1 className = "m-5 text-center font-bold">This is a Contact Us Page</h1>
            <div className="w-9/12 m-auto shadow-lg bg-orange-200">
                <form m-4 p-4>
                    <input placeholder="Name" className="px-2 m-2"></input> 
                    <input placeholder="Message" className="px-2 "></input>
                </form>

            </div>
        </div>

        
       
    );
};

export default Contact;