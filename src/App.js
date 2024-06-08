import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ViewMembers from "./pages/viewMembers/ViewMembers";
import AddMembers from "./pages/addMembers/AddMembers";
import ViewUsers from "./pages/viewUsers/ViewUsers";
import AddUsers from "./pages/addUsers/AddUsers";
import SideBar from "./components/SideBar/SideBar";
import "./styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [collapseState, setCollapsedState] = useState(false);
  return (
    <Router>
      <ToastContainer containerId="1" />
      <div className="d-flex">
        <SideBar
          collapseState={collapseState}
          setCollapsedState={setCollapsedState}
        />
        <StyledContainer collapsed={collapseState}>
          <Routes>
            <Route path="/" element={<ViewMembers />} />
            <Route path="/view_members" element={<ViewMembers />} />
            <Route path="/add_members" element={<AddMembers />} />
            <Route path="/view_users" element={<ViewUsers />} />
            <Route path="/add_users" element={<AddUsers />} />
          </Routes>
        </StyledContainer>
      </div>
    </Router>
  );
}

export default App;

const StyledContainer = styled.div`
  width: ${(props) => props.width || "100%"}; /* Dynamic width based on props */
  overflow-y: auto;
  height: 100vh;
  overflow-x: hidden;
  background-color: #e1f7f5;
  margin-left: ${(props) => (props.collapsed ? "4rem" : "14rem")};
`;
