export default function Card(props) {
  const { children, className, ...rest } = props;
  return (
    <div
      className={`w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ${className && className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
