import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useApi} from './src/hooks/hookApi';
import {Colors, Scaler, Size, Typo} from './src/styles';
import {ExpandableView} from './src/components';

const App = () => {
  const [catList, setCatList] = React.useState<any>([]);
  const [offset, setOffset] = React.useState<number>(0);
  const [catPaginationData, setCatPaginationData] = React.useState<any>([]);
  const [isOnLoadMore, setIsOnLoadMore] = React.useState<boolean>(false);
  const [isEndList, setIsEndList] = React.useState<Boolean>(false);

  const getApiData = async () => {
    const data = await useApi('https://api.thecatapi.com/v1/breeds');

    setCatList(data.data);
    setCatPaginationData(data.data.slice(0, 10));
    setOffset(10);
  };

  React.useEffect(() => {
    getApiData();
  }, []);

  // === added more data to the list
  const addMoreData = () => {
    if (catList.length && offset >= catList.length) {
      setIsEndList(true);
    } else {
      setIsEndList(false);
      setIsOnLoadMore(true);
      const nextData = catList.slice(offset, offset + 10);
      const newData = [...catPaginationData, ...nextData];
      setOffset(offset + 10);

      setCatPaginationData(newData);

      setTimeout(() => {
        setIsOnLoadMore(false);
      }, 2000);
    }
  };

  // ================
  //
  // ======== GAP ===
  //
  // ================

  // == render list footer
  const _renderListFooter = (): any => {
    return (
      <View style={styles.footerList}>
        {isOnLoadMore && <ActivityIndicator />}
        {isEndList && <Text style={styles.textNoMoreData}>No More Data</Text>}
      </View>
    );
  };

  // == render expandable component
  const _renderExpandable = (item: any, index: number): any => {
    return (
      <ExpandableView title={item?.name} key={index}>
        <View style={styles.childContainer}>
          <Text style={styles.textChild}>{item?.description}</Text>
        </View>
      </ExpandableView>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={({id}) => id}
        contentContainerStyle={styles.listContainer}
        data={catPaginationData}
        onEndReachedThreshold={0.2}
        onEndReached={addMoreData}
        ListFooterComponent={_renderListFooter}
        renderItem={({item, index}) => _renderExpandable(item, index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,
  },

  childContainer: {
    padding: Size.SIZE_14,
  },

  listContainer: {
    paddingBottom: Scaler.scaleSize(60),
    paddingHorizontal: Size.SIZE_24,
    paddingTop: Size.SIZE_14,
  },

  footerList: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Size.SIZE_24,
  },

  // === text style

  textChild: {
    ...(Typo.TextSmallRegular as any),
    color: Colors.COLOR_GRAY,
  },

  textNoMoreData: {
    ...(Typo.TextNormalRegular as any),
    color: Colors.COLOR_GRAY,
  },
});

export default App;
