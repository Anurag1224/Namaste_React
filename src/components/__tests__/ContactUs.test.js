import { render,screen} from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

describe("ContactUs Page Test Cases", () => {
    test("Should load ContactUs component", () => {
        render(<ContactUs/>);
        
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
        
    
    });
    
    test("Should load button inside ContactUs component", () => {
        render(<ContactUs/>);
        
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
        
    
    });
    
    test("Should load input name inside ContactUs component", () => {
        render(<ContactUs/>);
        
        const inputName = screen.getByPlaceholderText("Name");
    
        expect(inputName).toBeInTheDocument();
        
    
    });
    
    test("Should load two input boxes on the ContactUs component", () => {
        render(<ContactUs/>);
        
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
        
    
    });
});