import React from "react";

class Home extends React.Component {
    render() {
        return (
            <div>
               {/* <!--/ Nav Star /--> */}


{/*/ Nav Star /*/}
        <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll" href="#page-top">Mohau Comfort Mahlakwane Portfolio</a>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link js-scroll active" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#about">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#service">My Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#work">Other Interests</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/*/ Nav End /*/}
        {/*/ Intro Skew Star /*/}
        <div id="home" className="intro route bg-image" style={{backgroundImage: 'url(img/intro-pic.jpg)'}}>
          <div className="overlay-itro" />
          <div className="intro-content display-table">
            <div className="table-cell">
              <div className="container">
                {/*<p class="display-6 color-d">Hello, world!</p>*/}
                <h1 className="intro-title mb-4">I am Mohau Mahlakwane</h1>
                <p className="intro-subtitle"><span className="text-slider-items">An Aspiring IT Specialist,Computer Science,Software Engineering,Frontend Developer,Backend Developer</span><strong className="text-slider" /></p>
                {/* <p class="pt-3"><a class="btn btn-primary btn js-scroll px-4" href="#about" role="button">Learn More</a></p> */}
              </div>
            </div>
          </div>
        </div>
        {/*/ Intro Skew End /*/}
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-sm-6 col-md-5">
                          <div className="about-img">
                            <img src="img/DP.jpg" className="img-fluid rounded b-shadow-a" alt="" />
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-7">
                          <div className="about-info">
                            <p><span className="title-s">Name: </span> <span>Mohau Comfort Mahlakwane</span></p>
                            <p><span className="title-s">Profile: </span> <span>Full stack developer</span></p>
                            <p><span className="title-s">Email: </span> <span>ledmo98@gmail.com</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="skill-mf">
                        <p className="title-s">Tech Stack</p>
                        <span>SQL Databases</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>C#</span> <span className="pull-right">80%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '80%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Java</span> <span className="pull-right">90%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Angular</span> <span className="pull-right">65%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>React Js</span> <span className="pull-right">65%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>ASP.net</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>ASP.net</span> <span className="pull-right">85%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '85%'}} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>C++</span> <span className="pull-right">75%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '75%'}} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Visual Basics</span> <span className="pull-right">95%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>Assembly</span> <span className="pull-right">60%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '60%'}} aria-valuenow={60} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                        <span>HTML &amp; CSS</span> <span className="pull-right">95%</span>
                        <div className="progress">
                          <div className="progress-bar" role="progressbar" style={{width: '95%'}} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">
                            About me
                          </h5>
                        </div>
                        <p className="lead">
                          I am a young African male currently studying for a Bachelor of Science degree
                          in IT, specializing in Computer Science and Informatics at the University of Johannesburg. Growing up I fell in love
                          with Tech and I ended up deciding to choose a career in IT because the idea excited me and the passion I have for technology
                          is amazing hence I chose to be part of the future of our world.
                        </p><p className="lead">
                          I grew up in a township in Pretoria, called Soshanguve. With limited resources in high school I was unable to learn much about coding
                          or IT specifically. Today I can be proud to say that I am studying full time at one of the most prestigious Univiersities in 
                          South Africa.
                        </p>
                        <p className="lead">
                          I am an organized and dependable candidate successful at managing multiple priorities with a positive attitude. 
                          I have the willingness to take on added responsibilities to meet team or organization goals. 
                          I am a hardworking and passionate job seeker with strong organizational skills eager to secure entry-level position in the working environment. 
                          I am ready to help any company or organization to achieve their goals and to enhance my skills for personal growth in this field, should they require my services.
                        </p>
                        <p className="lead">
                          In my time at UJ, I have learnt problem solving skills using what I was taught in the course. I am able to design SQL databases, link them to a web service
                          &amp; host them. I consider myself a fullstack developer because I know how to create web services and link them to web applications and mobile applications.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ Section Services Star /*/}
        <section id="service" className="services-mf route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    My Skills
                  </h3>
                  <p className="subtitle-a">
                    These are the skills that I am currently equipped with.
                  </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="ion-monitor" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Design</h2>
                    <p className="s-description text-center">
                      I can design websites, using html, css and javascript. I can also host simple html, css and javascript websites.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="ion-code-working" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Web Development</h2>
                    <p className="s-description text-center">
                      I can develop frontend and backend functionalties for web applications.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="ion-android-phone-portrait" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Mobile Development</h2>
                    <p className="s-description text-center">
                      I can develop mobile applications as well. I am still learning cross-platform development as well.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="service-box">
                  <div className="service-ico">
                    <span className="ico-circle"><i className="ion-stats-bars" /></span>
                  </div>
                  <div className="service-content">
                    <h2 className="s-title">Data Processing</h2>
                    <p className="s-description text-center">
                      I can create functionality that can process data using database information.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ Section Services End /*/}
        <div className="section-counter paralax-mf bg-image" style={{backgroundImage: 'url(img/counters-bg.jpg)'}}>
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="ion-checkmark-round" /></span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">4</p>
                    <span className="counter-text">Projects COMPLETED</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="ion-ios-calendar-outline" /></span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">1</p>
                    <span className="counter-text">YEARS OF EXPERIENCE</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="ion-ios-people" /></span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">3</p>
                    <span className="counter-text">TOTAL CLIENTS</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-3 col-lg-3">
                <div className="counter-box pt-4 pt-md-0">
                  <div className="counter-ico">
                    <span className="ico-circle"><i className="ion-ribbon-a" /></span>
                  </div>
                  <div className="counter-num">
                    <p className="counter">1</p>
                    <span className="counter-text">AWARD WON</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Section Portfolio Star /*/}
        <section id="work" className="portfolio-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="title-box text-center">
                  <h3 className="title-a">
                    Other Life Interests
                  </h3>
                  <p className="subtitle-a">
                    I am not just a software engineer, I have other interests in life, I am a sports enthusiast &amp; a fitness enthusiast because I believe a healthy mind requires a healthy body.
                    I listen to music on my spare time, watch a lot of football (soccer) because I am also a footballer and I also follow twitter trends just to keep my sanity.
                  </p>
                  <div className="line-mf" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="work-box">
                  <a href="img/Footballer.jpg" data-lightbox="gallery-mf">
                    <div className="work-img">
                      <img src="img/Footballer.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Football</h2>
                          <div className="w-more">
                            <span className="w-ctegory">I follow and play football &amp; It has taught me the life fundamentals of working in a team</span> 
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="img/Gaming.jpg" data-lightbox="gallery-mf">
                    <div className="work-img">
                      <img src="img/Gaming.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Gaming</h2>
                          <div className="w-more">
                            <span className="w-ctegory">I love gaming because it helps keep my mind busy while refreshing it at the same time</span> 
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="work-box">
                  <a href="img/Baller.jpg" data-lightbox="gallery-mf">
                    <div className="work-img">
                      <img src="img/Baller.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="work-content">
                      <div className="row">
                        <div className="col-sm-8">
                          <h2 className="w-title">Basketball</h2>
                          <div className="w-more">
                            <span className="w-ctegory">I only started follwing basketball in 2018 because I wanted to learn something new in life and I challenged myself until I fully understood how the sport is played.</span>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="w-like">
                            <span className="ion-ios-plus-outline" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ Section Portfolio End /*/}
        {/*/ Section Testimonials Star /*/}
        <div className="testimonials paralax-mf bg-image" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}>
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div id="testimonial-mf" className="owl-carousel owl-theme">
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img src="img/Mohau.jpg" alt="" className="rounded-circle b-shadow-a" />
                      <span className="author">Mohau Mahlakwane</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        I believe Normal Is Boring.
                      </p>
                      <span className="comit"><i className="fa fa-quote-right" /></span>
                    </div>
                  </div>
                  <div className="testimonial-box">
                    <div className="author-test">
                      <img src="img/Comfort.jpg" alt="" className="rounded-circle b-shadow-a" />
                      <span className="author">Comfort Mahlakwane</span>
                    </div>
                    <div className="content-test">
                      <p className="description lead">
                        I also believe in positive energies only.
                      </p>
                      <span className="comit"><i className="fa fa-quote-right" /></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ Section Contact-Footer Star /*/}
        <section className="paralax-mf footer-paralax bg-image sect-mt4 route" style={{backgroundImage: 'url(img/overlay-bg.jpg)'}}>
          <div className="overlay-mf" />
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="contact-mf">
                  <div id="contact" className="box-shadow-full">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="title-box-2 pt-6 pt-md-0">
                          <h5 className="title-left">
                            Get in Touch
                          </h5>
                        </div>
                        <div className="more-info">
                          <p className="lead">
                            Should you wish to get in touch with me, below are my socials and email.
                          </p>
                          <ul className="list-ico">
                            <li><span className="ion-ios-location" /> Johannesburg &amp; Pretoria</li>
                            <li><span className="ion-email" /> ledmo98@gmail.com</li>
                          </ul>
                        </div>
                        <div className="socials">
                          <ul>
                            <li><a href="https://github.com/Mohau-Comfort"><span className="ico-circle"><i className="ion-social-github" /></span></a></li>
                            <li><a href="https://www.instagram.com/mohau_comfort/"><span className="ico-circle"><i className="ion-social-instagram" /></span></a></li>
                            <li><a href="https://twitter.com/ComfortMohau"><span className="ico-circle"><i className="ion-social-twitter" /></span></a></li>
                            <li><a href="https://www.linkedin.com/in/mohau-mahlakwane-2060b8185/"><span className="ico-circle"><i className="ion-social-linkedin" /></span></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="copyright-box">
                    <p className="copyright">© Copyright <strong>DevFolio</strong>. All Rights Reserved</p>
                    <div className="credits">
                      {/*
                  All the links in the footer should remain intact.
                  You can delete the links only if you purchased the pro version.
                  Licensing information: https://bootstrapmade.com/license/
                  Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=DevFolio
                */}
                      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
        {/*/ Section Contact-footer End /*/}
        <a href="#home" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        <div id="preloader" />
      


  {/* <!-- JavaScript Libraries --> */}
  <script src="assets/lib/jquery/jquery.min.js"></script>
  <script src="assets/lib/jquery/jquery-migrate.min.js"></script>
  <script src="assets/lib/popper/popper.min.js"></script>
  <script src="assets/lib/bootstrap/js/bootstrap.min.js"></script>
  <script src="assets/lib/easing/easing.min.js"></script>
  <script src="assets/lib/counterup/jquery.waypoints.min.js"></script>
  <script src="assets/lib/counterup/jquery.counterup.js"></script>
  <script src="assets/lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="assets/lib/lightbox/js/lightbox.min.js"></script>
  <script src="assets/lib/typed/typed.min.js"></script>
 {/*  <!-- Contact Form JavaScript File --> */}
  <script src="assets/contactform/contactform.js"></script>

  {/* <!-- Template Main Javascript File --> */}
  <script src="assets/js/main.js"></script>
            </div>
        )
    }
}

export default Home;