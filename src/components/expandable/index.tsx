import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  Platform,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import styles from './styles';

type ExpandableProps = PropsWithChildren<{
  title: string;
  containerStyle?: {};
  headerStyle?: {};
  contentStyle?: {};
  titleStyle?: {};
  onHeaderPress?(): void;
  index?: number;
  activeIndex?: number;
  onTopPressed?: any;
}>;

const ExpandableView = ({
  children,
  title,
  containerStyle,
  headerStyle,
  contentStyle,
  titleStyle,
  onHeaderPress,
  index,
  activeIndex,
  onTopPressed,
}: ExpandableProps) => {
  const [detail, showDetail] = React.useState<boolean>(false);

  const rotateAnimation = React.useRef(new Animated.Value(1)).current;

  // == set type of animation
  type AnimationConfig = {
    duration: number;
    create: {};
    update: {};
    delete: {};
  };

  //CONFIG
  const EXPAND_ANIMATION_CONFIG: AnimationConfig = {
    duration: 400,
    create: {
      type: 'linear',
      property: 'opacity',
      duration: 200,
    },
    update: {
      type: 'spring',
      springDamping: Platform.OS == 'ios' ? 0.9 : 1.8,
    },
    delete: {
      type: 'linear',
      property: 'opacity',
      duration: 100,
    },
  };

  React.useEffect(() => {
    //onTriggered();
    if (activeIndex == index) {
      onOpenChild();
    } else {
      onCloseChild();
    }
  }, [activeIndex]);

  function toggleAnimation() {
    Animated.timing(rotateAnimation, {
      toValue: detail ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }

  function onOpenChild() {
    LayoutAnimation.configureNext(EXPAND_ANIMATION_CONFIG);
    showDetail(true);
    toggleAnimation();
  }

  function onCloseChild() {
    LayoutAnimation.configureNext(EXPAND_ANIMATION_CONFIG);
    showDetail(false);
    toggleAnimation();
  }

  function renderChild() {
    return !detail ? <View style={[contentStyle]}>{children}</View> : null;
  }

  function renderHeader() {
    return (
      <View style={styles.headerParent}>
        <TouchableOpacity
          style={[styles.header, headerStyle]}
          activeOpacity={1}
          onPress={() => showDetail(!detail)}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={[styles.container, containerStyle]}>
      {renderHeader()}
      {renderChild()}
    </View>
  );
};

export default ExpandableView;
