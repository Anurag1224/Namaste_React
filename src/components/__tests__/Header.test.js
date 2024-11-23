import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Header Component test cases" , () => {
    it("Should render Header component with a login button ", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>  
            <Header/>
        </Provider>  
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name: "Login"});
    
    expect(loginButton).toBeInTheDocument();
    
    });
    
    it("Should render Header component with cart items ", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>  
            <Header/>
        </Provider>  
        </BrowserRouter>
    );
    
    const cartItems = screen.getByText("( 0 items )");//to chect foe exact string
    // const cartItems = screen.getByAltText("(/( items )/)"); //to check using regex
    
    
    expect(cartItems).toBeInTheDocument();
    
    });
    
    it("Should change login button to logout and logout button to login on click  ", () => {
        render(
        <BrowserRouter>
        <Provider store={appStore}>  
            <Header/>
        </Provider>  
        </BrowserRouter>
    );
    
    const loginButton = screen.getByRole("button", {name: "Login"});
    
    fireEvent.click(loginButton);
    
    const logoutButton = screen.getByRole("button", {name: "Logout"});
    
    
    expect(logoutButton).toBeInTheDocument();

    fireEvent.click(logoutButton);
    
    const AfterClickloginButton = screen.getByRole("button", {name: "Login"});

    expect(AfterClickloginButton).toBeInTheDocument();
    
    });

    
    // it("should display offline message when offline  ", () => {
        
    //     jest.spyOn(window.navigator, 'onLine', 'get').mockReturnValue(false); 
    
    //     render(
    //     <BrowserRouter>
    //     <Provider store={appStore}>  
    //         <Header/>
    //     </Provider>  
    //     </BrowserRouter>
    // );
    
    // const status = screen.getByRole("Looks Like You're Offline !! Please Check Your Internet Connection")
    
    //  expect(status).toBeInTheDocument();
    
    
    
    
    // });
});