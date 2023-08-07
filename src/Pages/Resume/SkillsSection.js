import { resume } from '../../data/resume'
import styles from './Resume.module.css'

const Skill = ({ skill }) => (
	<div className={styles.skillContent}>
		<p className={styles.body}>{skill.title}</p>
	</div>
)

const SkillsSection = () => (
	<div>
		<h3 id="skills" className={styles.primary}>
			Skills
		</h3>
		<div className={styles.section}>
			{resume['Skills'].map((skill) => (
				<Skill skill={skill} key={skill.title} />
			))}
		</div>
	</div>
)

export default SkillsSection
