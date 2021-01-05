import React from "react";
import { Route } from "react-router-dom";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import Home from "./views/Home";
import Form from "./views/Form";
import Event from "./views/Event";
import Auth from "./views/Auth/Auth";
import { AppConfig } from "./config";
//import {Form} from 'react-formio'

const App = () => (
  <div>
    <Header />
    <div className="container" id="main">
      {AppConfig.projectUrl === "https://reactstarter.form.io" ? (
        <div className="alert alert-warning">
          This app is still configured to use the default project. Be sure to
          create your own project in form.io and change the PROJECT_URL in
          src/config.js
        </div>
      ) : null}
      <Route exact path="/" component={Home} />
      <Route path="/form" component={Form} />
      <Route path="/event" component={Event} />
      <Route path="/auth" component={Auth} />
      {/* <Form src="https://pntjtuillpyztjb.form.io/testform1" /> */}
    </div>
    <Footer />
  </div>
);

export default App;






import React, { useState } from "react";
import axios from "axios";
import { FormEdit, FormBuilder } from "react-formio";

const App = () => {
  const [form, setForm] = useState({
    title: "",
    name: "",
    display: "form",
    type: "form",
    path: "",
    components: "",
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
        <FormBuilder
          form={{ display: "form" }}
          name="components"
          value={components}
          src={`https://pntjtuillpyztjb.form.io/${form.title}`}
          onChange={onChange}
        />
        <input type="submit" value="submit" onChange={onChange} />
      </form>
    </div>
  );
};

export default App;















import React, { useState } from "react";
import axios from "axios";
import { FormEdit, FormBuilder } from "react-formio";

const App = () => {
  // const [form, setForm] = useState({
  //   title: "",
  //   name: "",
  //   display: "form",
  //   type: "form",
  //   path: "",
  //   components: [],
  // });
  // const onChange = (e) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   // Send a POST request
  //   const config = {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "x-jwt-token":
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVmYWVlMzA4NGRkNDExNTgyYjk0NWRlNyJ9LCJmb3JtIjp7Il9pZCI6IjU1M2RiOTRlNzJmNzAyZTcxNGRkOTc3OSIsInByb2plY3QiOiI1NTNkYjkyZjcyZjcwMmU3MTRkZDk3NzgifSwib3JpZ2luIjoiaHR0cHM6Ly9hcGkuZm9ybS5pbyIsInByb2plY3QiOnsiX2lkIjoiNTUzZGI5MmY3MmY3MDJlNzE0ZGQ5Nzc4In0sImlhdCI6MTYwNTYxMzEyMiwiZXhwIjoxNjQxOTAxMTIyfQ.oL8Zg8wT3wVYsjYjOj4YlFv-wX3qrQwS-YaQ4Ag8Qoc",
  //     },
  //   };
  //   try {
  //     axios.post("https://pntjtuillpyztjb.form.io/form", form, config);
  //   } catch (error) {
  //     console.error(error.response.msg);
  //   }
  // };
  return (
    <div>
      {/* <h1>Form IO</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="Title"
          type="text"
          name="title"
          onChange={onChange}
        />
        <input placeholder="Name" type="text" name="name" onChange={onChange} />
        <input
          placeholder="Display as"
          type="text"
          name="display"
          onChange={onChange}
        />
        <input placeholder="Path" type="text" name="path" onChange={onChange} />
        <input type="submit" value="submit" onChange={onChange} />
       
      </form> */}
      <FormBuilder
          form={{ display: "form" }}
          src="https://pntjtuillpyztjb.form.io/testform1"
          onChange={(schema) => console.log(schema)}
          
        />
    </div>
  );
};

export default App;
