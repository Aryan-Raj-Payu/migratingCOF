import styles from 'styles/elements/loader.module.scss'

const StateLoader = ({ title, position, opacity, children }) => (
  <div className={`${styles.stateLoaderContainer} ${styles[position]} ${styles[opacity]}`}>
    {children}
    <span>{title}</span>
  </div>
)

export default StateLoader
