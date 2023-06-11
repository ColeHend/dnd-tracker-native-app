import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Button,
  Avatar,
  Snackbar,
  Backdrop,
  BackdropSubheader,
} from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Alert, View } from "react-native";
import Navbar from "./navbar";
const Appbar = ({title,children, selectedChoice, navbar, setSelectedChoice}) => {
    const [revealed, setRevealed] = useState(false);
    const captialize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    
  return (
    <Backdrop
      revealed={revealed}
      header={
        <AppBar
          title={title ?? "Title"}
          transparent
          leading={props => (
            <IconButton
              icon={props => (
                <Icon name={revealed ? "close" : "menu"} {...props} />
              )}
              onPress={() => setRevealed(prevState => !prevState)}
              {...props}
            />
          )}
        />
      }
      backLayer={<View style={{ height: 120 }} ><Navbar navbar={navbar}/></View>}
      subheader={<View><BackdropSubheader title={selectedChoice ? captialize(selectedChoice) : "Subheader"} />{children}</View>}
    />
  );
};

export default Appbar;