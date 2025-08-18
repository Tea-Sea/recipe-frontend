import { Link, type LinkProps } from "react-router-dom"

type HeaderButtonProps = {
  children: React.ReactNode
} & LinkProps

export default function HeaderButton({ children, ...props }: HeaderButtonProps) {
    return (
        <Link {...props} className="bg-amber-300">
            {children}
        </Link>
    )
}