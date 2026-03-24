export function Entry({ entry, date }) {
    return (
        <div className="w-full h-fit bg-neutral-200 p-5 rounded-3xl text-base text-neutral-900 font-base wrap-break-word flex flex-col gap-2 border-2 border-neutral-300/80">
            <div className="w-full h-fit flex items-center justify-end">
                <span className="text-sm font-medium text-neutral-500/80">{date}</span>
            </div>
            {entry}
        </div>
    );
}