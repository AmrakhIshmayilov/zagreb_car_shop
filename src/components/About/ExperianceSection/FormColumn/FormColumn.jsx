import React, { useEffect, useState } from "react";
import "./formColumn.css";
import selectArrow from "../../../../assets/images/select-arrow.png";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";
import { BsFillCircleFill } from "react-icons/bs";

const FormColumn = () => {
  const [dataForm, setDataForm] = useState({
    category: "",
    date: "",
    countryPickUp: "",
    countryDropOff: "",
    peoples: "",
    hireGroup: "",
  });
  useEffect(() => {
    $("#category").selectmenu({
      select: function (event, ui) {
        dataForm.category = ui.item.value;
      },
    });
    $("#countryPickUp").selectmenu({
      select: function (event, ui) {
        dataForm.countryPickUp = ui.item.value;
      },
    });
    $("#countryDropOff").selectmenu({
      select: function (event, ui) {
        dataForm.countryDropOff = ui.item.value;
      },
    });

    $("#date").datepicker({
      onSelect: function (dateText, inst) {
        dataForm.date = dateText;
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
    <div className="form-column col-lg-6 col-md-12 col-sm-12">
      <div className="inner-box">
        <div className="default-form">
          <form method="post">
            <div className="row clearfix">
              <div className="form-group country col-lg-6 col-md-6 col-sm-12">
                <div className="group-inner">
                  <div className="field-label">VEHICLE TYPE</div>
                  <select
                    name="category"
                    className="select-number"
                    id="category"
                    onChange={(e) => handleOnChange(e, "category")}
                    value={dataForm.category}
                  >
                    <option>SUV</option>
                    <option>SUV 1</option>
                    <option>SUV 2</option>
                    <option>SUV 3</option>
                    <option>SUV 4</option>
                  </select>
                </div>
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <div className="group-inner">
                  <div className="field-label">DEPARTURE DATE</div>
                  <input
                    type="text"
                    name="date"
                    value={dataForm.date}
                    id="date"
                    onChange={(e) => handleOnChange(e, "date")}
                  />
                </div>
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <div className="group-inner">
                  <div className="field-label">PICK UP LOCATION</div>
                  <div className="group-inner">
                    <select
                      name="countryPickUp"
                      className="select-number"
                      id="countryPickUp"
                      onChange={(e) => handleOnChange(e, "countryPickUp")}
                      value={dataForm.countryPickUp}
                    >
                      <option>Select Location</option>
                      <option>Pakistan</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>New Zealand</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group col-lg-6 col-md-6 col-sm-12">
                <div className="group-inner">
                  <div className="field-label">DROP OFF LOCATION</div>
                  <div className="group-inner">
                    <select
                      name="countryDropOff"
                      className="select-number"
                      id="countryDropOff"
                      onChange={(e) => handleOnChange(e, "countryDropOff")}
                      value={dataForm.countryDropOff}
                    >
                      <option>Select Location</option>
                      <option>Pakistan</option>
                      <option>Australia</option>
                      <option>Canada</option>
                      <option>New Zealand</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="lower-form-box">
              <div className="row clearfix">
                <div className="form-group col-lg-12 col-md-12 col-sm-12 no-margin">
                  <div className="group-inner">
                    <div className="input-label">
                      HOW MANY PEOPLES (INCLUDING CHILDREN)?
                    </div>
                    <input
                      className="number-of-people"
                      type="text"
                      name="peoples"
                      value={dataForm.peoples}
                      placeholder=""
                      onChange={(e) => handleOnChange(e, "peoples")}
                    />
                  </div>
                </div>

                <div className="form-group col-xl-12 col-lg-12 col-md-12 col-sm-12 ">
                  <div className="select-box">
                    <input
                      type="radio"
                      name="hireGroup"
                      id="radio-one"
                      onChange={(e) => handleOnChange(e, "hireGroup")}
                      value="RETURN"
                    />
                    <label htmlFor="radio-one">
                      <span className="default-check"></span>
                      <BsFillCircleFill className="check-icon fa fa-circle" />
                      RETURN
                    </label>
                  </div>

                  <div className="select-box">
                    <input
                      type="radio"
                      name="hireGroup"
                      id="radio-two"
                      onChange={(e) => handleOnChange(e, "hireGroup")}
                      value="ONE WAY"
                    />
                    <label htmlFor="radio-two">
                      <span className="default-check"></span>
                      <BsFillCircleFill className="check-icon fa fa-circle" />
                      ONE WAY
                    </label>
                  </div>
                </div>

                <div className="form-group col-lg-12 col-md-12 col-sm-12 text-left">
                  <button type="submit" className="btn-zagreb">
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormColumn;
