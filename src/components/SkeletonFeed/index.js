import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

import styles from './styles';

const SkeletonFeed = () => {
  return (
    <View style={styles.container}>
      <SkeletonPlaceholder>
        <View style={styles.borderCard}>
          <View style={styles.headerContainer}>
            <View style={styles.titleText}></View>
          </View>
          <View style={styles.mainContainer}>
            <View style={styles.image}></View>
          </View>
        </View>
      </SkeletonPlaceholder>
    </View>
  );
};

export default SkeletonFeed;
