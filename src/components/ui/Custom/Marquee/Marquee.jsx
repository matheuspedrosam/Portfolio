import styles from './Marquee.module.css'

export default function Marquee({children, className, gap}) {
    return (
        <div className={`${className} w-full overflow-hidden whitespace-nowrap relative p-3`}>
          <div className={`flex items-center ${gap ? `gap-${gap}` : 'gap-5'} ${styles.marqueeContent}`}>
            {children}
          </div>
        </div>
      );
}
