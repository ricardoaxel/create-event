import { ArrowIcon, SuccessIcon } from "@components/icons";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

import clsx from "clsx";

export interface SelectorOption {
  id: number | string;
  name: string;
}

export interface SelectorProps {
  options: SelectorOption[];
  value: SelectorOption;
  onChange: (selected: SelectorOption) => void;
  inputContainerClasses?: string;
}

export const Selector: React.FC<SelectorProps> = ({
  options,
  value,
  onChange,
  inputContainerClasses,
}) => {
  return (
    <Listbox value={value} onChange={onChange}>
      <div className="w-full">
        <ListboxButton className={inputContainerClasses}>
          {value.name}
          <ArrowIcon className="mr-[6px]" />
        </ListboxButton>
        <ListboxOptions
          anchor="bottom"
          transition
          className={clsx(
            "w-[var(--button-width)] rounded-[8px] bg-selection/90 z-50 focus:outline-none border border-primary/10",
            "transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0"
          )}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option}
              className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white/10"
            >
              <SuccessIcon
                className="invisible group-data-[selected]:visible"
                strokeColor="rgba(var(--success))"
              />
              <div className="text-sm/6 ">{option.name}</div>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
};
