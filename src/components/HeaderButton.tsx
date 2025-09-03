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
        className={`rounded-t-xl px-10 py-3 shadow-2xl transition-colors ${
        isActive
          ? "bg-amber-300 text-white"   // active style
          : "bg-amber-700 text-gray-100 hover:bg-amber-500" // default style
      }`}
    >
            {children}
        </Link>
    )
}