import { Input } from "@headlessui/react";

export default function CustomInput(props) {
  const { className, ...rest } = props;
  return (
    <Input className={`block w-full rounded-lg border-none bg-white bg-opacity-25 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${className && className}`} {...rest}/>
  )
}
