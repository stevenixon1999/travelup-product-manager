function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  error
}) {
  return (
    <div className="form-group">

      {label && <label htmlFor={name}>{label}</label>}

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />

      {error && (
        <p className="form-error">
          {error}
        </p>
      )}

    </div>
  );
}

export default FormField;