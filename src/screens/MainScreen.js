import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { G, Path } from 'react-native-svg';

import CircularSlider from '../components/CircularSlider';

export const MainScreen = ({ navigation }) => {
  const goToAbout = () => {
    navigation.navigate('About');
  };

  const [angle, setAngle] = useState({
    startAngle: (Math.PI * 10) / 6,
    angleLength: (Math.PI * 7) / 6,
  });

  const calculateMinutesFromAngle = (angle) => {
    return Math.round(angle / ((2 * Math.PI) / (12 * 12))) * 5;
  };

  const calculateTimeFromAngle = (angle) => {
    const minutes = calculateMinutesFromAngle(angle);
    const h = Math.floor(minutes / 60);
    const m = minutes - h * 60;

    return { h, m };
  };

  const roundAngleToFives = (angle) => {
    const fiveMinuteAngle = (2 * Math.PI) / 144;

    return Math.round(angle / fiveMinuteAngle) * fiveMinuteAngle;
  };

  const onUpdate = ({ startAngle, angleLength }) => {
    setAngle({
      startAngle: roundAngleToFives(startAngle),
      angleLength: roundAngleToFives(angleLength),
    });
  };

  const SPLIT_ICON = (
    <G>
      <Path
        clip-rule="evenodd"
        d="M16,0C7.163,0,0,7.163,0,16c0,8.836,7.163,16,16,16   c8.836,0,16-7.163,16-16C32,7.163,24.836,0,16,0z M16,30C8.268,30,2,23.732,2,16C2,8.268,8.268,2,16,2s14,6.268,14,14   C30,23.732,23.732,30,16,30z"
        fill="#fff"
        fill-rule="evenodd"
      />
      <Path
        clip-rule="evenodd"
        d="M22.729,21.271l-5.268-5.269l5.238-5.195   c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.39-1.034-0.39-1.428,0l-5.231,5.188l-5.309-5.31c-0.394-0.396-1.034-0.396-1.428,0   c-0.394,0.395-0.394,1.037,0,1.432l5.301,5.302l-5.331,5.287c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.429,0   l5.324-5.28l5.276,5.276c0.394,0.396,1.034,0.396,1.428,0C23.123,22.308,23.123,21.667,22.729,21.271z"
        fill="#fff"
        fill-rule="evenodd"
      />
    </G>
  );

  return (
    <View style={styles.center}>
      <Text>MainScreen!</Text>
      <CircularSlider
        startAngle={angle.startAngle}
        angleLength={angle.angleLength}
        onUpdate={onUpdate}
        segments={5}
        strokeWidth={40}
        radius={145}
        gradientColorFrom="#ff9800"
        gradientColorTo="#ffcf00"
        showClockFace
        clockFaceColor="#9d9d9d"
        bgCircleColor="#171717"
        stopIcon={
          <G scale="0.8" transform={{ translate: '-15, -15' }}>
            {SPLIT_ICON}
          </G>
        }
        // startIcon={<G>SPLIT_ICON</G>}
      />
      <Button title="О приложении" onPress={goToAbout} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
