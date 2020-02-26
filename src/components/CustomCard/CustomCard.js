import React from "react";
// material-ui components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import { cardTitle } from "assets/jss/material-kit-react.js";

const styles = {
    ...imagesStyles,
    cardTitle,
};

const useStyles = makeStyles(styles);

export default function Cards(props) {
    const classes = useStyles();
    return (
        <Card style={{width: "20rem"}}>
            <img
                style={{height: "180px", width: "100%", display: "block"}}
                className={classes.imgCardTop}
                src={props.imgSrc}
                alt="Card-img-cap"
            />
            <CardBody>
                <h4 className={classes.cardTitle}>{props.title}</h4>
                <p>{props.content}</p>
                <Button href={props.visitButtonHref} target="_blank" color={props.visitButtonColor}>{props.visitButtonText}</Button>
                <Button href={props.githubButtonHref} target="_blank" color={props.githubButtonColor}>{props.githubButtonText}</Button>
            </CardBody>
        </Card>
    );
}