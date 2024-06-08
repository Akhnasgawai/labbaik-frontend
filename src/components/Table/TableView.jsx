import { Edit, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const TableView = ({ memberlist, tableHeadings, actions }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const membersPerPage = 9;
  const pagesVisited = currentPage * membersPerPage;

  const pageCount = Math.ceil(memberlist.length / membersPerPage);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  const TableHeadStyle = {
    color: `var(--text-color)`,
    backgroundColor: `var( --tertiary-color)`,
    height: "55px" /* Increase the height of the table head */,
    padding: "0 18px"
  };

  const TableFirstHeadStyle = {
    color: `var(--text-color)`,
    backgroundColor: `var( --tertiary-color)`,
    height: "55px",
    borderTopLeftRadius: "6px",
  };

  const TableLastHeadStyle = {
    color: `var(--text-color)`,
    backgroundColor: `var( --tertiary-color)`,
    height: "55px",
    borderTopRightRadius: "6px",
  };

  const TableDataStyle = {
    height: "55px" /* Increase the height of the table head */,
    padding: "0 20px",
  };
  return (
    <>
      <div className="table-container">
        <div className="table-responsive p-0 m-0">
          <ScrollableTableContainer className="table table-hover table-striped p-0 m-0 rounded-3">
            <thead style={{ verticalAlign: "middle" }} className="rounded-top">
              <tr>
                {tableHeadings.map((heading, index) => {
                  let style = TableHeadStyle;
                  if (index === 0) {
                    style = TableFirstHeadStyle;
                  } else if (index === tableHeadings.length - 1) {
                    style = TableLastHeadStyle;
                  }
                  return (
                    <th key={index} scope="col" style={style}>
                      {heading}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {memberlist
                .slice(pagesVisited, pagesVisited + membersPerPage)
                .map((member, index) => (
                  <tr key={index}>
                    {Object.keys(member).map((key, subIndex) => (
                      <td
                        key={subIndex}
                        style={TableDataStyle}
                        className={member[key].isIcon ? "text-center" : ""}
                      >
                        {member[key].content}
                      </td>
                    ))}
                    {actions.map((action, actionIndex) => (
                      <td
                        key={actionIndex}
                        className="text-center pointer"
                        style={TableDataStyle}
                      >
                        {action.type === "icon" && (
                          <span onClick={() => action.onClick(member)}>
                            {action.icon}
                          </span>
                        )}
                        {action.type === "button" && (
                          <button
                            className={action.className}
                            onClick={() => action.onClick(member)}
                          >
                            {action.label}
                          </button>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </ScrollableTableContainer>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <ReactPaginate
          previousLabel={"<"}
          pageRangeDisplayed={5}
          nextLabel={">"}
          pageCount={pageCount}
          onPageChange={changePage}
          className="d-flex justify-content-center gap-2 align-items-center mt-3"
          pageClassName="pagination-item border align-items-center"
          nextClassName="next-link border "
          previousClassName="prev-link border"
          previousLinkClassName="page-link "
          nextLinkClassName="page-link"
          activeClassName="active-page"
        />
      </div>
    </>
  );
};

export default TableView;

const ScrollableTableContainer = styled.table`
  overflow-x: auto;
  white-space: nowrap;

  /* Scrollbar styles for Webkit browsers */
  &::-webkit-scrollbar {
    height: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--primary-color);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    border-radius: 10px;
    border: 3px solid var(--primary-color);
  }

  /* Scrollbar styles for Firefox */
  scrollbar-width: thin;
  scrollbar-color: var(--secondary-color) var(--primary-color);
`;
