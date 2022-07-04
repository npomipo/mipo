import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import { useContext } from 'react'
import cn from 'classnames'
import ProgramContext from '@/context/program/programContext'

const BtnAlpha = ({
  text = '',
  isDisabled = false,
  href = null,
  target = null
}) => {
  const { program } = useContext(ProgramContext)
  const altStyles =
    program?.category?.type === 'mba' ||
    program?.category?.type === 'profession'

  return (
    <>
      {href ? (
        <a
          className={cn({
            [stls.container]: true,
            [stls.altStyles]: altStyles
          })}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {text}
        </a>
      ) : (
        <button
          className={cn({
            [stls.container]: true,
            [stls.isDisabled]: isDisabled,
            [stls.altStyles]: altStyles
          })}
          disabled={isDisabled}>
          {text}
        </button>
      )}
    </>
  )
}

export default BtnAlpha
