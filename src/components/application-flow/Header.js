import PropTypes from 'prop-types'
import Router from 'next/router'

import useToggleState from 'hooks/useToggleState'

import Button from 'components/elements/Button'
import ICBackArrow from 'components/icons/ICBackArrow'
import ICCross from 'components/icons/ICCross'
import LasyPayLogo from 'components/icons/LasyPayLogo'

import EmiOfferModal from 'components/application-flow/modals/EmiOfferModal'

import { title as titleStyle, logo } from 'styles/elements/header.module.scss'

const Header = ({ title, backRoute, backRouteUrl, icon, showLpLogo }) => {
  const { isOpen, onToggle } = useToggleState()
  const toggleModal = () => {
    onToggle()
  }
  const handleClick = () => {
    backRoute ? routeToBack() : onToggle()
  }

  const routeToBack = () => {
    Router.replace(backRouteUrl)
  }

  return (
    <>
      <Button variant="Icon" size="ExtraSmall" onClick={handleClick}>
        {icon === 'back-arrow' ? <ICBackArrow /> : <ICCross />}
      </Button>
      {title && <span className={titleStyle}>{title}</span>}
      {showLpLogo && (
        <div className={logo}>
          <span>powered by</span>
          <LasyPayLogo width="123" height="16" />
        </div>
      )}
      {isOpen && <EmiOfferModal submitActionHandler={toggleModal} closeHandler={toggleModal} />}
    </>
  )
}

Header.defaultProps = {
  title: '',
  backRoute: false,
  backRouteUrl: '',
  icon: 'back-arrow',
  showLpLogo: true
}

Header.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  backRoute: PropTypes.bool,
  backRouteUrl: PropTypes.string,
  showLpLogo: PropTypes.bool
}

export default Header
