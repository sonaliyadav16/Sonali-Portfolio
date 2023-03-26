import React, {useContext} from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import LoaderContext from "../contexts/loaderContext";

const LoaderContainer = ({ children }) => {
    const {setIsLoading} = useContext(LoaderContext)
    const classes = useStyles();
    return (
        <motion.div
            initial={{
                y:0
            }}
            animate={{
                y:"-100vh"
            }}
            onAnimationComplete={definition => {
                setIsLoading(false)
              }}
            className={classes.container}
            >
            <div className={classes.content}>{children}</div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
 
}));

export default LoaderContainer;
