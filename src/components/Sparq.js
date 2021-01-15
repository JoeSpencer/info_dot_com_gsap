import React from "react";
import "../index.css";
import { TimelineMax, Power1 } from "gsap/all";
import sparqicon from "../img/Sparq/SparqIcon.png";
import sparq1 from "../img/Sparq/sparq1.png";
import sparq2 from "../img/Sparq/sparq2.png";
import sparq3 from "../img/Sparq/sparq3.png";
import sparq4 from "../img/Sparq/sparq4.png";

class Sparq extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(
        this.logo,
        0.4,
        {
          autoAlpha: 0,
          y: 25,
          ease: Power1.easeInOut,
        },
        "+=.1"
      )
      .from(this.item1, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
      .from(
        this.item2,
        0.4,
        {
          autoAlpha: 0,
          y: 25,
          ease: Power1.easeInOut,
        },
        "+=.1"
      )
      .from(
        this.item3,
        0.4,
        {
          autoAlpha: 0,
          y: 25,
          ease: Power1.easeInOut,
        },
        "-=.1"
      )
      .from(this.item4, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
      .from(this.item5, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
      .from(this.item6, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
      .from(this.item7, 0.4, {
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
      <div className="home text-gray-900 body-font tydye">
        <div className="container px-4 pt-8 mx-auto">
          <div className="home-container">
            <div className="container mx-auto px-4 pb-24">
              <div className="flex sm:flex-row flex-col sm:pb-20 pb-10">
                <div
                  ref={(div) => (this.logo = div)}
                  className="logo flex-none w-16 h-16 mb-4 sm:mb-0"
                >
                  <img alt="gallery" src={sparqicon} />
                </div>
                <div
                  ref={(div) => (this.item1 = div)}
                  className="item1 flex-grow h-10 sm:h-16"
                >
                  <h1 className="sm:text-6xl text-3xl font-medium title-font lg:mb-0 mb-4 pl-0 sm:pl-6">
                    Sparq App
                  </h1>
                </div>
                <div
                  ref={(div) => (this.item2 = div)}
                  className="item2 flex-none sm:w-32 sm:h-16 w-full"
                >
                  <button
                    className="sm:mt-3 mt-0 pr-10 sm:pr-0 text-indigo-500 inline-flex items-center"
                    onClick={(e) => this.changePage(e, "/mazda")}
                  >
                    Mazda
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>

                  <button
                    className="mt-3 text-indigo-500 inline-flex items-center"
                    onClick={(e) => this.changePage(e, "/")}
                  >
                    Home
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <section className="body-font">
                <div ref={(div) => (this.item3 = div)} className="item3">
                  <span class="inline-block py-1 px-2 mr-2 mb-4 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                    iOS
                  </span>
                  <span class="inline-block py-1 px-2 mr-2 mb-4 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                    Android
                  </span>
                  <span class="inline-block py-1 px-2 mr-2 mb-4 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                    Design
                  </span>
                  <span class="inline-block py-1 px-2 mr-2 mb-4 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                    Prototyping
                  </span>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Balancing uniformity and personality
                  </h1>
                  <p className="mb-8 leading-relaxed">
                    For this project, templates simply would not work. Each
                    dealership is a unique business and has its own personality,
                    but Mazda's strong brand identity needed to come through in
                    the dealer site. I introduced the client to the concept of
                    Atomic design, using the atoms of the brand to build
                    components that could be infinitely re-arranged in layouts.
                  </p>
                </div>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-center">
                  <div className="w-full">
                    <div ref={(div) => (this.item4 = div)} className="item4">
                      <img
                        alt="gallery"
                        className="w-full object-center block rounded-2xl"
                        src={sparq1}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div ref={(div) => (this.item5 = div)} className="item5">
                      <img
                        alt="gallery"
                        className="w-full object-center block rounded-2xl"
                        src={sparq2}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div ref={(div) => (this.item6 = div)} className="item6">
                      <img
                        alt="gallery"
                        className="w-full object-center block rounded-2xl"
                        src={sparq3}
                      />
                    </div>
                  </div>
                  <div className="w-full">
                    <div ref={(div) => (this.item7 = div)} className="item7">
                      <img
                        alt="gallery"
                        className="w-full object-center block rounded-2xl"
                        src={sparq4}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
        {/* footer */}
        <section class="text-gray-600 bg-gray-50 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
              <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                  More Projects
                </h1>
                <div class="h-1 w-20 bg-indigo-500 rounded"></div>
              </div>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/720x400"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Chichen Itza
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/721x401"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Colosseum Roma
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
              <div class="xl:w-1/3 md:w-1/2 p-4">
                <div class="bg-gray-100 p-6 rounded-lg">
                  <img
                    class="h-40 rounded w-full object-cover object-center mb-6"
                    src="https://dummyimage.com/722x402"
                    alt="content"
                  />
                  <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    SUBTITLE
                  </h3>
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-4">
                    Great Pyramid of Giza
                  </h2>
                  <p class="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waistcoat.
                    Distillery hexagon disrupt edison bulbche.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sparq;
