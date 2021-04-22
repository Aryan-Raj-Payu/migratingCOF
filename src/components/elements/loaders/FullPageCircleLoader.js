import LoaderCircle from 'components/elements/loaders/LoaderCircle'
import StateLoader from 'components/elements/loaders/StateLoader'

const FullPageCircleLoader = ({ title, position, opacity }) => (
  <StateLoader title={title} position={position} opacity={opacity}>
    <LoaderCircle>
      <span></span>
    </LoaderCircle>
  </StateLoader>
)

export default FullPageCircleLoader
