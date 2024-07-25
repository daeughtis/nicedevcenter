import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '이해하기 쉬워요!',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        쉽고 직관적인 개발 연동<br/>코드 몇 줄로 연동할 수 있어요
      </>
    ),
  },
  {
    title: '지급 결제 Know-How가 한눈에!',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        지급결제 관련 용어, 기술 <br/>한눈에 파악 가능합니다.
      </>
    ),
  },
  {
    title: '서비스에 대한 개념 & 블로그',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        NICE정보통신의 서비스 개념 설명<br/> 기술 블로그, 커뮤니티
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
