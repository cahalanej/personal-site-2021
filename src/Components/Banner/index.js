import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './Banner.module.css'
import globalStyles from '../../utils/GlobalStyles.module.css'

const CurrentElement = () => (
	<span className={globalStyles.visuallyHidden}>Current page: </span>
)

const Banner = ({ activeItem, pageTitle }) => (
	<div className={styles.heroBanner}>
		<header>
			<a
				href="#main"
				className={classnames(styles.skipLink, globalStyles.visuallyHidden)}
			>
				Skip To Main
			</a>
			<p className={styles.logo}>
				<span className={styles.firstName}>Jennifer</span>
				<span className={styles.lastName}> Cahalane</span>
			</p>
			<h1 className={globalStyles.visuallyHidden}>
				Jennifer Cahalane | {pageTitle}
			</h1>
		</header>
		<nav aria-label="site navigation">
			<ul className={styles.navList}>
				<li className={styles.navListItem}>
					<Link
						to="/about"
						className={classnames(
							{ [styles.activeLink]: activeItem === 'about' },
							styles.navLink
						)}
					>
						{activeItem === 'about' && <CurrentElement />}
						About
					</Link>
				</li>
				<li className={styles.navListItem}>
					<Link
						to="/resume"
						className={classnames(
							{ [styles.activeLink]: activeItem === 'resume' },
							styles.navLink
						)}
					>
						{activeItem === 'resume' && <CurrentElement />}
						Resume
					</Link>
				</li>
			</ul>
		</nav>
	</div>
)

export default Banner
