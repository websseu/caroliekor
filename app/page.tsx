import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Home() {
  return (
    <main className="mt-20 p-4">
      <h1 className="text-8xl poppins font-bold">Coffee</h1>

      <div className="flex mt-8">
        <aside className="aside">
          <h2 className="border-b border-gray-400">
            <span className="text-sm text-gray-600 poppins w200 line">
              FILTERS
            </span>
          </h2>
          <div className="filter">
            <button className="flex items-center gap-2 mt-2 mb-2">
              <MdOutlineKeyboardArrowDown className="text-gray-600" />
              <span className="text-sm text-gray-700">Topic</span>
            </button>
            <ul>
              <li className="pl-4 pb-1 text-xs">
                <button className="flex items-center gap-2">
                  <svg
                    className="size-3"
                    width="10"
                    height="9"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Checkbox icon</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 1L-3.49691e-07 1L-4.37113e-08 8L1 8L1 9L9 9L9 8L10 8L10 1L9 1L9 -3.93402e-07L1 -4.37114e-08L1 1ZM1 1L9 1L9 8L1 8L1 1ZM7 2L8 2L8 3L7 3L7 2ZM6 4L6 3L7 3L7 4L6 4ZM5 5L5 4L6 4L6 5L5 5ZM4 6L4 5L5 5L5 6L4 6ZM3 6L4 6L4 7L3 7L3 6ZM3 6L2 6L2 5L3 5L3 6Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Milk</span>
                </button>
              </li>
              <li className="pl-4 text-xs">
                <button className="flex items-center gap-2">
                  <svg
                    className="size-3"
                    width="10"
                    height="9"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Checkbox icon</title>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1 1L-3.49691e-07 1L-4.37113e-08 8L1 8L1 9L9 9L9 8L10 8L10 1L9 1L9 -3.93402e-07L1 -4.37114e-08L1 1ZM1 1L9 1L9 8L1 8L1 1Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span>Coffee</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>

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
            <ul>
              <li></li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
