import classnames from 'classnames'
import { resume } from '../../data/resume'
import styles from './Resume.module.css'
import globalStyles from '../../utils/GlobalStyles.module.css'

const Skill = ({ skill }) => (
	<div className={styles.content}>
		<div className={styles.spacedSiblings}>
			<p className={styles.body}>{skill.title}</p>
			<p className={globalStyles.visuallyHidden}>{`${skill.stars}/5 stars`}</p>
			<p className={classnames(styles.dates, styles.stars)} aria-hidden={true}>
				{[...Array(5)].map((_, index) => (
					<span
						className={classnames({
							[styles.filledStar]: index < skill.stars,
							[styles.emptyStar]: index >= skill.stars,
						})}
					/>
				))}
			</p>
		</div>
	</div>
)

const Category = ({ category }) => (
	<div>
		<h4 className={styles.secondary}>{category.category}</h4>
		{category.skills.map((skill) => (
			<Skill key={`${skill.title}-${category.category}`} skill={skill} />
		))}
	</div>
)

const SkillsSection = () => (
	<div>
		<h3 id="skills" className={styles.primary}>
			Skills
		</h3>
		<div className={styles.section}>
			{resume['Skills'].map((category) => (
				<Category category={category} key={category.category} />
			))}
		</div>
	</div>
)

export default SkillsSection
