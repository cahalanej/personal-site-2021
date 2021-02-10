import resumePDF from '../../assets/pdfs/jennifer-cahalane-resume-w2021.pdf'

import Banner from '../../Components/Banner'
import ExperienceSection from './ExperienceSection'
import EducationSection from './EducationSection'
import SkillsSection from './SkillsSection'
import FunFactsSection from './FunFactsSection'

import styles from './Resume.module.css'
import globalStyles from '../../utils/GlobalStyles.module.css'

const Resume = () => (
	<div>
		<Banner activeItem="resume" pageTitle="Resume" />
		<main id="main" className={styles.main}>
			<nav aria-label="resume sections" className={styles.sectionNav}>
				<h2 className={globalStyles.visuallyHidden}>Resume Section</h2>
				<ul className={styles.navList}>
					<li className={styles.listItem}>
						<a className={globalStyles.link} href="#experience">
							Experience
						</a>
					</li>
					<li className={styles.listItem}>
						<a className={globalStyles.link} href="#education">
							Education
						</a>
					</li>
					<li className={styles.listItem}>
						<a className={globalStyles.link} href="#skills">
							Skills
						</a>
					</li>
					<li className={styles.listItem}>
						<a className={globalStyles.link} href="#fun-facts">
							Fun Facts
						</a>
					</li>
				</ul>
			</nav>
			<div className={styles.resume}>
				<h2 className={globalStyles.visuallyHidden}>Resume</h2>
				<a href={resumePDF} download={true} className={styles.downloadLink}>
					Download PDF
				</a>
				<div className={styles.resumeCard}>
					<ExperienceSection />
					<EducationSection />
					<SkillsSection />
					<FunFactsSection />
				</div>
			</div>
		</main>
	</div>
)

export default Resume
