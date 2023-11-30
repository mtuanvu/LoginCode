import ErrorIcon from "./icons/Error";
import Valid from "./icons/Valid";
export default function Input(props) {
  return (
    <div
      className={`input-group ${
        !props.isValid && props.isTouched
          ? "invalid"
          : `${props.isvalid && props.isTouched ? "valid" : ""}`
      }`}
    >
      <label htmlFor={props.name}>{props.label}</label>
      <input
        className="input"
        name={props.name}
        type={props.type}
        placehoder={props.placehoder}
        value={props.value}
        onChange={(e) => props.onChange(e)}
      />
      <span className="input-error">
        {`${!props.isValid && props.isTouched ? props.errorMsg : ""}`}
      </span>
      <div className="input_icon">
        {props.isTouched && !props.isValid && <ErrorIcon />}
        {props.isTouched && props.isValid && <Valid />}
      </div>
    </div>
  );
}
