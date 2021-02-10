import { Link } from 'react-router-dom'
import classnames from 'classnames'

import styles from './Banner.module.css'
import globalStyles from '../../utils/GlobalStyles.module.css'

import github from '../../assets/github-icon.png'
import linkedIn from '../../assets/linkedin-icon.png'

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
		<div className={styles.navLinkLists}>
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
			<nav aria-label="social media navigation">
				<ul className={styles.navList}>
					<li className={styles.navListItem}>
						<a
							href="https://www.linkedin.com/in/jennifer-cahalane-5b511362/"
							className={styles.navLink}
						>
							<img
								className={styles.navImage}
								src={linkedIn}
								alt="Jennifer Cahalane's LinkedIn"
							/>
						</a>
					</li>
					<li className={styles.navListItem}>
						<a
							href="https://www.github.com/cahalanej"
							className={styles.navLink}
						>
							<img
								className={styles.navImage}
								src={github}
								alt="Jennifer Cahalane's Github"
							/>
						</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
)

export default Banner
