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
import { StyleSheet } from "react-native";
import { Alert, View } from "react-native";
import Navbar from "./navbar";
const Navigationbar = ({title,children, selectedChoice, navbar, userInfo, setSelectedChoice}) => {
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
          trailing={props => (
            <View style={{ flexDirection: "row" }}>
              {
                userInfo.loggedIn ?
                <IconButton
                  icon={props => userInfo.loggedIn ? <Avatar label={userInfo.username} autoColor /> : 
                  null}
                  onPress={() => Alert.alert("Profile!")}
                  {...props}/> :
                  <Button
                    title="Login"
                    onPress={() => Alert.alert("Login!")}
                    style={styles.button}
                    {...props}
                  >Login</Button>
              }
              <IconButton
                icon={props => <Icon name="dots-vertical" {...props} />}
                onPress={() => Alert.alert("More")}
                {...props}
                />
            </View>
          )}

        />
      }
      backLayer={<View style={{ height: 120 }} ><Navbar navigationbar={navbar}/></View>}
      subheader={<View><BackdropSubheader title={selectedChoice ? captialize(selectedChoice) : "Subheader"} />{children}</View>}
    />
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: 'primary-color-dark',
    color: '#FFFFFF',
    padding: 10,
  },
});
export default Navigationbar;