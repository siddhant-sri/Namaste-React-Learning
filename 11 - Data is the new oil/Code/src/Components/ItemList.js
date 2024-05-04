import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log("object", items);
  return (
    <div>
      {items.map((items) => (
        <div
          key={items.card.info.id}
          className="text-left border-gray-200 border-b-2 p-4 flex"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{items.card.info.name}</span>
              <span>
                - ₹{" "}
                {items.card.info.price
                  ? items.card.info.price / 100
                  : items.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{items.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="p-2 bg-white text-green-600 shadow-lg rounded-lg my-24 mx-7 font-bold">
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + items.card.info.imageId}
              alt="item_pic"
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
