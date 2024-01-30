import ItemList from "./ItemList";

const ResturantCategory = ({ data }) => {
  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-2 shadow-lg">
        <div className="flex justify-between">
          <span className="font-bold text-base">
            {data?.title} ({data?.itemCards?.length})
          </span>
          <span>▼</span>
        </div>
        <ItemList items={data?.itemCards} />
      </div>
    </div>
  );
};

export default ResturantCategory;
