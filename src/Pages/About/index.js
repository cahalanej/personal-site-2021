import hobbiton from '../../assets/jennifer-cahalane-hobbiton.jpg'

import Banner from '../../Components/Banner'
import styles from './About.module.css'
import globalStyles from '../../utils/GlobalStyles.module.css'

const About = () => (
	<div>
		<Banner activeItem="about" pageTitle="About" />
		<main id="main" className={styles.wrapper}>
			<img
				src={hobbiton}
				alt="Jennifer Cahalane, smiling and wearing a green cloak, sits in front of a hobbit door in Hobbiton"
				className={styles.image}
			/>
			<div className={styles.content}>
				<h2 className={styles.heading}>Why hello there!</h2>
				<p className={styles.body}>
					It's so lovely to meet you! My name is Jenny Cahalane and I'm a
					software engineer who cares passionately about the user and believes
					that code should be used to help make the world a better place. My
					work has recently been focused on improving quality and accessibility,
					and it's given me a new perspective on how I approach web development.
				</p>
				<p className={styles.body}>
					I'm a habitual{' '}
					<a
						className={globalStyles.link}
						href="http://www.instagram.com/dinosandgiraffes"
					>
						maker
					</a>
					, and frequently spend my free time dyeing yarn and crocheting plushie
					dinosaurs and unicorns. This year I'm working on improving my sewing
					skills by creating a wardrobe of handmade clothing. When I'm not
					immersed in one craft or another, I enjoy hanging out in the air,
					preferably upside down and wrapped in aerial silks.
				</p>
				<p className={styles.body}>
					Fun facts:
					<ul>
						<li>I consume excessive amounts of espresso and Earl Gray tea</li>
						<li>
							I'm an avid explorer, and can typically be found adventuring with
							a camera in hand
						</li>
						<li>My socks rarely match</li>
						<li>
							My dog's name is an adorable rescue mix name{' '}
							<a
								className={globalStyles.link}
								href="https://www.instagram.com/pascal.barks"
							>
								Pascal
							</a>
						</li>
						<li>Not a hobbit</li>
					</ul>
				</p>
			</div>
		</main>
	</div>
)

export default About
