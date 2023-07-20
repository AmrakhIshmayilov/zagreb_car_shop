import React, { useEffect, useState } from "react";
import "./sidebarWidget.css";
import "nouislider/distribute/nouislider.css";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import Nouislider from "nouislider-react";
import selectArrow from "../../../../assets/images/select-arrow.png";
// import { BsFillCircleFill } from "react-icons/bs";

const SidebarWidget = () => {
  const [dataForm, setDataForm] = useState({
    brand: "",
    model: "",
    carStyle: "",
    carType: "",
    carColor: "",
  });

  useEffect(() => {
    $("#brand").selectmenu({
      select: function (event, ui) {
        dataForm.brand = ui.item.value;
      },
    });
    $("#model").selectmenu({
      select: function (event, ui) {
        dataForm.model = ui.item.value;
      },
    });
    $("#carStyle").selectmenu({
      select: function (event, ui) {
        dataForm.carStyle = ui.item.value;
      },
    });
    $("#carType").selectmenu({
      select: function (event, ui) {
        dataForm.carType = ui.item.value;
      },
    });
    $("#carColor").selectmenu({
      select: function (event, ui) {
        dataForm.carColor = ui.item.value;
      },
    });

    $("[name=hireGroup]").on("click", function () {
      var params = $(this).next().text();
      dataForm.hireGroup = params;
    });

    $(".ui-selectmenu-icon.ui-icon").css({
      backgroundImage: `url(${selectArrow})`,
    });

    $(".default-form .form-group .select-box").on("click", function () {});
  }, [dataForm]);

  const handleOnChange = (e, type) => {
    setDataForm({
      ...dataForm,
      [type]: e.currentTarget.value,
    });
  };

  return (
    <div className="widget sidebar-widget sidebar-form">
      <h3>REFINE SEARCH</h3>
      <div className="widget-box">
        <div className="widget-content">
          <div className="default-form">
            <form method="post">
              <div className="form-group country">
                <div className="group-inner">
                  <select
                    name="brand"
                    className="select-number"
                    id="brand"
                    onChange={(e) => handleOnChange(e, "brand")}
                    value={dataForm.brand}
                  >
                    <option>Select Brand</option>
                    <option>Brand 1</option>
                    <option>Brand 2</option>
                    <option>Brand 3</option>
                    <option>Brand 4</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <div className="group-inner">
                  <div className="group-inner">
                    <select
                      name="model"
                      className="select-number"
                      id="model"
                      onChange={(e) => handleOnChange(e, "model")}
                      value={dataForm.model}
                    >
                      <option>Select Car Model</option>
                      <option>Honda</option>
                      <option>Civic</option>
                      <option>Toyota</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="group-inner">
                  <div className="group-inner">
                    <select
                      name="carStyle"
                      className="select-number"
                      id="carStyle"
                      onChange={(e) => handleOnChange(e, "carStyle")}
                      value={dataForm.carStyle}
                    >
                      <option>Select a Style</option>
                      <option>Style 1</option>
                      <option>Style 2</option>
                      <option>Style 3</option>
                      <option>Style 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="widget rangeslider-widget sidebar-widget">
                <div className="field-label">Filter By Price</div>
                <Nouislider
                  className="range-slider-price"
                  range={{ min: 0, max: 100 }}
                  start={[20, 80]}
                  connect
                />
              </div>

              <div className="form-group">
                <div className="group-inner">
                  <div className="group-inner">
                    <select
                      name="carType"
                      className="select-number"
                      id="carType"
                      onChange={(e) => handleOnChange(e, "carType")}
                      value={dataForm.carType}
                    >
                      <option>Select Car Types</option>
                      <option>Type 1</option>
                      <option>Type 2</option>
                      <option>Type 3</option>
                      <option>Type 4</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="group-inner">
                  <div className="group-inner">
                    <select
                      name="carColor"
                      className="select-number"
                      id="carColor"
                      onChange={(e) => handleOnChange(e, "carColor")}
                      value={dataForm.carColor}
                    >
                      <option>Select Car Color</option>
                      <option>Black</option>
                      <option>Grey</option>
                      <option>White</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <button
                  type="submit"
                  className="theme-btn btn-style-one btn-zagreb w-100"
                >
                  SEARCH NOW
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarWidget;
