import { resume } from '../../data/resume'
import styles from './Resume.module.css'

const Role = ({ role }) => (
	<div className={styles.content}>
		<div className={styles.spacedSiblings}>
			<h5 className={styles.tertiary}>{role.position}</h5>
			<p className={styles.dates}>{role.dates}</p>
		</div>
		<p className={styles.body}>
		<ul>
			{role.description.map(item => (
				<li className={styles.expListItem}>{item}</li>
			))}
			{role.tools && (
				<li className={styles.expListItem}>
					<em>Technologies used: {role.tools}</em>
				</li>
			)}
		</ul>
		</p>
	</div>
)

const Company = ({ company }) => (
	<div>
		<h4 className={styles.secondary}>{company.company}</h4>
		{company.roles.map((role) => (
			<Role key={`${role.position}-${company.company}`} role={role} />
		))}
	</div>
)

const ExperienceSection = () => (
	<div>
		<h3 id="experience" className={styles.primary}>
			Experience
		</h3>
		<div className={styles.section}>
			{resume['Experience'].map((company) => (
				<Company company={company} key={company.company} />
			))}
		</div>
	</div>
)

export default ExperienceSection
