// here we are writing the test cases for cart flow
import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("test cases for restaurant menu component", () => {
    it("Should load the Header Component", async () => {
        await act(async () =>
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
              </Provider>
            </BrowserRouter>
          )
        );
      
        const initialCartItem = screen.getByText("( 0 items )");
        expect(initialCartItem).toBeInTheDocument();
        
      });
      
    
    it("Should load the RestaurantMenu Component", async () => {
      await act(async () =>
        render(
          
            <Provider store={appStore}>
              <RestaurantMenu />
            </Provider>
          
        )
      );
    
      const accordionHeader = screen.getByText("NEW CHICKEN ROLLS (15)");
      fireEvent.click(accordionHeader);
      const foodItem = screen.getAllByTestId("foodItems");
      expect(foodItem.length).toBe(15);
      
    });
    
    it("Should test for 1 and 2 element in the cart", async () => {
        await act(async () =>
          render(
            <BrowserRouter>
              <Provider store={appStore}>
                <Header />
                <RestaurantMenu />
              </Provider>
            </BrowserRouter>
          )
        );
      
        const accordionHeader = screen.getByText("NEW CHICKEN ROLLS (15)");
        fireEvent.click(accordionHeader);
        const addBtns = screen.getAllByRole("button", { name: "ADD" });
        fireEvent.click(addBtns[0]);
        expect(screen.getByText("( 1 items )")).toBeInTheDocument();
        fireEvent.click(addBtns[1]);
        expect(screen.getByText("( 2 items )")).toBeInTheDocument();
      });

    it("Should test for number of items in a cart", () => {
        render(
            <Provider store = {appStore}>
                <Cart/>
            </Provider>
        )

        const cartItems = screen.getAllByTestId("foodItems");
        expect(cartItems.length).toBe(2);
    });

    it("Should click on clear cart and check for number of items there", () => {
        render(
            <Provider store = {appStore}>
                <Cart/>
            </Provider>
        )

        const clearCartBtn = screen.getByRole("button", {name: "Clear Cart"});
        fireEvent.click(clearCartBtn);
        expect(screen.getByText("Cart is Empty. Add items to the Cart !")).toBeInTheDocument();
    });
});

 