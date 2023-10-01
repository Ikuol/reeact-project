export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return (
    <label {...props} className={`font-normal text-main ` + className}>
      {value || children}
    </label>
  );
}
