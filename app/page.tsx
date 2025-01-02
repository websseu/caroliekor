"use client";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiCheckbox, BiCheckboxChecked } from "react-icons/bi";
import { useEffect, useState } from "react";

interface CoffeeItem {
  calories: number;
  productName: string;
}

export default function Home() {
  const [data, setData] = useState<CoffeeItem[]>([]);

  useEffect(() => {
    fetch("https://websseu.github.io/kcalkor/json/coffee.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("데이터 가져오기 실패:", error));
  }, []);

  return (
    <main className="max-w-screen-xl mx-auto mt-8 px-4">
      <div className="flex mt-8">
        <section className="list">
          <h2 className="border-b border-gray-400">
            <span className="text-sm mr-10 text-gray-600 poppins w200 line">
              KCAL
            </span>
            <span className="text-sm text-gray-600 poppins w200 line">
              NAME
            </span>
          </h2>
          <div className="kcal-list">
            <ul className="flex flex-col mt-4">
              {data.map((item, index) => (
                <li key={index} className="flex py-1 text-sm cursor-pointer">
                  <span className="w-[100px]">{item.calories} kcal</span>
                  <span className="text-gray-700">{item.productName}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
