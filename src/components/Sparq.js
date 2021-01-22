import React from "react";
import "../index.css";
import { gsap, Power1 } from "gsap";
import sparqicon from "../img/Sparq/SparqIcon.png";
import sparq1 from "../img/Sparq/sparq1.png";
import sparq2 from "../img/Sparq/sparq2.png";
import sparq3 from "../img/Sparq/sparq3.png";
import sparq4 from "../img/Sparq/sparq4.png";

class Sparq extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new gsap.timeline({ paused: true });
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
        <div class="bg-indigo-600">
          <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-center flex-wrap">
              <div class="flex items-center mr-4">
                <span class="flex p-2 rounded-lg bg-indigo-800">
                  <svg
                    className="h-6 w-6 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </span>
                <p class="ml-3 font-medium text-white truncate">
                  <span class="hidden md:inline">
                    Big news! Sparq won an award!
                  </span>
                </p>
              </div>
              <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                <a
                  href="https://www.bintelligence.com/blog/2021/1/12/7-executives-52-companies-and-137-products-win-2021-big-innovation-award"
                  class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
                >
                  Check it out
                </a>
              </div>
            </div>
          </div>
        </div>
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
                  <span class="inline-block py-1 px-3 mr-2 mb-4 rounded-full bg-gray-50 text-gray-400 text-xs font-bold">
                    iOS
                  </span>
                  <span class="inline-block py-1 px-3 mr-2 mb-4 rounded-full bg-gray-50 text-gray-400 text-xs font-bold">
                    Android
                  </span>
                  <span class="inline-block py-1 px-3 mr-2 mb-4 rounded-full bg-gray-50 text-gray-400 text-xs font-bold">
                    Design
                  </span>
                  <span class="inline-block py-1 px-3 mr-2 mb-4 rounded-full bg-gray-50 text-gray-400 text-xs font-bold">
                    Prototyping
                  </span>
                  <span class="inline-block py-1 px-3 mr-2 mb-4 rounded-full bg-indigo-50 text-gray-500 text-xs font-medium tracking-widest">
                    Strategy
                  </span>
                  <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
                    Creating a global community for UHG
                  </h1>
                  <p className="mb-4 leading-relaxed">
                    UnitedHealth Group has tens of thousands of employees,
                    distributed globally. Interviews revealed a sense of
                    disconnection from the mothership and the lack of a common
                    communication channel. Sparq is a standalone mobile
                    application that unites all employees in a common space.
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
              <div class="p-4 md:w-1/3">
                <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div class="flex items-center mb-3">
                    <h2 class="text-gray-900 text-lg title-font font-medium">
                      Mazda Tier 3
                    </h2>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base">
                      A component system for Mazda USA's dealer network.
                    </p>
                    <button
                      class="mt-3 text-indigo-500 inline-flex items-center"
                      onClick={(e) => this.changePage(e, "/mazda")}
                    >
                      See project
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Sparq;
