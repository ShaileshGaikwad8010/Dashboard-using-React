import React from 'react';
import { NavLink } from 'react-router-dom';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";

function Dashboard1() {
  return (
    <div className="App__c1">
        <div className="App__c1__r1">
          <div>
            <div className="chart">
            </div>
            <p className="App__c1__r1__title">Shailesh Gaikwad</p>
            <p className="App__c1__r1__desc">Frontend Developer</p>
          </div>
          <div className="App__c1__r1__info">
            <div className="App__c1__r1__info__1">
              <p style={{ fontWeight: "600" }}> 51 </p>
              <p style={{ fontWeight: "200" }}> Projects</p>
            </div>
            <div className="App__c1__r1__info__2">
              <p style={{ fontWeight: "600" }}> Rs ***** </p>
              <p style={{ fontWeight: "200" }}> Revenue </p>
            </div>
          </div>
        </div>

        <div className="App__c1__r2">
          <NavLink exact to="/" className="App__c1__r2__1" activeClassName="active">
            <FolderOpenOutlinedIcon /> Dashboard1
          </NavLink>
          <NavLink to="/dashboard3" className="App__c1__r2__1">
            <FolderOpenOutlinedIcon /> Dashboard2
          </NavLink>
          <NavLink to="/dashboard4" className="App__c1__r2__1">
            <FolderOpenOutlinedIcon /> Dashboard3
          </NavLink>
          
        </div>
        <div className="App__c1__r3">
          <p className="App__c1__r1__title">Contact us</p>
          <p className="App__c1__r1__desc cnt">+91 80107 778440</p>
        </div>
    </div>
  );
}

export default Dashboard1;
