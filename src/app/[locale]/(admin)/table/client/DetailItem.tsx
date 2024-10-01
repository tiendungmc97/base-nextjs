import { useEffect, useState } from "react";
import { IndexedPerson } from "./page";

interface IDetailItemProps {
  item: IndexedPerson;
  setItem: (item: IndexedPerson) => void;
}
function DetailItem(props: IDetailItemProps) {
  const { item, setItem } = props;
  const [currentItem, setCurrentItem] = useState(item);
  useEffect(() => {
    setCurrentItem(item);
  }, [item.index]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentItem((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSave = () => {
    setItem(currentItem);
  };
  return (
    <div className="bg-gray-200">
      <div className="p-2">
        <div className="mb-2 font-bold">Selected Items</div>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          <div className="flex items-center">
            <span className="w-20 font-semibold">FirstName:</span>
            <input
              name="firstName"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.firstName}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 font-semibold">LastName:</span>
            <input
              name="lastName"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.lastName}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 font-semibold">Age:</span>
            <input
              name="age"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.age}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 font-semibold">Visits:</span>
            <input
              name="visits"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.visits}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 font-semibold">Progress:</span>
            <input
              name="progress"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.progress}
              onChange={handleChange}
              placeholder=""
            />
          </div>
          <div className="flex items-center">
            <span className="w-20 font-semibold">Status:</span>
            <input
              name="status"
              className="ml-2 rounded border border-gray-300 p-1"
              value={currentItem.status}
              onChange={handleChange}
              placeholder=""
            />
          </div>
        </div>
        <div className="flex items-center">
          <button className="rounded bg-blue-500 p-1 text-white" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailItem;
