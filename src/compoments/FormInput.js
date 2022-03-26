import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { observer } from "mobx-react";
import remindStore from "../layouts/RemindStore";
import "react-datepicker/dist/react-datepicker.css";
const FormInput = () => {
  useEffect(() => {
    remindStore.popupRemind();
  }, []);
  const [valueForm, setvalueForm] = useState({
    content: "",
    date: "",
  });
  const [errors, setErrors] = useState({
    content: "",
    date: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;
    setvalueForm({
      date: valueForm.date,
      content: e.target.value,
    });
    if (!value) {
      setErrors({ [name]: `vui lòng nhập ${name} ` });
    } else {
      setErrors({ [name]: "" });
    }
  };
  const handleChangeDate = (e) => {
    setvalueForm({
      content: valueForm.content,
      date: e.toLocaleDateString(),
    });
  };
  const submit = (e) => {
    e.preventDefault();
    if (!valueForm.content && !valueForm.date) {
      setErrors({
        date: "Bạn chưa chọn Ngày Nhắc.",
        content: "Bạn chưa nhập Nội Dung.",
      });
      return;
    }

    if (!valueForm.content) {
      setErrors({ ...errors, content: "Bạn chưa nhập Nội Dung." });
      return;
    }
    if (!valueForm.date) {
      setErrors({ ...errors, date: "Bạn chưa chọn Ngày Nhắc." });
      return;
    }

    setvalueForm({
      content: "",
      date: "",
    });
    remindStore.handleSubmit(valueForm, errors, e);
  };
  return (
    <div className="col">
      <form className="form-inline" action="#" onSubmit={(e) => submit(e)}>
        <div className="form-group">
          <label className="content" htmlFor="content">
            Nội dung
          </label>
          <input
            value={valueForm.content}
            type="text"
            className="form-control"
            id="content"
            name="content"
            onChange={(e) => handleInput(e)}
            autoComplete="off"
          ></input>
        </div>
        <div className="form-group">
          <label className="date" htmlFor="date">
            Ngày nhắc
          </label>
          <div className="flex-group">
            <DatePicker
              className="inputDate rounded"
              placeholderText="dd/mm/yyyy"
              value={valueForm.date}
              minDate={new Date()}
              autoComplete="off"
              onChange={(e) => {
                handleChangeDate(e);
              }}
              name="date"
            ></DatePicker>
            <button className="btn">Lưu Ngày</button>
          </div>
        </div>
      </form>
      <div className="error" style={{ color: "red" }}>
        <p>{errors.content}</p>
        <p>{errors.date}</p>
      </div>
    </div>
  );
};

export default observer(FormInput);
