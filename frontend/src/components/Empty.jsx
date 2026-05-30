import { PackageOpen } from "lucide-react";

const EmptyState = ({
    title = "No Items Available",
    description = "There is nothing to display right now.",
}) => {
    return (
        <div className="w-full min-h-full flex flex-col items-center justify-center px-4 py-10 text-center">
            <div className="flex items-center justify-center size-16 sm:size-20 rounded-full bg-gray-100">
                <PackageOpen className="size-8 sm:size-10 text-gray-400" />
            </div>

            <h2 className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                {title}
            </h2>

            <p className="mt-2 max-w-md text-sm sm:text-base text-gray-500">
                {description}
            </p>
        </div>
    );
};

export default EmptyState