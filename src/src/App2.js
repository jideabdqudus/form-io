import React, { useState } from "react";
import axios from "axios";
import { FormEdit, FormBuilder, Form } from "react-formio";

const App = () => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    display: "form",
    type: "form",
    path: "",
  });

  const { title, name, display, type, path, components } = form;
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

  const [builder, setBuilder] = useState({
    components: {},
  });
  // const onEditForm = (schema) => {
  //   console.log(schema);
  //   setBuilder(schema);
  // };
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
  return (
    <div>
      <h1>Form IO</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          type="text"
          value={title}
          name="title"
          onChange={onChange}
        />
        <input
          placeholder="Name"
          type="text"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          placeholder="Display as"
          type="text"
          value={display}
          name="display"
          onChange={onChange}
        />
        <input
          placeholder="Path"
          type="text"
          value={path}
          name="path"
          onChange={onChange}
        />
        <input type="submit" value="submit" onChange={onChange} />
      </form>
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
        <input type="submit" value="submit" />
      </form>
      <div>
        <Form
          src={`https://pntjtuillpyztjb.form.io/testform1`}
          onSubmit={console.log}
        />
        <h1>
          https://pro.formview.io/#/pntjtuillpyztjb/testform1?header=1&reset=1
        </h1>
      </div>
    </div>
  );
};

export default App;
