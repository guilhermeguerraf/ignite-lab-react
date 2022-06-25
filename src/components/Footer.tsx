import { RocketseatLogo } from "./RocketseatLogo";

export function Footer() {
  return (
    <footer className="mt-6 pt-6 border-t border-gray-500 flex items-center gap-6">
      <RocketseatLogo />
      <span className="flex-1 text-gray-300">
        Feito com ♥ durante o Ignite Lab proporcionado pela Rocketseat
      </span>
      <a href="" className="text-gray-300">
        Políticas de privacidade
      </a>
    </footer>
  )
}