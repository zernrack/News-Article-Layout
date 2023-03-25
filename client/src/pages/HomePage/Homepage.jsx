import React from "react";
import ContentsPage from "../ContentPage/ContentsPage";

function ArticlePage() {
  return (
    <>
      <div className="flex ml-44 items-start flex-col gap-2 border-solid border-2 pl-20 pt-12">
        <span className="font-bold text-xl">News Article</span>
        <ContentsPage />
      </div>
    </>
  );
}

export default ArticlePage;
