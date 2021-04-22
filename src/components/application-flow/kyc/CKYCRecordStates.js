import StateLoader from 'components/elements/loaders/StateLoader'

const CKCYRecoredStates = ({ title, imageName, position }) => (
  <StateLoader title={title} position={position}>
    <img src={`/images/${imageName}.png`} alt={imageName} width="150" />
  </StateLoader>
)

export default CKCYRecoredStates
