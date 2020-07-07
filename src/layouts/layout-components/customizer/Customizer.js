import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  setTheme,
  setDir,
  setSidebarPos,
  setHeaderPos,
  setLayout,
  setSidebarType,
} from "../../../redux/settings/Action";

export default () => {
  const settings = useSelector((state) => state.settings);

  const dispatch = useDispatch();

  const toggle = () => {
    document
      .getElementById("customizer")
      .classList.toggle("show-service-panel");
  };

  return (
    <aside className="customizer" id="customizer">
      {/*--------------------------------------------------------------------------------*/}
      {/* Toggle Customizer From Here                                                    */}
      {/*--------------------------------------------------------------------------------*/}
      <span
        className="service-panel-toggle text-white"
        onClick={toggle.bind(null)}
      >
        <i className="fa fa-spin fa-cog"></i>
      </span>
      <PerfectScrollbar>
        <div className="customizer-body">
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Theme Color</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeTheme === "light" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-color"
                  id="theme-light"
                  onClick={() => dispatch(setTheme("light"))}
                />{" "}
                Light
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeTheme === "dark" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-color"
                  id="theme-dark"
                  onClick={() => dispatch(setTheme("dark"))}
                />{" "}
                Dark
              </label>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Sidebar Position</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarPos === "fixed" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="sidebar-position"
                  id="sidebar-fixed"
                  onClick={() => dispatch(setSidebarPos("fixed"))}
                />{" "}
                Fixed
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarPos === "absolute" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="sidebar-position"
                  id="sidebar-absolute"
                  onClick={() => dispatch(setSidebarPos("absolute"))}
                />{" "}
                Not Fixed
              </label>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Header Position</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeHeaderPos === "fixed" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="header-position"
                  id="header-fixed"
                  onClick={() => dispatch(setHeaderPos("fixed"))}
                />{" "}
                Fixed
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeHeaderPos === "absolute" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="header-position"
                  id="header-absolute"
                  onClick={() => dispatch(setHeaderPos("absolute"))}
                />{" "}
                Not Fixed
              </label>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Layout</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeLayout === "full" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-layout"
                  id="theme-full"
                  onClick={() => dispatch(setLayout("full"))}
                />{" "}
                Full
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeLayout === "boxed" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-layout"
                  id="theme-boxed"
                  onClick={() => dispatch(setLayout("boxed"))}
                />{" "}
                Boxed
              </label>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Direction</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeDir === "ltr" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-dir"
                  id="theme-ltr"
                  onClick={() => dispatch(setDir("ltr"))}
                />{" "}
                LTR
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeDir === "rtl" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-dir"
                  id="theme-rtl"
                  onClick={() => dispatch(setDir("rtl"))}
                />{" "}
                RTL
              </label>
            </div>
          </div>
          <div className="mt-3 border-bottom px-3">
            <h5 className="font-medium m-0">Sidebar Type</h5>
            <div
              className="btn-group btn-group-toggle mt-2 mb-3"
              data-toggle="buttons"
            >
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarType === "full" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-sidebar"
                  id="sidebar-full"
                  onClick={() => dispatch(setSidebarType("full"))}
                />{" "}
                Full
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarType === "mini-sidebar"
                    ? "active"
                    : "")
                }
              >
                <input
                  type="radio"
                  name="theme-sidebar"
                  id="sidebar-mini"
                  onClick={() => dispatch(setSidebarType("mini-sidebar"))}
                />{" "}
                Mini
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarType === "iconbar" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-sidebar"
                  id="sidebar-icon"
                  onClick={() => dispatch(setSidebarType("iconbar"))}
                />{" "}
                Icon
              </label>
              <label
                className={
                  "btn btn-outline-secondary " +
                  (settings.activeSidebarType === "overlay" ? "active" : "")
                }
              >
                <input
                  type="radio"
                  name="theme-sidebar"
                  id="sidebar-overlay"
                  onClick={() => dispatch(setSidebarType("overlay"))}
                />{" "}
                Overlay
              </label>
            </div>
          </div>
        </div>
      </PerfectScrollbar>
    </aside>
  );
};
