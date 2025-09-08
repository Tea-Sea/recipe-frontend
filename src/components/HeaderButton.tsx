import { Link, type LinkProps, useLocation} from "react-router-dom"

type HeaderButtonProps = {
  children: React.ReactNode
} & LinkProps

export default function HeaderButton({ children, to, ...props }: HeaderButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link
        to={to}
        {...props}
        className={`rounded-t-xl px-10 pt-3 pb-2.75 border-amber-700 border-t-4 transition ${
        isActive
          ? "bg-amber-200 text-amber-700 border-black shadow-none pb-4"   // active style
          : "bg-amber-700 text-amber-100 hover:bg-amber-400 hover:shadow-amber-500 hover:shadow-lg/40" // default style
      }`}
    >
            {children}
        </Link>
    )
}