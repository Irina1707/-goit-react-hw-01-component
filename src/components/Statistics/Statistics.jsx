import PropTypes from 'prop-types';
//import css from './Statistics.module.css';
import {Stat, StatTitle, StatList, StatItem, StatLabel} from './Statistics.styled'

export const Statistics = ({ title, stats }) => {
    return (
    <Stat>
        {title && <StatTitle>{title}</StatTitle>}
            <StatList>
            {stats.map(({ id, label, percentage }) =>
    <StatItem key={id}>
      <StatLabel>{label}</StatLabel>
      <span>{percentage} %</span>
    </StatItem>)} 
  </StatList> 
</Stat>
)
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
    }))
}