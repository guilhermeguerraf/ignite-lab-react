import { DefaultUi, Player, Youtube } from "@vime/react"
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react"

import '@vime/core/themes/default.css'
import { Footer } from "./Footer"
import { useGetLessonBySlugQuery } from "../graphql/generated"

interface VideoProps {
  lessonSlug: string;
}

export function Video(props: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: props.lessonSlug,
    }
  })

  if (!data || !data.lesson) {
    return (
      <div className="flex-1">
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-h-[60vh] max-w-[1100px] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId} />
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto p-6">
        <div className="flex items-start gap-16">
          <div className="flex-1">
            <h1 className="mb-4 text-2xl font-bold">
              {data.lesson.title}
            </h1>
            <p className="text-gray-200 leading-relaxed mb-6">
              {data.lesson.description}
            </p>

            {data.lesson.teacher && (
              <div className="flex items-center gap-4 mb-20">
                <img
                  className="w-16 h-16 border-2 border-blue-500 rounded-full overflow-hidden"
                  src={data.lesson.teacher.avatarURL}
                  alt=""
                />

                <div className="leading-relaxed">
                  <strong className="text-2xl font-bold block">
                    {data.lesson.teacher.name}
                  </strong>
                  <span className="text-sm text-gray-200 block">
                    {data.lesson.teacher.bio}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <a href="" className="flex items-center justify-center gap-2 px-6 py-4 rounded text-sm bg-green-500 text-white uppercase hover:bg-green-700 transition-colors">
              <DiscordLogo size={24} />
              Comunidade no discord
            </a>
            <a href="" className="flex items-center justify-center gap-2 px-6 py-4 rounded border border-blue-500 text-sm text-blue-500 uppercase hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24} />
              Acesse o desafio
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 mb-20">
          <a href="" className="flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors">
            <div className="h-full flex items-center bg-green-700 px-6">
              <FileArrowDown size={40} />
            </div>
            <div className="flex flex-col justify-center py-6 leading-relaxed">
              <strong className="text-2xl mb-2">
                Material complementar
              </strong>
              <p className="text-sm text-gray-200">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full flex items-center text-blue-500 px-6">
              <CaretRight size={24} />
            </div>
          </a>

          <a href="" className="flex items-stretch gap-6 rounded overflow-hidden bg-gray-700 hover:bg-gray-600 transition-colors">
            <div className="h-full flex items-center bg-green-700 px-6">
              <FileArrowDown size={40} />
            </div>
            <div className="flex flex-col justify-center py-6 leading-relaxed">
              <strong className="text-2xl mb-2">
                Wallpapers exclusivos
              </strong>
              <p className="text-sm text-gray-200">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full flex items-center text-blue-500 px-6">
              <CaretRight size={24} />
            </div>
          </a>
        </div>

        <Footer />
      </div>
    </div>
  )
}