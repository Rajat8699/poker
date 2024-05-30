import { Textarea } from '@headlessui/react'
import clsx from 'clsx'

export default function CustomTextArea(props) {
    const {rows, className, ...rest} = props;
  return (
        <Textarea
          className= {`mt-3 block w-full rounded-lg border-none bg-white bg-opacity-25 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 ${className && className}`}
          rows={rows || 3}
          {...rest}
        />
  )
}
