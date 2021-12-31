import classNames from '../../utils/classnames';

export default function Button({
    variant,
    alignText,
    rounded,
    children,
    className,
    onClick,
    type,
    disabled,
    ...rest
}) {
    return (
        <button
            className={classNames(
                `inline-flex px-4 py-2 text-sm font-medium text-white`,
                `border border-transparent shadow-sm`,
                variant === 'primary' && `bg-blue-600 hover:bg-blue-700`,
                variant === 'secondary' && `bg-gray-600 hover:bg-gray-700`,
                variant === 'success' && `bg-green-600 hover:bg-green-700`,
                alignText === 'left' && `text-left`,
                alignText === 'center' && `text-center`,
                rounded === 'full' && `rounded-md`,
                rounded === 'top' && `rounded-t-md`,
                className
            )}
            type={type}
            disabled={disabled}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
