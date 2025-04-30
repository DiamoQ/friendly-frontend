import './Logo.scss'
import classNames from 'classnames'
import logoImgSrc from "@/assets/logo/logo.svg";

const Logo = (props) => {
    const {
        className,
        loading
    } = props

   const title = 'Main Page'

    return (
        <a
            className={classNames(className, 'logo')}
            href="/"
            title={title}
            aria-labelledby={title}
        >
          <img
              className="logo__image"
              alt=""
              src={logoImgSrc}
              width={179}
              height={50}
              loading={loading}
          />
        </a>
    )
}

export default Logo