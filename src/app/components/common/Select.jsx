"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Transition,
} from "@headlessui/react";
import { useEffect, useState } from "react";
export default function Select(props) {
  const { options, onChange, value } = props;
  const [selected, setSelected] = useState(null);
  
  useEffect(()=>{
    setSelected(value)
  },[])

  const handleChange = (e) => {
    setSelected(e);
    onChange(e);
  };

  return (
      <Listbox value={selected} onChange={setSelected}>
        <ListboxButton
          className={
            "relative block mt-3 w-full rounded-lg border-none bg-white bg-opacity-25 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
          }
        >
            <div className="flex flex-row items-center justify-between">
          {selected?.name || selected || "Select option"}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          </div>
        </ListboxButton>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ListboxOptions
            anchor="bottom"
            className="w-[var(--button-width)] rounded-xl border border-white/5 bg-black/80 p-1 [--anchor-gap:var(--spacing-1)] focus:outline-none"
          >
            {Array.isArray(options) && options.length ? (
              options.map((option) => (
                <ListboxOption
                  key={option.name || option}
                  value={option}
                  onClick={(e)=>handleChange(option)}
                  className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/60"
                >
                  {JSON.stringify(option) === JSON.stringify(selected) && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 12.75 6 6 9-13.5"
                    />
                  </svg>}
                  <div className="text-sm/6 text-white">
                    {option.name || option}
                  </div>
                </ListboxOption>
              ))
            ) : (
              <ListboxOption
                value={null}
                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>

                <div className="text-sm/6 text-white">No data</div>
              </ListboxOption>
            )}
          </ListboxOptions>
        </Transition>
      </Listbox>
  );
}
