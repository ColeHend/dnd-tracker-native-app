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
const Appbar = ({title,children, selectedChoice, setSelectedChoice}) => {
    const [revealed, setRevealed] = useState(false);
    const captialize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const navbar = [
        {title: 'Home', color: '#ff0000', onPress: () => setSelectedChoice('home')},
        {title: 'Projects', color: '#0000ff', onPress: () => setSelectedChoice('projects')},
        {title: 'Spells', color: '#00ff00', onPress: () => setSelectedChoice('spells')},
        {title: 'Classes', color: '#ff00000', onPress: () => setSelectedChoice('classes')},
      ]
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