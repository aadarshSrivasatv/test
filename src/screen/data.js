
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';

const data = [
  {
    id: '1',
    image: require('../asset/pen.jpg'),
    name: 'pen',
    description:
      'A pen is a writing instrument that uses ink to make marks on paper or other surfaces. It consists of a small container or reservoir of ink, called an ink cartridge or inkwell, and a mechanism for delivering the ink to the writing surface. ',
    price: '5',
  },
  {
    id: '2',
    image: require('../asset/pencil.jpg'),
    name: 'pencil',
    description:
      'A pencil is a writing instrument that consists of a thin cylindrical graphite core (also known as "lead") enclosed in a wooden or plastic shaft.',
    price: '3',
  },
  {
    id: '3',
    image: require('../asset/scale.jpg'),
    name: 'scale',
    description:
      'A scale typically consists of a straight edge with evenly spaced markings, usually in millimeters or inches, that are used to measure distances and create accurate drawings.',
    price: '10',
  },
  {
    id: '4',
    image: require('../asset/map.webp'),
    name: 'map',
    description:
      'a map usually refers to a printed or drawn representation of a geographic area, such as a city, state, or country. Maps can be used for a variety of purposes, including navigation, planning, and referenc',
    price: '2',
  },
  {
    id: '5',
    image: require('../asset/eraser.png'),
    name: 'eraser',
    description:
      'An eraser is a tool used for removing marks or writings from a surface, usually on paper or a chalkboard. It is typically made of a soft rubber material that is able to easily lift or rub off pencil marks or other markings without damaging the surface.',
    price: '5',
  },
];

export const dashBoardData = [
  {id: '1', heading: 'Item sold', amount: 200},
  {id: '2', heading: 'Total Selling', amount: 3000},
  {id: '3', heading: 'Total profit', amount: 499},
  {id: '4', heading: 'profit%', amount: 30},
];



export function pushData(prop) {
  // console.log(prop);
  data.push(prop);
}
export function popData() { 
 data.pop()
}
export default data;
