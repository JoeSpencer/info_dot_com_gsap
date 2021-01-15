import React from "react";
import "../index.css";
import { TimelineMax, Power1 } from "gsap/all";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(this.header, 0.5, {
        display: "none",
        autoAlpha: 0,
        delay: 0.25,
        ease: Power1.easeIn,
      })
      .from(this.content, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
      .from(this.footer, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      });

    this.timeline.play();
  }

  changePage = (e, destination) => {
    e.preventDefault();
    this.timeline.reverse();
    const timelineDuration = this.timeline.duration() * 1000;
    setTimeout(() => {
      this.props.history.push(destination);
    }, timelineDuration);
  };

  render() {
    return (
      <div className="home text-gray-600 body-font">
        <div className="container px-4 pt-8 mx-auto">
          <div className="home-container">
            <div ref={(div) => (this.content = div)} className="home-content">
              <section className="relative py-12">
                <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20">
                  <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                  >
                    <polygon
                      className="text-white fill-current"
                      points="2560 0 2560 100 0 100"
                    ></polygon>
                  </svg>
                </div>
                <div className="container mx-auto px-4">
                  <div className="items-center flex flex-wrap">
                    <div className="w-full md:w-2/12 ml-auto mr-auto px-4">
                      <header className="navigation flex flex-col">
                        <button
                          className="nav-item text-left"
                          onClick={(e) => this.changePage(e, "/")}
                        >
                          <p>Home</p>
                        </button>
                        <button className="nav-item text-left">
                          <p>About</p>
                        </button>
                        <button
                          className="nav-item text-left"
                          onClick={(e) => this.changePage(e, "/mazda")}
                        >
                          <p>Mazda</p>
                        </button>
                      </header>
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                      <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
                      />
                    </div>
                    <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                      <div className="md:pr-12">
                        <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                          <i className="fas fa-rocket text-xl"></i>
                        </div>
                        <h3 className="text-3xl font-semibold">About me</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                          The extension comes with three pre-built pages to help
                          you get started faster. You can change the text and
                          images and you're good to go.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div ref={(div) => (this.footer = div)} className="home-footer">
              <p>January, 2020</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
