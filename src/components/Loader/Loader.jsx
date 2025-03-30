import styles from './Loader.module.css'

export default function Loader({size, className}) {
    return <div style={{width: size, height: size}} className={`${className} ${styles.loader} border-t-slate-900`}></div>
}
