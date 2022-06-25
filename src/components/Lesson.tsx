import { Link, useParams } from 'react-router-dom'
import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>()

  const isAlailableLesson = isPast(props.availableAt)
  const avilableDateFotmatted = format(props.availableAt, "EEEE' • 'd' de 'MMMM' • 'k'h'mm", {
    locale: ptBR,
  })

  const isActiveLesson = slug === props.slug

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">
        {avilableDateFotmatted}
      </span>

      <div
        className={classNames('p-4 border border-gray-500 rounded mt-2 group-hover:border-green-500 transition-colors', {
          'bg-green-500': isActiveLesson,
        })}
      >
        <header className="flex items-center justify-between">
          {isAlailableLesson ? (

            <span className={classNames('flex items-center gap-2 text-sm font-medium', {
              'text-white': isActiveLesson,
              'text-blue-500': !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm font-medium text-orange-500">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span className={classNames('py-[0.125rem] px-2 border rounded text-white font-bold text-xs', {
            'border-white': isActiveLesson,
            'border-green-300': !isActiveLesson,
          })}>
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong className={classNames('mt-4 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}