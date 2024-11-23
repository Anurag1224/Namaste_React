import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromotedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";


it("Should render the RestaurantCard component with props data", () => {
    render(<RestaurantCard resData = {MOCK_DATA} />)

    const resName = screen.getByText("LunchBox - Meals and Thalis");

    expect(resName).toBeInTheDocument();
});

// it("Should render the RestaurantCard component with promoted label", () => {
//     render(<withPromotedLabel resData = {MOCK_DATA} />)

//     const header = screen.getByLabelText("ITEMS AT ₹159");

//     expect(header).toBeInTheDocument();
// });