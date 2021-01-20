import React from "react";
import "../index.css";
import { gsap, Power1 } from "gsap";
import { ReactComponent as Owl } from "../img/owl-side-view-outline.svg";
import bio from "../img/IMG_0745.jpg";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.timeline = new gsap.timeline({ paused: true });
  }

  componentDidMount() {
    this.timeline
      .from(this.logo, 0.4, {
        autoAlpha: 0,
        y: 25,
        ease: Power1.easeInOut,
      })
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
        "-=.2"
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
      .from(
        this.item4,
        0.4,
        {
          autoAlpha: 0,
          y: 25,
          ease: Power1.easeInOut,
        },
        "-=.1"
      )
      .from(
        this.item5,
        0.4,
        {
          autoAlpha: 0,
          y: 25,
          ease: Power1.easeInOut,
        },
        "-=.1"
      );

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
            <section className="relative py-2 md:py-12">
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
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                    <div ref={(div) => (this.logo = div)} className="logo">
                      <img
                        alt="..."
                        className="max-w-full rounded-lg shadow-lg"
                        src={bio}
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-5/12 ml-auto mr-auto px-4 pt-8 md:pt-0">
                    <div className="md:pr-12">
                      <div ref={(div) => (this.item1 = div)} className="item1">
                        <div className="py-3">
                          <Owl />
                        </div>
                      </div>
                      <div ref={(div) => (this.item2 = div)} className="item2">
                        <h3 className="text-3xl font-semibold">Hello!</h3>
                        <p className="mt-4 text-lg leading-relaxed text-gray-600">
                          Joe Spencer is a Minneapolis based experience designer
                          and developer. He is certified in accessibility best
                          practices and specializes in interaction, strategy,
                          and prototyping.
                        </p>
                        <p className="font-bold mt-5">See my work:</p>
                      </div>
                      <ul className="list-none mt-1">
                        <li className="py-2">
                          <div className="flex items-center">
                            <div
                              ref={(div) => (this.item3 = div)}
                              className="item3"
                            >
                              <button
                                class="mt-3 text-indigo-500 inline-flex items-center"
                                onClick={(e) => this.changePage(e, "/mazda")}
                              >
                                Mazda Tier 3 Project
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
                        </li>
                        <li className="py-2">
                          <div className="flex items-center">
                            <div
                              ref={(div) => (this.item4 = div)}
                              className="item4"
                            >
                              <button
                                class="mt-3 text-indigo-500 inline-flex items-center"
                                onClick={(e) => this.changePage(e, "/sparq")}
                              >
                                Sparq App
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
                        </li>
                      </ul>
                    </div>

                    <div ref={(div) => (this.item5 = div)} className="item5">
                      <span class="inline-flex sm:ml-auto sm:mt-8 mt-24 justify-center sm:justify-start">
                        <a
                          href="https://twitter.com/spencerjoe"
                          class="text-gray-500"
                        >
                          <svg
                            fill="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/spencerjoe/"
                          class="ml-3 text-gray-500"
                        >
                          <svg
                            fill="none"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              width="20"
                              height="20"
                              x="2"
                              y="2"
                              rx="5"
                              ry="5"
                            ></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                          </svg>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/joespencer2/"
                          class="ml-3 text-gray-500"
                        >
                          <svg
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="0"
                            class="w-5 h-5"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke="none"
                              d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                            ></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                          </svg>
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
