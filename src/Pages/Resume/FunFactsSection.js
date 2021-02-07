import { resume } from '../../data/resume'
import styles from './Resume.module.css'

const FunFactsSection = () => (
	<div>
		<h3 id="fun-facts" className={styles.primary}>
			Fun Facts
		</h3>
		<ul>
			{resume['FunFacts'].map((fact) => (
				<li className={styles.body} key={fact.replaceAll(' ', '').substr(10)}>
					{fact}
				</li>
			))}
		</ul>
	</div>
)

export default FunFactsSection
