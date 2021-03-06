import React, { Component } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions, 
  TouchableHighlight,
} from 'react-native';

import { fullPageView } from '../styles/globalStyles';
import ChatListItem from './ChatListItem';

const ChatList = ({ navigator }) => {

  // destructuring the styles for easier readability in returned JSX
  const { container } = styles;

  return (
    <View style={{...fullPageView, ...container}}>
     <ChatListItem userName={'Cameron'} lastMessage={'Hey, what\'s up?'} navigator={navigator} />
    </View>
  )
};

const styles = {
  container: {
    paddingTop: 50,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
  }
}

export default ChatList;