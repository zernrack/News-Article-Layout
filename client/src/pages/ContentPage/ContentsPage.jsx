import React, { useState } from "react";
import { Modal } from "@mui/material";
import MOCK_DATA from "../../MOCK_DATA.json";
import Badges from "./Badges";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";

function ContentsPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [data, setData] = useState(MOCK_DATA);

  const handleCheckboxChange = (id) => {
    if (selectedCheckboxes.includes(id)) {
      setSelectedCheckboxes(selectedCheckboxes.filter((item) => item !== id));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, id]);
    }
  };

  const handleDelete = () => {
    setData(data.filter((item) => !selectedCheckboxes.includes(item.id)));
    setSelectedCheckboxes([]);
    setSelectedContent(null);
  };

  const handleReadMore = (content) => {
    setSelectedContent(content);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="btn-container-home pl-4 flex justify-between">
        <div className="flex items-center gap-2 pr-2">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600 "
            checked={selectedCheckboxes.length === data.length}
            onChange={() =>
              setSelectedCheckboxes(
                selectedCheckboxes.length === data.length
                  ? []
                  : data.map((item) => item.id)
              )
            }
          />
        </div>
        <button
          type="button"
          className="text-red-700 hover:text-white border border-blue-700-700 hover:bg-blue-800-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-200 "
        >
          PUBLISH
        </button>
        <button
          type="button"
          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-200"
          onClick={handleDelete}
          disabled={selectedCheckboxes.length === 0}
        >
          DELETE
        </button>
        <div className="search-container flex justify-end ml-[68rem]">
          <input
            className="border-solid border-2 bg-white rounded-md "
            type="text"
            placeholder="Search..."
          />
        </div>
      </div>
      {data &&
        data.map((content) => {
          return (
            <div
              className="container flex flex-col border-solid border-2 h-20 overflow-hidden w-auto pl-10 bg-gray-100"
              key={content.id}
            >
              <div className="flex flex-row">
                <div className="flex items-center gap-2 pr-2">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600 "
                    onChange={() => handleCheckboxChange(content.id)}
                    checked={selectedCheckboxes.includes(content.id)}
                  />
                </div>
                <div className="title font-bold">{content.title}</div>
              </div>
              <div className="container-secondLine flex gap-2 justify-between">
                <div className="container-author-date flex ml-6">
                  <div className="author flex gap-1">
                    <AccountCircleOutlinedIcon className="text-green-500" />
                    <span className="font-semibold text-gray-500">
                      {content.author}
                    </span>
                  </div>
                  <div className="date flex gap-1">
                    <CalendarMonthRoundedIcon className="text-green-500" />
                    <span className="font-semibold text-gray-500">
                      {content.date}
                    </span>
                  </div>
                </div>
                <div className="flex justify-end items-end">
                  <Badges text="#Sports" />
                  <Badges text="#Worldwide" />
                  <Badges text="#Local" />
                </div>
              </div>
              <div className="flex">
                <div className="container-content text-gray-500 font-light w-2/4 ml-6">
                  {content.content}
                </div>
                <span
                  onClick={() => handleReadMore(content)}
                  className="text-blue-500 cursor-pointer"
                >
                  <VisibilityIcon />
                  Read more
                </span>
              </div>
            </div>
          );
        })}
      {selectedContent && (
        <Modal open={modalIsOpen} onClose={handleCloseModal}>
          <div className="container-modalContent absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 w-[25%] bg-white p-4 rounded-md pl-10">
            <div className="container-content-placement flex items-start flex-col gap-3">
              <div className="content-Header flex justify-start p-0 flex-col gap-10">
                <div className="flex flex-row justify-arou">
                  <h2 className="font-bold">{selectedContent.title}</h2>
                  <button onClick={handleCloseModal}>
                    <CloseIcon />
                  </button>
                </div>
                <div className="flex gap-1 text-gray-600 font-semibold">
                  <p>{selectedContent.author} |</p>
                  <p>{selectedContent.date}</p>
                </div>
              </div>
              <div className="border-dotted border-2 w-96 p-2 bg-white border-gray-700">
                <p>{selectedContent.content}</p>
              </div>
            </div>
            <div className="modal-btn-container justify-center items-center flex mt-2">
              <button
                type="button"
                className="text-red-700 hover:text-white border border-blue-700-700 hover:bg-blue-800-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-white dark:hover:text-white dark:hover:bg-blue-200 bg-blue-500"
              >
                PUBLISH
              </button>
              <button
                type="button"
                className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-white dark:hover:text-white dark:hover:bg-red-200 bg-red-600"
                onClick={() => {
                  setSelectedCheckboxes(
                    selectedCheckboxes.filter((id) => id !== selectedContent.id)
                  );
                  setSelectedContent(null);
                  setModalIsOpen(false);
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

export default ContentsPage;
