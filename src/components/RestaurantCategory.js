import ItemList from "./ItemList";

const RestaurantCategory = ({data, showItems, setShowIndex}) => {

  
  const handleClick = () => {
    setShowIndex();
  };
  
  return (
    <div>
      {/* Accordion Header */}
      <div className="w-6/12 mx-auto my-4 p-6 bg-gray-200 shadow-lg ">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-semibold text-lg">
            
            {data.title} ({data.itemCards.length}){" "}
          </span>
          <span> 🔽 </span>
        </div>

        {/* Accordion Body*/}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
