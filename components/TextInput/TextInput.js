import classNames from '../../utils/classnames';

export default function TextInput({
    id,
    name,
    label,
    placeholder,
    value,
    onChange,
    onBlur,
    error,
    touched,
    ...props
}) {
    return (
        <div className="mb-2">
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 mb-1"
            >
                {label}
            </label>
            <input
                id={id}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                className={classNames(
                    'form-input block w-full sm:text-sm sm:leading-5 border-gray-300 rounded-md shadow-sm',
                    {
                        'border-red-500': error && touched,
                    }
                )}
                {...props}
            />
            <div className="text-red-500 text-xs italic mt-1">{error}</div>
        </div>
    );
}
