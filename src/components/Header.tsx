import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="w-full bg-gray-700 py-5 border-b border-gray-600 flex items-center justify-center">
      <Logo />
    </header>
  )
}