import RestaurantItemCategory from "../RestaurantCategory/RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedCategory }) => {
  return (
    <>
      {nestedCategory.categories.map((category, index) => (
        <div className="nested-item-categories" key={index}>
          <RestaurantItemCategory itemCategory={category} />
        </div>
      ))}
    </>
  );
};

export default RestaurantNestedItemCategory;
