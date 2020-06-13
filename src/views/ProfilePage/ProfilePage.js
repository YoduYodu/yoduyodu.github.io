import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import {makeStyles} from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";

import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/tong.jpg";

import styles from "assets/jss/material-kit-react/views/profilePage.js";
import {CloudDownload, Code} from "@material-ui/icons";
import CustomCard from "../../components/CustomCard/CustomCard";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Profile Page"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Tong Wang</h3>
                    <h6>SOFTWARE ENGINEER</h6>
                    <Button
                        href={require("assets/pdf/Resume.pdf")}
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                      <CloudDownload className={classes.icons} /> Résumé
                    </Button>
                    <Button href="https://www.linkedin.com/in/wang7ong" target="_blank" justIcon link className={classes.margin5}>
                      <i className={"fab fa-linkedin"} />
                    </Button>
                    <Button href="https://github.com/YoduYodu" target="_blank" justIcon link className={classes.margin5}>
                      <i className={"fab fa-github"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <p>
              Graduating in May 2021, with development experience in big/medium/startup tech companies. <br/> A developer with proficiency in Java, C/C++, Python, GO, Javascript.
              </p>
              <p>
                Visual Thinker, Adventurer, Idly Diligent
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Projects",
                      tabIcon: Code,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <CustomCard title="Data Visualization" imgSrc={require("assets/img/housing-bg.jpg")}
                                        visitButtonText="Visit Site" visitButtonColor="primary" visitButtonHref="https://usf-cs360-spring2019.github.io/project-YoduYodu/"
                                        githubButtonText="GitHub" githubButtonColor="primary" githubButtonHref="https://usf-cs360-spring2019.github.io/project-YoduYodu/"
                                        content="Visualizing rent/house price data in United States, using html/css/javascript/D3.js"/>
                          </ GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <CustomCard title="Sentiment classifier" imgSrc={require("assets/img/happy-unhappy-faces.jpg")}
                                        visitButtonText="Visit Site"
                                        githubButtonText="GitHub" githubButtonColor="primary" githubButtonHref="https://github.com/YoduYodu/sentiment-sensor-backend"
                                        content="A machine learning web application for classifying text sentiments, using python/django/react.js/fast.ai/mongoDB(NOSQL), deployed on Google Cloud Platform"/>
                          </ GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                                <CustomCard title="TripAdvisor(fullstack)" imgSrc={require("assets/img/tripadvisor.png")}
                                            visitButtonText="Visit Site"
                                            githubButtonText="GitHub" githubButtonColor="primary" githubButtonHref="https://github.com/YoduYodu/trip-advisor-backend"
                                            content="A web application for hotel browsing, using React.js/Java/MySQL, deployed on Google Cloud Platform."/>
                            </ GridItem>
                        </GridContainer>
                      )
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
