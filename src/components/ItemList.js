import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid = "foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 border-gray-300 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="p-2">
              <span>{item.card.info.isVeg === 1 ? "🟢" : "🟤"}</span> <br />
              <span className="font-medium">{item.card.info.name}</span> <br />
              <span>
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}
              </span>
              <br />
            </div>
            <p className="text-xs px-2">{item.card.info.description}</p>
          </div>
          <div className="3/12">
            <div className="absolute mt-24 ml-10">
              <button
                className="bg-white text-black font-semibold p-1 rounded-md w-12 shadow-lg "
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>

            <img
              src={CDN_URL + item.card.info.imageId}
              className="m-4 w-24 h-24 rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
