import React from "react"

const FormInput = ({
  register,
  errors,
  label,
  id,
  name,
  type,
  placeholder,
}) => {
  return (
    <div className="group">
      <input
        {...register(`${name}`)}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        onBlur={e => console.log("leave mail field")}
      />
      <span className="highlight"></span>
      <span className="bar"></span>
      <label htmlFor={name}>{label}</label>
      <p>{errors}</p>
    </div>
  )
}

export default FormInput
