import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Physical AI & Humanoid Robotics',
    Svg: require('../../static/img/robotics-logo.svg').default,
    description: (
      <>
        Learn about the cutting-edge field of physical AI and humanoid robotics,
        combining machine learning with real-world physical interaction.
      </>
    ),
  },
  {
    title: 'ROS 2 Framework',
    // Using a fallback approach for missing SVG
    Svg: null, // Temporarily setting to null to avoid error
    description: (
      <>
        Master the Robot Operating System (ROS 2) for building sophisticated
        robotic applications and simulations.
      </>
    ),
  },
  {
    title: 'Digital Twins',
    // Using a fallback approach for missing SVG
    Svg: null, // Temporarily setting to null to avoid error
    description: (
      <>
        Explore simulation environments like Gazebo and Unity for creating
        digital twins of robotic systems.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {Svg ? <Svg className={styles.featureSvg} alt={title} /> : (
          <div className={styles.featureSvg} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f0f0f0',
            borderRadius: '50%',
            width: '200px',
            height: '200px',
            margin: '0 auto'
          }}>
            <span style={{ fontSize: '48px' }}>
              {title.includes('ROS') ? '🤖' :
               title.includes('Digital') ? '🌐' : '🦾'}
            </span>
          </div>
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}