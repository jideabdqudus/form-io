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
        roles: ["000000000000000000000000"],
        type: "create_own",
      },
      {
        roles: ["000000000000000000000000"],
        type: "create_all",
      },
      {
        roles: ["5faee824bfb582432b7754cf"],
        type: "read_own",
      },
      {
        roles: ["5faee824bfb58283bb7754cc"],
        type: "read_all",
      },
      {
        roles: ["5faee824bfb58283bb7754cc"],
        type: "update_own",
      },
      {
        roles: ["5faee824bfb58283bb7754cc"],
        type: "update_all",
      },
      {
        roles: ["5faee824bfb58283bb7754cc"],
        type: "delete_own",
      },
      {
        roles: ["5faee824bfb58283bb7754cc"],
        type: "delete_all",
      },
      {
        roles: [],
        type: "team_read",
      },
      {
        roles: [],
        type: "team_write",
      },
      {
        roles: [],
        type: "team_admin",
      },
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
    <div>
      <div class="page payment-page" id="section1">
        <div class="payment-form dark">
          <div class="container">
            <div class="block-heading">
              <h2 style={{ fontWeight: "900" }}>Create new form</h2>
              <p>Fill in your new form details and build it's features!</p>
            </div>
            <form onSubmit={onSubmit}>
              <div class="products">
                <h3 class="title">Form Details</h3>
                <div class="item">
                  <span class="price">Input</span>
                  <p class="item-name">{name}</p>
                  <p class="item-description">{title}</p>
                </div>
              </div>
              <div class="card-details">
                <h3 class="title">Fill in new form details</h3>
                <div class="row">
                  <div class="form-group col-sm-7">
                    <label for="card-holder">Title</label>
                    <input
                      id="card-holder"
                      type="text"
                      name="title"
                      value={title}
                      onChange={onChange}
                      required
                      autoFocus
                      class="form-control"
                      placeholder="Title"
                      aria-label="Title"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="form-group col-sm-5">
                    <label for="inputName">Name</label>
                    <div class="input-group expiration-date">
                      <input
                        type="text"
                        id="inputName"
                        name="name"
                        value={name}
                        onChange={onChange}
                        class="form-control"
                        placeholder="Name"
                        aria-label="Name"
                        required
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="form-group col-sm-8">
                    <label for="card-number">Path</label>
                    <input
                      id="card-number"
                      class="form-control"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                      type="text"
                      name="path"
                      value={path}
                      onChange={onChange}
                      placeholder="Path"
                      required
                    />
                  </div>
                  <div class="form-group col-sm-4">
                    <label for="cvc">Display</label>
                    <input
                      id="cvc"
                      type="text"
                      disabled
                      class="form-control"
                      placeholder="Form"
                      aria-label="Card Holder"
                      aria-describedby="basic-addon1"
                    />
                  </div>
                  <div class="form-group col-sm-12">
                    <a href="#section2">
                      <button
                        type="submit"
                        onChange={onChange}
                        value="submit"
                        class="btn btn-primary btn-block"
                      >
                        Proceed
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="jumbotron">
        <div class="container" id="section2">
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
      <div className="text-center container" style={{ paddingBottom: "50px" }}>
        <code>To share your form:</code>
        <a
          className="mt-5 mb-3 text-muted display-5 text-center"
          style={{ display: "block", fontSize: "30px" }}
          target="__blank"
          href={shareableLink}
        >
          {shareableLink}
        </a>
      </div>
    </div>
  );
};

export default FormInput;
