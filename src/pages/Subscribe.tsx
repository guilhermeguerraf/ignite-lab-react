import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [createSubscriber, { loading }] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()

    await createSubscriber({
      variables: {
        name,
        email,
      }
    })

    navigate('/event')
  }

  return (
    <div className="min-h-screen px-28 pt-20 flex flex-col items-center bg-blur bg-cover bg-no-repeat ">
      <div className="w-full max-w-[1100px] flex items-center justify-between mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="text-[2.5rem] leading-tight mt-8 mb-6">
            Construa uma <strong className="text-blue-500 font-medium">aplicação completa</strong>, do zero, com <strong className="text-blue-500 font-medium">React</strong>
          </h1>

          <p className="text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="bg-gray-700 p-8 border border-gray-500 rounded">
          <strong className="text-2xl text-gray-100 mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Seu nome completo"
              className="h-14 px-5 rounded bg-gray-900 text-gray-300 placeholder:text-gray-300"
              onChange={event => setName(event.target.value)}
            />
            <input
              type="email"
              placeholder="Digite seu e-mail"
              className="p-5 rounded bg-gray-900 text-gray-300 placeholder:text-gray-300"
              onChange={event => setEmail(event.target.value)}
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-4 px-6 py-4 rounded bg-green-500 text-white text-sm font-bold uppercase hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src="/src/images/code-mockup.png" className="max-w-[1100px]" alt="" />
    </div>
  )
} 