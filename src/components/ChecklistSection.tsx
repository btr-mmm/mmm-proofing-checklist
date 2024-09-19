import { useState } from "react";
import { ChecklistItem } from "../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircle as faCircleFilled } from "@fortawesome/free-solid-svg-icons";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  listItems: ChecklistItem[];
};

function ChecklistSection({ title, listItems }: Props) {
  const [checkedBoxes, setCheckedBoxes] = useState<boolean[]>(
    new Array(listItems.length).fill(false),
  );

  const iconColor = checkedBoxes.every((e) => e)
    ? "text-green-500"
    : checkedBoxes.some((e) => e)
      ? "text-amber-400"
      : "text-red-600";

  const toggle = (index: number) => {
    const newArr = [...checkedBoxes];

    newArr[index] = !newArr[index];

    setCheckedBoxes(newArr);
  };

  return (
    <section className="bg-mmm-600 rounded-lg p-4 text-white shadow-md">
      <div className="flex justify-between gap-4">
        <h2 className="mb-2 text-lg font-semibold sm:text-2xl">{title}</h2>
        <FontAwesomeIcon
          icon={faCircleFilled}
          className={twMerge("text-lg sm:text-2xl", iconColor)}
        />
      </div>
      <ul className="flex flex-col gap-2">
        {listItems.map(({ title, description }, index) => {
          return (
            <li
              className="bg-mmm-900 hover:bg-mmm-800 active:bg-mmm-700 flex cursor-pointer items-center gap-2 rounded-lg p-2 text-white transition-colors"
              onClick={() => toggle(index)}
            >
              <FontAwesomeIcon
                icon={checkedBoxes[index] ? faCircleCheck : faCircle}
                className="mr-2 text-3xl"
              />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default ChecklistSection;
