/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <img src={'http://localhost:3000/img/logo.png'} height={75}/>
        <div className="inner">
          <ProjectTitle />
          <h3>Display screenshots anywhere with the best screenshot automation tool<br />
            Lightning fast PDF generation from URLs and HTML</h3>

          <h3>We've captured over 500k unique screenshots and PDFs<br />
            Served over a million requests</h3>
          <PromoSection>
            <Button href="https://capture.techulus.in/console">Get started for FREE</Button>
            <Button href="https://capture.techulus.in/console">Already using Capture? Sign in</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: 'HTML5 Test Score',
        image: 'https://cdn.capture.techulus.in/e1ab7054-dabc-48d6-a33f-c18038aac1c8/396aaa7ea2068643ebed52b0218b0909/image?url=http://html5test.com&delay=3',
        imageAlign: 'top',
        title: 'HTML5 Test Score',
      },
      {
        content: 'Render Webfonts, Typekit',
        image: 'https://cdn.capture.techulus.in/e1ab7054-dabc-48d6-a33f-c18038aac1c8/57e5f2213e61d8374f5f138e3ccd2a78/image?url=https://typekit.com/&delay=3',
        imageAlign: 'top',
        title: 'Feature Two',
      },
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Feature Callout</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: 'We cache all your requests so that you don\'t have pay for the same request again.',
        title: 'Super-fast CDN',
      },
      {
        content: 'All requests are rendered in real time using our fast APIs, we can provide high throughput as per your requirement.',
        title: 'Queue-less API',
      },
      {
        content: 'You can monitor KPIs such as the number of requests, API response times etc using our console.',
        title: 'Analytics',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: 'There is no subscription required, just purchase our credits and use them when required',
        title: 'Pay as you Go',
      },
      {
        content: 'Get 1000 credits when you signup, try Capture for free.',
        title: 'Free Credits',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: 'This is another description of how this project is useful',
        image: imgUrl('docusaurus.svg'),
        imageAlign: 'right',
        title: 'Description',
      },
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl('users.html', props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          {/* <Features /> */}
          {/* <FeatureCallout /> */}
          <LearnHow />
          <TryOut />
          {/* <Description /> */}
          {/* <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
