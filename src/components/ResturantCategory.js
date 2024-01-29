const ResturantCategory = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="w-6/12 bg-gray-100 mx-auto my-4 p-2 flex justify-between shadow-lg">
        <span>{data?.title}</span>
        <span>▼</span>
      </div>
    </div>
  );
};

export default ResturantCategory;
