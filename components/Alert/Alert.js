import { CheckCircleIcon, XIcon } from '@heroicons/react/solid';
import classNames from '../../utils/classnames';

export default function Alert({ message, onXClick }) {
    return (
        <div className="rounded-md bg-green-100 p-4 mt-3">
            <div className="flex">
                <div className="flex-shrink-0">
                    <CheckCircleIcon
                        className="h-5 w-5 text-green-400"
                        aria-hidden="true"
                    />
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">
                        {message}
                    </p>
                </div>
                <div className="ml-auto pl-3">
                    <div className="-mx-1.5 -my-1.5">
                        <button
                            type="button"
                            className={classNames(
                                `inline-flex bg-green-100 rounded-md p-1.5 text-green-500`,
                                `hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600`,
                                `focus:ring-offset-2 focus:ring-offset-green-50`
                            )}
                            onClick={onXClick}
                        >
                            <span className="sr-only">Dismiss</span>
                            <XIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
