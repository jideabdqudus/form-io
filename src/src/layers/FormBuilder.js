import React, { useState } from "react";
import axios from "axios";
import { FormBuilder } from "react-formio";

const FormBuilder = () => {
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
  return (
    <div>
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
    </div>
  );
};

export default FormBuilder;
