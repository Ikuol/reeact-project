export default function InputError({ message, className = "", ...props }) {
  return message ? (
    <p {...props} className={"text-xs text-red " + className}>
      {message}
    </p>
  ) : null;
}
