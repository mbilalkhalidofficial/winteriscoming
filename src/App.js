import React from "react";
import "./App.scss";
import Header from "./components/Header";
import homeSectoinBg from "./assets/homeSectoinBg.png";
import aboutSectionBg from "./assets/aboutSectionBg.png";
import infoSectionBg from "./assets/infoSectionBg.png";
import understandingSectionBg from "./assets/understandingSectionBg.png";
import howtobuy from "./assets/howtobuy.png";
import whoSectionBg from "./assets/whoSectionBg.png";
import footerBg from "./assets/footerBg.png";
import img from "./assets/img.png";
import ProjectEcosystem from "./assets/ProjectEcosystem.png";
import WhiteWalkerInu from "./assets/WhiteWalkerInu.png";
import infoSectionImg from "./assets/infoSectionImg.png";
import infoSectionImgOverlay from "./assets/infoSectionImgOverlay.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import step4 from "./assets/step4.png";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home" className="home__section">
        <img src={homeSectoinBg} alt="" className="home__section__img" />
        <div className="home__section__overlay">
          <div className="home__section__overlay__content">
            <div className="home__section__overlay__left">
              <div className="home__section__overlay__left__heading">
                <span>Winter</span> is coming
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
      <div className="slogan__container">
        <div className="slogan__container__text">
          White Walker Inu ($WINU) has a strong community comprised of the army
          of the dead at its core and is your ticket to wealth creation.
        </div>
      </div>
      <section id="home" className="home__section">
        <img src={aboutSectionBg} alt="" className="home__section__img" />
        <div className="home__section__overlay">
          <div className="home__section__overlay__content">
            <div className="home__section__overlay__left">
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
                  ($WINU) solves this by investing a percentage of the marketing
                  wallet into yield bearing assets; with profits generated being
                  reintroduced back into the project in the form of
                </p>
                <p>
                  token price growth, further development, extensive marketing.
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
      <section id="home" className="home__section">
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
            <div className="home__section__overlay__left">
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
            <div className="home__section__overlay__left">
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
      <section id="home" className="home__section">
        <img
          src={understandingSectionBg}
          alt=""
          className="home__section__img"
        />
        <div className="home__section__overlay">
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
        <div className="home__section__bottom__overlay">
          <div className="home__section__bottom__overlay__text">
            As per the stories told by old nan the emergence of the White Walker
            Inu is accompanied by the long night. The long night will last for
            24 hours from the time of emergence of the White Walker Inu ($WINU)
            during which the sale tax will be 25% This is to punish early
            sellers and reward our strong diamond handed dead army, while at the
            same time incentivising holding and a positive boost on price.
          </div>
        </div>
      </section>
      <section id="steps" className="steps__section">
        <div className="steps__section__content">
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>1</span>
              </div>
              <img
                src={step1}
                alt=""
                className="steps__section__content__entry__heading__icon"
              />
              <div className="steps__section__content__entry__heading__sub__heading">
                Create MetaMask Wallet
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              As per the stories told by old nan the emergence of the White
              Walker Inu is accompanied by the long night. The long night will
              last for 24 hours from the time of emergence of the White Walker
              Inu ($WINU) during which the sale tax will be 25% This is to
              punish early sellers and reward our strong diamond handed dead
              army, while at the same time incentivising holding and a positive
              boost on price.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>2</span>
              </div>
              <img
                src={step2}
                alt=""
                className="steps__section__content__entry__heading__icon"
              />
              <div className="steps__section__content__entry__heading__sub__heading">
                Send ETH to Metamask
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              As per the stories told by old nan the emergence of the White
              Walker Inu is accompanied by the long night. The long night will
              last for 24 hours from the time of emergence of the White Walker
              Inu ($WINU) during which the sale tax will be 25% This is to
              punish early sellers and reward our strong diamond handed dead
              army, while at the same time incentivising holding and a positive
              boost on price.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>3</span>
              </div>
              <img
                src={step3}
                alt=""
                className="steps__section__content__entry__heading__icon"
              />
              <div className="steps__section__content__entry__heading__sub__heading">
                Connect to Uniswap
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              As per the stories told by old nan the emergence of the White
              Walker Inu is accompanied by the long night. The long night will
              last for 24 hours from the time of emergence of the White Walker
              Inu ($WINU) during which the sale tax will be 25% This is to
              punish early sellers and reward our strong diamond handed dead
              army, while at the same time incentivising holding and a positive
              boost on price.
            </div>
          </div>
          <div className="steps__section__content__entry">
            <div className="steps__section__content__entry__header">
              <div className="steps__section__content__entry__heading__heading">
                Step <span>4</span>
              </div>
              <img
                src={step4}
                alt=""
                className="steps__section__content__entry__heading__icon"
              />
              <div className="steps__section__content__entry__heading__sub__heading">
                Swap your ETH for Play
              </div>
            </div>
            <div className="steps__section__content__entry__info">
              As per the stories told by old nan the emergence of the White
              Walker Inu is accompanied by the long night. The long night will
              last for 24 hours from the time of emergence of the White Walker
              Inu ($WINU) during which the sale tax will be 25% This is to
              punish early sellers and reward our strong diamond handed dead
              army, while at the same time incentivising holding and a positive
              boost on price.
            </div>
          </div>
        </div>
      </section>
      <div className="slogan__container" style={{ backgroundColor: "#ffffff" }}>
        <div
          className="slogan__container__text"
          style={{
            color: "#131313",
            fontSize: 16,
          }}
        >
          Roadmap
        </div>
      </div>
      <section id="home" className="roadmap__section">
        <div className="roadmap__section__content">
          <div className="roadmap__section__content__card">
            <div className="roadmap__section__content__card__heading">
              Phase <span>1</span>
            </div>
            <div className="roadmap__section__content__card__entry">
              Token launch (Stealth and/or fair
            </div>
            <div className="roadmap__section__content__card__entry">
              launch on Uniswap).
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
              Etherscan verification.
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
              Regular community contests & vgiveaways.
            </div>
            <div className="roadmap__section__content__card__entry">
              Creating revenue generation
            </div>
            <div className="roadmap__section__content__card__entry">
              streams via investments.
            </div>
            <div className="roadmap__section__content__card__entry">
              DApp dashboard.
            </div>
            <div className="roadmap__section__content__card__entry">
              Certik audit.
            </div>
            <div className="roadmap__section__content__card__entry">
              50,000 holders
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
              Strategic partnerships
            </div>
            <div className="roadmap__section__content__card__entry">
              DAO features.
            </div>
            <div className="roadmap__section__content__card__entry">
              100,000 holders
            </div>
          </div>
        </div>
      </section>
      <section id="howtobuy" className="how__buy__section">
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
        <img src={howtobuy} alt="" className="how__buy__section__img" />
      </section>

      <div className="bar"></div>
      <div className="footer">
        <img src={footerBg} alt="" className="footer__img" />
        <div className="footer__overlay">
          <div className="footer__overlay__content">
            <div className="footer__overlay__content__col">Logo Here</div>
            <div className="footer__overlay__content__col">
              <div className="footer__overlay__content__col__heading">
                Quicklinks
              </div>
              <a href="#about" className="footer__overlay__content__col__entry">
                About
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                Tokenomics
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                Long Night
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                Roadmap
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                Dashboard
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                How to Buy
              </a>
            </div>
            <div className="footer__overlay__content__col">
              <div className="footer__overlay__content__col__heading">
                Contact us
              </div>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.425"
                  height="22.656"
                  viewBox="0 0 25.425 22.656"
                >
                  <path
                    id="Icon_awesome-phone-alt"
                    data-name="Icon awesome-phone-alt"
                    d="M24.7,16.01l-5.562-2.124a1.289,1.289,0,0,0-1.39.305l-2.463,2.682a17.536,17.536,0,0,1-8.8-7.841L9.495,6.837A.987.987,0,0,0,9.838,5.6L7.454.642A1.242,1.242,0,0,0,6.088.027L.924,1.089A1.1,1.1,0,0,0,0,2.124c0,11.35,10.324,20.532,23.042,20.532a1.172,1.172,0,0,0,1.162-.823l1.192-4.6A1.05,1.05,0,0,0,24.7,16.01Z"
                    transform="translate(0 0)"
                    fill="#0c0e17"
                  />
                </svg>
                111-111-111-111
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26.42"
                  height="17.834"
                  viewBox="0 0 26.42 17.834"
                >
                  <path
                    id="Icon_zocial-email"
                    data-name="Icon zocial-email"
                    d="M.072,20.323V5.648q0-.025.076-.484l8.637,7.389L.174,20.832a2.159,2.159,0,0,1-.1-.51ZM1.219,4.144a1.1,1.1,0,0,1,.433-.076H24.913a1.443,1.443,0,0,1,.459.076l-8.662,7.414-1.147.917-2.268,1.86-2.268-1.86-1.147-.917Zm.025,17.682,8.688-8.331,3.363,2.726,3.363-2.726,8.688,8.331a1.223,1.223,0,0,1-.433.076H1.652a1.154,1.154,0,0,1-.408-.076ZM17.8,12.552l8.611-7.389a1.521,1.521,0,0,1,.076.484V20.323a1.953,1.953,0,0,1-.076.51Z"
                    transform="translate(-0.072 -4.068)"
                    fill="#0c0e17"
                  />
                </svg>
                abc123@gmail.com
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20.162"
                  height="28.803"
                  viewBox="0 0 20.162 28.803"
                >
                  <path
                    id="Icon_material-location-on"
                    data-name="Icon material-location-on"
                    d="M17.581,3A10.074,10.074,0,0,0,7.5,13.081C7.5,20.642,17.581,31.8,17.581,31.8S27.662,20.642,27.662,13.081A10.074,10.074,0,0,0,17.581,3Zm0,13.681a3.6,3.6,0,1,1,3.6-3.6A3.6,3.6,0,0,1,17.581,16.681Z"
                    transform="translate(-7.5 -3)"
                    fill="#0c0e17"
                  />
                </svg>
                Street no.2 ravi Mohalla Lahore Pakistan
              </a>
            </div>
            <div className="footer__overlay__content__col">
              <div className="footer__overlay__content__col__heading">
                Socail Media
              </div>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="11.186"
                  height="21.42"
                  viewBox="0 0 11.186 21.42"
                >
                  <path
                    id="Path_11"
                    data-name="Path 11"
                    d="M87.259,21.421V11.662h3.332l.476-3.808H87.259V5.474c0-1.071.357-1.9,1.9-1.9h2.023V.119C90.71.119,89.52,0,88.211,0c-2.856,0-4.879,1.785-4.879,5V7.854H80v3.808h3.332v9.758Z"
                    transform="translate(-80)"
                    fill="#131313"
                    fill-rule="evenodd"
                  />
                </svg>
                Facebook
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.421"
                  height="17.375"
                  viewBox="0 0 21.421 17.375"
                >
                  <path
                    id="Path_12"
                    data-name="Path 12"
                    d="M44.783,19.374a12.384,12.384,0,0,0,12.5-12.5v-.6a9.673,9.673,0,0,0,2.142-2.261,9.879,9.879,0,0,1-2.5.714,4.63,4.63,0,0,0,1.9-2.38,10.915,10.915,0,0,1-2.737,1.071A4.25,4.25,0,0,0,52.875,2a4.471,4.471,0,0,0-4.4,4.4,2.32,2.32,0,0,0,.119.952,12.3,12.3,0,0,1-9.044-4.641,4.557,4.557,0,0,0-.6,2.261,4.728,4.728,0,0,0,1.9,3.689,4.012,4.012,0,0,1-2.023-.6h0a4.349,4.349,0,0,0,3.57,4.284,3.669,3.669,0,0,1-1.19.119,2.025,2.025,0,0,1-.833-.119,4.508,4.508,0,0,0,4.165,3.094,8.985,8.985,0,0,1-5.474,1.9A3.3,3.3,0,0,1,38,17.232a11.232,11.232,0,0,0,6.783,2.142"
                    transform="translate(-38 -2)"
                    fill="#131313"
                    fill-rule="evenodd"
                  />
                </svg>
                Twitter
              </a>
              <a href="#about" className="footer__overlay__content__col__entry">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.421"
                  height="21.42"
                  viewBox="0 0 21.421 21.42"
                >
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M10.71,1.9a32.84,32.84,0,0,1,4.284.119,5.52,5.52,0,0,1,2.023.357A4.179,4.179,0,0,1,19.04,4.4,5.52,5.52,0,0,1,19.4,6.426c0,1.071.119,1.428.119,4.284a32.84,32.84,0,0,1-.119,4.284,5.52,5.52,0,0,1-.357,2.023,4.179,4.179,0,0,1-2.023,2.023,5.52,5.52,0,0,1-2.023.357c-1.071,0-1.428.119-4.284.119A32.84,32.84,0,0,1,6.426,19.4,5.52,5.52,0,0,1,4.4,19.04,4.179,4.179,0,0,1,2.38,17.017a5.52,5.52,0,0,1-.357-2.023c0-1.071-.119-1.428-.119-4.284a32.84,32.84,0,0,1,.119-4.284A5.52,5.52,0,0,1,2.38,4.4a4.274,4.274,0,0,1,.833-1.19A2.012,2.012,0,0,1,4.4,2.38a5.52,5.52,0,0,1,2.023-.357A32.84,32.84,0,0,1,10.71,1.9m0-1.9a35.162,35.162,0,0,0-4.4.119A7.347,7.347,0,0,0,3.689.6a4.659,4.659,0,0,0-1.9,1.19A4.659,4.659,0,0,0,.6,3.689,5.422,5.422,0,0,0,.119,6.307,35.162,35.162,0,0,0,0,10.71a35.162,35.162,0,0,0,.119,4.4A7.347,7.347,0,0,0,.6,17.731a4.659,4.659,0,0,0,1.19,1.9,4.659,4.659,0,0,0,1.9,1.19,7.347,7.347,0,0,0,2.618.476,35.162,35.162,0,0,0,4.4.119,35.162,35.162,0,0,0,4.4-.119,7.347,7.347,0,0,0,2.618-.476,4.993,4.993,0,0,0,3.094-3.094,7.347,7.347,0,0,0,.476-2.618c0-1.19.119-1.547.119-4.4a35.162,35.162,0,0,0-.119-4.4,7.347,7.347,0,0,0-.476-2.618,4.659,4.659,0,0,0-1.19-1.9A4.659,4.659,0,0,0,17.731.6,7.347,7.347,0,0,0,15.113.119,35.162,35.162,0,0,0,10.71,0m0,5.236A5.386,5.386,0,0,0,5.236,10.71,5.474,5.474,0,1,0,10.71,5.236m0,9.044a3.506,3.506,0,0,1-3.57-3.57,3.506,3.506,0,0,1,3.57-3.57,3.506,3.506,0,0,1,3.57,3.57,3.506,3.506,0,0,1-3.57,3.57M16.422,3.689A1.309,1.309,0,1,0,17.731,5a1.321,1.321,0,0,0-1.309-1.309"
                    fill="#131313"
                    fill-rule="evenodd"
                  />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
