import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <nav className={`
            min-w-52 flex flex-col gap-1
            bg-zinc-700 rounded-lg p-2
        `}>
            <MenuItem label="Link #1" />
            <MenuItem label="Link #2" />
            <MenuItem label="Link #3" />
        </nav>
    )
}