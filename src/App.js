import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import homeSectoinBg from "./assets/homeSectoinBg.png";
import aboutSectionBg from "./assets/aboutSectionBg.png";
import infoSectionBg from "./assets/infoSectionBg.png";
import understandingSectionBg from "./assets/understandingSectionBg.png";
import howtobuy from "./assets/howtobuy.jpeg";
import whoSectionBg from "./assets/whoSectionBg.png";
import chartSvg from "./assets/chartSvg.svg";
import buy from "./assets/buy.svg";
import dil from "./assets/dil.svg";
import entherscanSvg from "./assets/entherscanSvg.svg";
import telegramSvg from "./assets/telegramSvg.svg";
import twitterSvg from "./assets/twitterSvg.svg";
import footerBg from "./assets/footerBg.png";
import img from "./assets/img.png";
import music from "./assets/music.3gp";
import ProjectEcosystem from "./assets/ProjectEcosystem.png";
import WhiteWalkerInu from "./assets/WhiteWalkerInu.png";
import infoSectionImg from "./assets/infoSectionImg.png";
import infoSectionImgOverlay from "./assets/infoSectionImgOverlay.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png";
import whitepaper from "./assets/whitepaper.pdf";
import "animate.css";
import Typewriter from "typewriter-effect";

function App() {
  const [isAnimate, setIsAnimate] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      document.getElementById("player").play();
      setIsAnimate(window.scrollY > 96);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <section id="home" className="home__section">
        <img src={homeSectoinBg} alt="" className="home__section__img" />
        <div className="home__section__overlay animate__animated animate__fadeIn animate__delay-1s">
          <div className="home__section__overlay__content">
            <div className="home__section__overlay__left">
              <div className="home__section__overlay__left__heading">
                <Typewriter
                  options={{
                    strings: [
                      "Winter is coming . . .",
                      "Winter is coming . . .",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 100,
                  }}
                />
              </div>
              <div className="home__section__overlay__left__sub__heading">
                to the ethereum blockchain
              </div>
              <div className="home__section__overlay__left__info">
                $WINU (White Walker Inu) is a hyper deflationary token on the
                Ethereum Blockchain designed to constantly create buy pressure
                all the while reducing the supply with the use of deflationary
                techniques and additional revenue generation for the ecosystem.
              </div>
              <div className="home__section__overlay__left__btn__container">
                <a href="/" className="home__section__overlay__left__btn">
                  <img
                    src={buy}
                    alt="buy"
                    className="home__section__overlay__left__btn__img"
                  />
                  Buy
                </a>
                <a
                  href={whitepaper}
                  className="home__section__overlay__left__btn"
                >
                  <img
                    src={dil}
                    alt="dil"
                    className="home__section__overlay__left__btn__img"
                  />
                  WhitePaper
                </a>
                <a href="/" className="home__section__overlay__left__btn">
                  <img
                    src={chartSvg}
                    alt="chartSvg"
                    className="home__section__overlay__left__btn__img"
                  />
                  Chart
                </a>
                <a href="/" className="home__section__overlay__left__btn">
                  <img
                    src={entherscanSvg}
                    alt="entherscanSvg"
                    className="home__section__overlay__left__btn__img"
                  />
                  Etherscan
                </a>
                <a href="/" className="home__section__overlay__left__btn">
                  <img
                    src={telegramSvg}
                    alt="telegramSvg"
                    className="home__section__overlay__left__btn__img"
                  />
                  Telegram
                </a>
                <a href="/" className="home__section__overlay__left__btn">
                  <img
                    src={twitterSvg}
                    alt="twitterSvg"
                    className="home__section__overlay__left__btn__img"
                  />
                  Twitter
                </a>
              </div>
            </div>
            <div className="home__section__overlay__right">
              <img
                src={img}
                alt=""
                className="home__section__overlay__right__img"
              />
            </div>
          </div>
        </div>
      </section>
      <video src={music} id="player" style={{ display: "none" }}></video>
      <div className="slogan__container">
        <div className="slogan__container__text">
          White Walker Inu ($WINU) has a strong community comprised of the army
          of the dead at its core and is your ticket to wealth creation.
        </div>
      </div>
      <section id="home" className="home__section">
        <img src={aboutSectionBg} alt="" className="home__section__img" />
        <div className="home__section__overlay ">
          <div className="home__section__overlay__content">
            <div
              className={
                isAnimate
                  ? "home__section__overlay__left animate__animated animate__fadeIn animate__delay-1s"
                  : "home__section__overlay__left"
              }
            >
              <div className="home__section__overlay__left__heading">
                Project & Ecosystem
              </div>

              <div className="home__section__overlay__left__info">
                <p>
                  $WINU, is a hyper deflationary token on the Ethereum
                  Blockchain designed to constantly create buy pressure all the
                  while reducing the supply with the use of deflationary
                  techniques and additional revenue generation for the
                  ecosystem.
                </p>
                <p>
                  White Walker Inu ($WINU) has a strong community aka (army of
                  the dead) at its core.
                </p>
                <p>
                  One of the main issues cryptocurrency projects face is the
                  lack of long term volume; which invariably slows down further
                  development and any subsequent reinvestment into enhancing the
                  project.
                </p>
                <p>
                  ($WINU) solves this by investing a percentage of the treasury
                  wallet into yield bearing assets; with profits generated being
                  reintroduced back into the project in the form of token price
                  growth, further development & extensive marketing.
                </p>
                <p>
                  This thus results in increasing the profile of the project and
                  attracting investors.
                </p>
              </div>
            </div>
            <div className="home__section__overlay__right">
              <img
                src={ProjectEcosystem}
                alt=""
                className="home__section__overlay__right__img"
                style={{ width: "500px", mixBlendMode: "screen" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="home__section">
        <img src={whoSectionBg} alt="" className="home__section__img" />
        <div className="home__section__overlay">
          <div className="home__section__overlay__content">
            <div className="home__section__overlay__right">
              <img
                src={WhiteWalkerInu}
                alt=""
                className="home__section__overlay__right__img"
                style={{ width: "600px" }}
              />
            </div>
            <div
              className={
                isAnimate
                  ? "home__section__overlay__left  animate__animated animate__fadeIn animate__delay-2s"
                  : "home__section__overlay__left"
              }
            >
              <div className="home__section__overlay__left__heading">
                Who is the White Walker Inu?
              </div>
              <div className="home__section__overlay__left__info">
                <p>
                  Oh, my sweet summer child. What do you know about fear? Fear
                  is for the winter, when the snows fall a hundred feet deep.
                  Fear is for the Long Night. That is the time for fear, my
                  little lord, when the White Walker Inu moves through the
                  woods. Thousands of years ago, there came a night that lasted
                  24 hours. Kings froze to death in their castles, same as
                  shepherds in their huts. And women smothered their babies,
                  rather than see them starve and get rug pulled by dishonest
                  Devs.
                </p>
                <p>
                  So, is this the sort of story that you like? In that darkness,
                  the White Walker Inu came for the first time. He swept through
                  cities and kingdoms, riding his dead horse, hunting with his
                  packs of pale spiders, big as hounds and commanding an army of
                  the dead wights … $WINU has come to take the crypto realm by
                  storm and wants the iron throne. But no little lord it does
                  not end there, for the White Walker Inu wants to go to the
                  moon!!!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="home" className="home__section">
        <img src={infoSectionBg} alt="" className="home__section__img" />
        <div className="home__section__overlay">
          <div className="home__section__overlay__content home__section__overlay__content__reverse">
            <div
              className={
                isAnimate
                  ? "home__section__overlay__left animate__animated animate__fadeIn animate__delay-2s"
                  : "home__section__overlay__left"
              }
            >
              <div
                className="home__section__overlay__left__heading"
                style={{ color: "#1C1C1C" }}
              >
                What does the White
              </div>
              <div
                className="home__section__overlay__left__heading"
                style={{ color: "#1C1C1C" }}
              >
                Walker Inu ($WINU) Want?
              </div>
              <div
                className="home__section__overlay__left__info"
                style={{ color: "#1C1C1C" }}
              >
                <p>
                  The White Walker Inu ($WINU) came from the lands of always
                  winter and is the first of the white walkers also known as the
                  “Night King Inu”. He is the leader and commander of the white
                  walkers and the army of the dead.
                </p>
                <p>
                  The White Walker Inu ($WINU) and his army of the dead don’t
                  negotiate. They come like a storm in the winter consuming
                  anything that dares cross their path, for they are an
                  unstoppable force which never tires and keeps on growing.
                </p>
                <p>
                  Oh, little lord, no one knows why they came, however, maesters
                  and legends claim they want to conquer all the kingdoms of
                  Ethereum and go to the moon and beyond!
                </p>
              </div>
            </div>
            <div className="home__section__overlay__right">
              <img
                src={infoSectionImg}
                alt=""
                className="home__section__overlay__right__img"
                style={{ width: "500px", mixBlendMode: "color-dodge" }}
              />
              <img
                src={infoSectionImgOverlay}
                alt=""
                className="home__section__overlay__right__img"
                style={{
                  width: "500px",

                  position: "absolute",
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <section id="longnignt" className="home__section">
        <img
          src={understandingSectionBg}
          alt=""
          className="home__section__img"
        />
        <div
          className={
            isAnimate
              ? "home__section__overlay animate__animated animate__fadeIn animate__delay-2s"
              : "home__section__overlay"
          }
        >
          <div className="home__section__overlay__content">
            <div
              className="home__section__overlay__left"
              style={{ height: "70%" }}
            >
              <div
                className="home__section__overlay__left__sub__heading"
                style={{ color: "#131313" }}
              >
                Understanding
              </div>
              <div
                className="home__section__overlay__left__heading"
                style={{ color: "#131313" }}
              >
                the Long Night.
              </div>
            </div>
            <div className="home__section__overlay__right"></div>
          </div>
        </div>
        <div
          className={
            isAnimate
              ? "home__section__bottom__overlay animate__animated animate__fadeIn animate__delay-2s"
              : "home__section__bottom__overlay"
          }
        >
          <div className="home__section__bottom__overlay__text">
            As per the stories told by old nan the emergence of the White Walker
            Inu is accompanied by the long night. The long night will last for
            24 hours from the time of emergence of the White Walker Inu ($WINU)
            during which the sale tax will be 25% This is to punish early
            sellers and reward our strong diamond handed dead army, while at the
            same time incentivising holding and having a positive boost on
            price.
          </div>
        </div>
      </section>
      <section
        id="tokenomics"
        className={
          isAnimate
            ? "slogan__container  animate__animated animate__fadeIn animate__delay-2s"
            : "slogan__container"
        }
        className="how__buy__section"
      >
        <div
          className="slogan__container"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className="slogan__container__text"
            style={{
              color: "#131313",
              fontSize: 16,
            }}
          >
            Tokenomics
          </div>
        </div>
        <img src={howtobuy} alt="" className="how__buy__section__img" />
      </section>

      <section
        id="roadmap"
        className="slogan__container"
        style={{ backgroundColor: "#ffffff" }}
      >
        <div
          className="slogan__container__text"
          style={{
            color: "#131313",
            fontSize: 16,
          }}
        >
          Roadmap
        </div>
      </section>
      <div className="roadmap__section">
        <div className="roadmap__section__content">
          <div className="roadmap__section__content__card">
            <div className="roadmap__section__content__card__heading">
              Phase <span>1</span>
            </div>
            <div className="roadmap__section__content__card__entry">
              Token launch (Stealth and/or fair launch on Uniswap).
            </div>
            <div className="roadmap__section__content__card__entry">
              Etherscan verification.
            </div>
            <div className="roadmap__section__content__card__entry">
              Telegram launch.
            </div>
            <div className="roadmap__section__content__card__entry">
              Twitter launch.
            </div>
            <div className="roadmap__section__content__card__entry">
              Website launch.
            </div>
            <div className="roadmap__section__content__card__entry">
              Release of whitepaper.
            </div>
            <div className="roadmap__section__content__card__entry">
              Marketing campaign roll out.
            </div>
            <div className="roadmap__section__content__card__entry">
              First community contest and giveaway.
            </div>
            <div className="roadmap__section__content__card__entry">
              CoinGecko listing.
            </div>
            <div className="roadmap__section__content__card__entry">
              CoinMarketCap listing.
            </div>
            <div className="roadmap__section__content__card__entry">
              1,000 holders.
            </div>
          </div>
          <div className="roadmap__section__content__card">
            <div className="roadmap__section__content__card__heading">
              Phase <span>2</span>
            </div>
            <div className="roadmap__section__content__card__entry">
              Mass marketing campaigns.
            </div>
            <div className="roadmap__section__content__card__entry">
              Regular community contests & giveaways.
            </div>
            <div className="roadmap__section__content__card__entry">
              Creating revenue generation streams via investments.
            </div>
            <div className="roadmap__section__content__card__entry">
              DApp dashboard.
            </div>
            <div className="roadmap__section__content__card__entry">
              50,000 holders.
            </div>
          </div>
          <div className="roadmap__section__content__card">
            <div className="roadmap__section__content__card__heading">
              Phase <span>3</span>
            </div>
            <div className="roadmap__section__content__card__entry">
              Global marketing campaigns.
            </div>
            <div className="roadmap__section__content__card__entry">
              Billboards, celebrities, press releases.
            </div>
            <div className="roadmap__section__content__card__entry">
              CEX listings.
            </div>
            <div className="roadmap__section__content__card__entry">
              Strategic partnerships.
            </div>
            <div className="roadmap__section__content__card__entry">
              DAO features.
            </div>
            <div className="roadmap__section__content__card__entry">
              100,000 holders.
            </div>
          </div>
        </div>
      </div>
      <section id="howtobuy" className="steps__section">
        <div
          className="slogan__container"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className="slogan__container__text"
            style={{
              color: "#131313",
              fontSize: 16,
            }}
          >
            How to Buy?
          </div>
        </div>
        <div className="steps__section__content">
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>1</span>
              </div>
              <div className="steps__section__content__entry__heading__icon__bg">
                <img
                  src={step1}
                  alt=""
                  className="steps__section__content__entry__heading__icon"
                />
              </div>
              <div className="steps__section__content__entry__heading__sub__heading">
                Download Metamask
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              From the App Store or Google Play Store, for free. Or Add the
              desktop browser extension on Google Chrome by going to
              metamask.io. Follow the easy steps from their guide to setup a
              wallet.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>2</span>
              </div>
              <div className="steps__section__content__entry__heading__icon__bg">
                <img
                  src={step2}
                  alt=""
                  className="steps__section__content__entry__heading__icon"
                />
              </div>
              <div className="steps__section__content__entry__heading__sub__heading">
                Send ETH to Metamask
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              You can buy ETH directly through Metamask or you can transfer some
              from another wallet or crypto exchange. You can follow tutorials
              on Youtube if you get stuck on this step.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>3</span>
              </div>
              <div className="steps__section__content__entry__heading__icon__bg">
                <img
                  src={step3}
                  alt=""
                  className="steps__section__content__entry__heading__icon"
                />
              </div>
              <div className="steps__section__content__entry__heading__sub__heading">
                Connect to Uniswap
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              Go to uniswap.org via a desktop browser or inside your Metamask
              wallet tap the three blue lines at the top left of your screen to
              reveal your browser. When Metamask asks for your signature go
              ahead and click sign.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>4</span>
              </div>
              <div className="steps__section__content__entry__heading__icon__bg">
                <img
                  src={step4}
                  alt=""
                  className="steps__section__content__entry__heading__icon"
                />
              </div>
              <div className="steps__section__content__entry__heading__sub__heading">
                Swap your ETH for WINU
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              Click the cog button and change the Slippage amount to 12-15%. Add
              the desired ETH amount you’d like to swap, once you’re happy click
              the “Swap” button to finalise the trade.
            </div>
          </div>
        </div>
      </section>

      <div className="bar"></div>
      <div className="footer">
        <img src={footerBg} alt="" className="footer__img" />
        <div className="footer__overlay">
          <div className="footer__overlay__content">
            <div className="footer__overlay__content__heading">Community</div>
            <div className="footer__overlay__content__info">
              Our community is growing stronger by the day, follow us on our
              social media platforms to get to most up-to-date and accurate
              Whitewalkerinu information.
            </div>
            <div className="footer__overlay__content__info">
              We invite you to join our Telegram group, where you can interact
              with us, and thousands of other members of the Whitewalkerinu.
            </div>
            <div className="footer__overlay__content__links">
              <a href="#" className="footer__overlay__content__links__link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="currentColor"
                >
                  <path d="M 44.376953 5.9863281 C 43.889905 6.0076957 43.415817 6.1432497 42.988281 6.3144531 C 42.565113 6.4845113 40.128883 7.5243408 36.53125 9.0625 C 32.933617 10.600659 28.256963 12.603668 23.621094 14.589844 C 14.349356 18.562196 5.2382813 22.470703 5.2382812 22.470703 L 5.3046875 22.445312 C 5.3046875 22.445312 4.7547875 22.629122 4.1972656 23.017578 C 3.9185047 23.211806 3.6186028 23.462555 3.3730469 23.828125 C 3.127491 24.193695 2.9479735 24.711788 3.015625 25.259766 C 3.2532479 27.184511 5.2480469 27.730469 5.2480469 27.730469 L 5.2558594 27.734375 L 14.158203 30.78125 C 14.385177 31.538434 16.858319 39.792923 17.402344 41.541016 C 17.702797 42.507484 17.984013 43.064995 18.277344 43.445312 C 18.424133 43.635633 18.577962 43.782915 18.748047 43.890625 C 18.815627 43.933415 18.8867 43.965525 18.957031 43.994141 C 18.958531 43.994806 18.959437 43.99348 18.960938 43.994141 C 18.969579 43.997952 18.977708 43.998295 18.986328 44.001953 L 18.962891 43.996094 C 18.979231 44.002694 18.995359 44.013801 19.011719 44.019531 C 19.043456 44.030655 19.062905 44.030268 19.103516 44.039062 C 20.123059 44.395042 20.966797 43.734375 20.966797 43.734375 L 21.001953 43.707031 L 26.470703 38.634766 L 35.345703 45.554688 L 35.457031 45.605469 C 37.010484 46.295216 38.415349 45.910403 39.193359 45.277344 C 39.97137 44.644284 40.277344 43.828125 40.277344 43.828125 L 40.310547 43.742188 L 46.832031 9.7519531 C 46.998903 8.9915162 47.022612 8.334202 46.865234 7.7402344 C 46.707857 7.1462668 46.325492 6.6299361 45.845703 6.34375 C 45.365914 6.0575639 44.864001 5.9649605 44.376953 5.9863281 z M 44.429688 8.0195312 C 44.627491 8.0103707 44.774102 8.032983 44.820312 8.0605469 C 44.866523 8.0881109 44.887272 8.0844829 44.931641 8.2519531 C 44.976011 8.419423 45.000036 8.7721605 44.878906 9.3242188 L 44.875 9.3359375 L 38.390625 43.128906 C 38.375275 43.162926 38.240151 43.475531 37.931641 43.726562 C 37.616914 43.982653 37.266874 44.182554 36.337891 43.792969 L 26.632812 36.224609 L 26.359375 36.009766 L 26.353516 36.015625 L 23.451172 33.837891 L 39.761719 14.648438 A 1.0001 1.0001 0 0 0 38.974609 13 A 1.0001 1.0001 0 0 0 38.445312 13.167969 L 14.84375 28.902344 L 5.9277344 25.849609 C 5.9277344 25.849609 5.0423771 25.356927 5 25.013672 C 4.99765 24.994652 4.9871961 25.011869 5.0332031 24.943359 C 5.0792101 24.874869 5.1948546 24.759225 5.3398438 24.658203 C 5.6298218 24.456159 5.9609375 24.333984 5.9609375 24.333984 L 5.9941406 24.322266 L 6.0273438 24.308594 C 6.0273438 24.308594 15.138894 20.399882 24.410156 16.427734 C 29.045787 14.44166 33.721617 12.440122 37.318359 10.902344 C 40.914175 9.3649615 43.512419 8.2583658 43.732422 8.1699219 C 43.982886 8.0696253 44.231884 8.0286918 44.429688 8.0195312 z M 33.613281 18.792969 L 21.244141 33.345703 L 21.238281 33.351562 A 1.0001 1.0001 0 0 0 21.183594 33.423828 A 1.0001 1.0001 0 0 0 21.128906 33.507812 A 1.0001 1.0001 0 0 0 20.998047 33.892578 A 1.0001 1.0001 0 0 0 20.998047 33.900391 L 19.386719 41.146484 C 19.35993 41.068197 19.341173 41.039555 19.3125 40.947266 L 19.3125 40.945312 C 18.800713 39.30085 16.467362 31.5161 16.144531 30.439453 L 33.613281 18.792969 z M 22.640625 35.730469 L 24.863281 37.398438 L 21.597656 40.425781 L 22.640625 35.730469 z"></path>
                </svg>
              </a>
            </div>
            <div className="footer__overlay__content__sub__bar"></div>
            <div className="footer__overlay__content__sub__heading">
              Privacy Policy
            </div>
            <div className="footer__overlay__content__info">
              The Content shared on this website is for information purpose only
              and, thus, should not be considered as financial advice.
              Trading/Investing is risky and you should never invest more than
              you can afford to lose. You alone assume the sole responsibility
              of evaluating the merits and risks associated with the use of any
              information or other Content on the Site before making any
              decisions based on such information or other Content.
              Whitewalkerinu also does not promise financial gain, its purpose
              is to invest in other assets in order to accrue income to continue
              furthering the project and rewarding its users through other
              means.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
