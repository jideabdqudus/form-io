import React, { useState } from "react";
import axios from "axios";
import { FormBuilder } from "react-formio";

const FormInput = () => {
  //Set Form State
  const [form, setForm] = useState({
    title: "",
    name: "",
    display: "form",
    type: "form",
    path: "",
    submissionAccess: [
      {
      roles: [
      "000000000000000000000000"
      ],
      type: "create_own"
      },
      {
      roles: [
      "000000000000000000000000"
      ],
      type: "create_all"
      },
      {
      roles: [
      "5faee824bfb582432b7754cf"
      ],
      type: "read_own"
      },
      {
      roles: [
      "5faee824bfb58283bb7754cc"
      ],
      type: "read_all"
      },
      {
      roles: [
      "5faee824bfb58283bb7754cc"
      ],
      type: "update_own"
      },
      {
      roles: [
      "5faee824bfb58283bb7754cc"
      ],
      type: "update_all"
      },
      {
      roles: [
      "5faee824bfb58283bb7754cc"
      ],
      type: "delete_own"
      },
      {
      roles: [
      "5faee824bfb58283bb7754cc"
      ],
      type: "delete_all"
      },
      {
      roles: [],
      type: "team_read"
      },
      {
      roles: [],
      type: "team_write"
      },
      {
      roles: [],
      type: "team_admin"
      }
      ],
  });

  //Deconstruct form data values
  const { title, name, path } = form;

  //On form change
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  //On form submit
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // Send a POST request
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-jwt-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYWVlMzA4NGRkNDExNTgyYjk0NWRlNyJ9LCJmb3JtIjp7Il9pZCI6IjU1M2RiOTRlNzJmNzAyZTcxNGRkOTc3OSIsInByb2plY3QiOiI1NTNkYjkyZjcyZjcwMmU3MTRkZDk3NzgifSwib3JpZ2luIjoiaHR0cHM6Ly9hcGkuZm9ybS5pbyIsInByb2plY3QiOnsiX2lkIjoiNTUzZGI5MmY3MmY3MDJlNzE0ZGQ5Nzc4In0sImlhdCI6MTYwNTYxMzEyMiwiZXhwIjoxNjQxOTAxMTIyfQ.oL8Zg8wT3wVYsjYjOj4YlFv-wX3qrQwS-YaQ4Ag8Qoc",
      },
    };
    try {
      axios.post("https://pntjtuillpyztjb.form.io/form", form, config);
    } catch (error) {
      console.error(error.response.msg);
    }
  };

  // Set form builder state
  const [builder, setBuilder] = useState({
    components: {},
  });

  // On formbuilder submitted
  const onSubmitBuilder = (e) => {
    e.preventDefault();
    console.log(builder);
    // Send a PUT request
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-jwt-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYWVlMzA4NGRkNDExNTgyYjk0NWRlNyJ9LCJmb3JtIjp7Il9pZCI6IjU1M2RiOTRlNzJmNzAyZTcxNGRkOTc3OSIsInByb2plY3QiOiI1NTNkYjkyZjcyZjcwMmU3MTRkZDk3NzgifSwib3JpZ2luIjoiaHR0cHM6Ly9hcGkuZm9ybS5pbyIsInByb2plY3QiOnsiX2lkIjoiNTUzZGI5MmY3MmY3MDJlNzE0ZGQ5Nzc4In0sImlhdCI6MTYwNTYxMzEyMiwiZXhwIjoxNjQxOTAxMTIyfQ.oL8Zg8wT3wVYsjYjOj4YlFv-wX3qrQwS-YaQ4Ag8Qoc",
      },
    };
    try {
      axios.put(`https://pntjtuillpyztjb.form.io/${path}`, builder, config);
    } catch (error) {
      console.error(error.response.msg);
    }
  };

  const shareableLink = `https://pro.formview.io/#/pntjtuillpyztjb/${path}?header=1&reset=1`;

  return (
    <div
      style={{ display: "absolute", alignItems: "center", paddingTop: "50px" }}
    >
      <div className="text-center">
        <form className="form-signin" onSubmit={onSubmit}>
          {/* <img className="mb-4" src={Logo} alt="Logo" /> */}
          <h1 className="h3 mb-3 font-weight-normal">Create new form</h1>
          <label htmlFor="inputTite" className="sr-only">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
            id="inputTitle"
            className="form-control"
            placeholder="Title"
            required
            autoFocus
          />
          <label htmlFor="inputName" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="inputName"
            name="name"
            value={name}
            onChange={onChange}
            className="form-control"
            placeholder="Name"
            required
          />
          {/* <label htmlFor="inputDisplay" className="sr-only">
            Display as
          </label>
          <input
            type="text"
            id="inputDisplay"
            name="display"
            className="form-control"
            placeholder="Displaying as form"
            disabled
          /> */}
          <label htmlFor="inputPath" className="sr-only">
            Path
          </label>
          <input
            type="text"
            id="inputPath"
            name="path"
            value={path}
            onChange={onChange}
            className="form-control"
            placeholder="Path"
            required
          />
          <button
            className="btn btn-lg btn-primary btn-block"
            type="submit"
            onChange={onChange}
            value="submit"
          >
            Go
          </button>
        </form>
        <br />
        <br />
      </div>
      <div class="jumbotron">
        <div class="container">
          <form onSubmit={onSubmitBuilder}>
            <FormBuilder
              form={{ display: "form" }}
              src={`https://pntjtuillpyztjb.form.io/form`}
              onChange={(schema) => {
                console.log(schema);
                setBuilder(schema);
              }}
              onSubmit={onSubmitBuilder}
            />
            <br />
            <button
              type="submit"
              value="submit"
              className="btn btn-lg btn-primary btn-block"
            >
              Submit Form
            </button>
          </form>
        </div>
      </div>
      <div className="text-center container">
        <code>To share your form:</code>
        <h1 className="mt-5 mb-3 text-muted display-5 text-center">
          {shareableLink}
        </h1>
      </div>
    </div>
  );
};

export default FormInput;
