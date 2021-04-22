import styles from 'styles/elements/loader.module.scss'

const LoaderCircle = ({ children, size }) => (
  <div className={`${styles[`donut${size}`]} ${styles.donut}`}>{children}</div>
)

export default LoaderCircle
