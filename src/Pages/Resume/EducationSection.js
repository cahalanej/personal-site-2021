import { resume } from '../../data/resume'
import styles from './Resume.module.css'

const School = ({ school }) => (
	<div>
		<h4 className={styles.secondary}>{school.school}</h4>
		<div className={styles.content}>
			<p className={styles.tertiary}>{school.degree}</p>
			<p className={styles.body}>Graduated {school.graduation}</p>
		</div>
	</div>
)

const EducationSection = () => (
	<div>
		<h3 id="education" className={styles.primary}>
			Education
		</h3>
		<div className={styles.section}>
			{resume['Education'].map((school) => (
				<School school={school} key={school.school} />
			))}
		</div>
	</div>
)

export default EducationSection
