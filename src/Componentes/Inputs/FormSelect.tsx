import { Fragment } from 'react';
import { ListboxOption,ListboxOptions,ListboxButton,Listbox,Label,Transition} from '@headlessui/react';
import { FaChevronDown,FaChevronUp, FaCheck } from 'react-icons/fa';

interface Option {
    value: string;
    label: string;
}

interface FormSelectProps {
    name: string;
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    error?: string;
}

export default function FormSelect({ name, label, value, onChange, options, error }: FormSelectProps) {
    const selectedOption = options.find(option => option.value === value);

    return (
        <div className="w-full">
            <Listbox value={value} onChange={onChange} name={name}>
                <div className="relative">
                    <Label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </Label>

                    <ListboxButton className={`
                        relative w-full cursor-default rounded-md bg-white py-2 pl-3 pr-10 text-left border
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-secondary-color
                        ${error ? 'border-red-500' : 'border-gray-300'}
                    `}>
                        {({ open }) => (
                            <>
                            <span className="block truncate">{selectedOption?.label}</span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                {/* Usamos a variável 'open' para decidir qual ícone mostrar */}
                                {open ? (
                                <FaChevronUp className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                ) : (
                                <FaChevronDown className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                )}
                            </span>
                            </>
                        )}
                    </ListboxButton>
                    
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <ListboxOptions className="absolute divide-y divide-gray-200 mt-1 border-2 border-gray-100 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm z-10">
                            {options.map((option) => (
                                <ListboxOption
                                    key={option.value}
                                    className="relative cursor-pointer py-1.5 md:py-2 pl-10 pr-4 hover:bg-gray-100 ui-active:text-white ui-not-active:text-gray-900"
                                    value={option.value}
                                >
                                    <span className="block truncate ui-selected:font-semibold ui-not-selected:font-normal">
                                        {option.label}
                                    </span>
                                    
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-green-600 ui-not-selected:hidden">
                                        <FaCheck className="text-secondary-color h-4 w-4" aria-hidden="true" />
                                    </span>
                                </ListboxOption>
                            ))}
                        </ListboxOptions>
                    </Transition>
                </div>
            </Listbox>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    );
}