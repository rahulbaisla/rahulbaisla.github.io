import React from 'react';


class  LandingPage extends React.Component {
  render() {
    return (
    <div className="landing-page">
        <main>
          <div id="intro" className="intro">Hello I'm Rahul Baisla</div>
          <div id="tagLine" className="tagline">Cloud Engineer | Full Stack Developer</div>
          <div id="social-icons" className="icons-social">
            <a target="_blank" href="https://github.com/rahulbaisla"><i className="fab fa-github" title="GitHub"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/rahulbaisla"><i className="fab fa-linkedin" title="LinkedIn"></i></a>
            <a target="_blank" href="https://cloudnamaste.com"><i className="fab fa-mixcloud" title="CloudNamaste"></i></a>
            <a target="_blank" href="RahulBaisla-Resume.pdf"><i className="fas fa-file-alt" title="Download Resume"></i></a>
            <a target="_blank" href="https://www.facebook.com/rahulbaisla"><i className="fab fa-facebook" title="Facebook"></i></a>
            <a target="_blank" href="https://www.instagram.com/strength.letic"><i className="fab fa-instagram" title="Instagram"></i></a> 
          </div>
        </main>
    </div>
    );
  };
};
export default LandingPage;
