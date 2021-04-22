import PropTypes from 'prop-types'

import {
  partyCard,
  logo,
  infoContainer,
  title as titleStyle,
  subTitle as subTitleStyle
} from 'styles/application-flow/components/party-card.module.scss'

const PartyCard = ({ icon, title, subtitle }) => {
  return (
    <div className={partyCard}>
      <div className={logo}>
        <img src={icon} alt={icon} />
      </div>
      <div className={infoContainer}>
        <span className={titleStyle}>{title}</span>
        <span className={subTitleStyle}>₹ {subtitle}</span>
      </div>
    </div>
  )
}

PartyCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.Number
}

export default PartyCard
