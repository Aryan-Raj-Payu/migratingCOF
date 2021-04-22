import Button from 'components/elements/Button'

import { main, contentContainer, cardContainer } from 'styles/base/page.module.scss'
import {
  container,
  iconCircle,
  primaryText,
  secondaryText
} from 'styles/pages/message-screen.module.scss'

const MessageScreen = ({
  title,
  subtitle,
  Icon,
  showCircleIcon,
  actionText,
  actionHandler,
  customCardContainerStyles
}) => {
  return (
    <div className={main}>
      <div className={contentContainer}>
        <div className={`${cardContainer} ${customCardContainerStyles}`}>
          <div className={container}>
            {showCircleIcon && <div className={iconCircle}></div>}
            {Icon && Icon}
            <div className={primaryText}>{title}</div>
            <div className={secondaryText}>{subtitle}</div>
            {actionText && (
              <Button variant="Primary" size="Large" onClick={actionHandler}>
                {actionText}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MessageScreen
