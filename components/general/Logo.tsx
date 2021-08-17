import stls from '@/styles/components/general/Logo.module.sass'
import classNames from 'classnames'
import Link from 'next/link'
import { IconLogo } from '@/components/icons'
import { routeHome } from '@/data/routes'

const Logo = ({ atHeader = false, withTitle = true }) => {
  return (
    <div className={stls.container}>
      <Link href={routeHome}>
        <a
          className={classNames({
            [stls.logo]: true,
            [stls.atHeader]: atHeader
          })}>
          <IconLogo withTitle={withTitle} />
          {withTitle && (
            <p className={stls.title}>
              Московский <br />
              Институт <br />
              Психологии
            </p>
          )}
        </a>
      </Link>
    </div>
  )
}

export default Logo
