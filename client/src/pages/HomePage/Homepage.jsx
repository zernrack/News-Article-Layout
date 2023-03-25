import React from "react";
import ContentsPage from "../ContentPage/ContentsPage";

function ArticlePage() {
  return (
    <>
      <div className="flex ml-44 items-start flex-col gap-2 border-solid border-2 pl-20 pt-12">
        <span className="font-bold text-xl">News Article</span>
        <div className="btn-container-home pl-4 flex justify-between">
          <div className="flex items-center gap-2 pr-2">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600 "
            />
          </div>
          <button
            type="button"
            class="text-red-700 hover:text-white border border-blue-700-700 hover:bg-blue-800-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-200 "
          >
            PUBLISH
          </button>
          <button
            type="button"
            class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-200"
          >
            DELETE
          </button>
          <div className="search-container flex justify-end ml-[70rem]">
            <input
              className="border-solid border-2 bg-white rounded-md "
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        <ContentsPage />
      </div>
    </>
  );
}

export default ArticlePage;
