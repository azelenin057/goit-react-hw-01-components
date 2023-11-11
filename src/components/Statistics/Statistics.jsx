import React from 'react';
import css from './statistical.module.css';

const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>

    <ul className={css.stat_list}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
    )
}

export default Statistics;