import { FlatList, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, RefreshControl } from "react-native";

const DATA = [
  {
    id: '11',
    title: 'İlk Eşya',
  },
  {
    id: '22',
    title: 'İkinci Eşya',
  },
  {
    id: '33',
    title: 'Üçüncü Eşya',
  },
  {
    id: '44',
    title: 'İlk Eşya',
  },
  {
    id: '55',
    title: 'İkinci Eşya',
  },
  {
    id: '66',
    title: 'Üçüncü Eşya',
  },
  {
    id: '77',
    title: 'İlk Eşya',
  },
  {
    id: '88',
    title: 'İkinci Eşya',
  },
  {
    id: '99',
    title: 'Üçüncü Eşya',
  },
  {
    id: '111',
    title: 'İlk Eşya',
  },
  {
    id: '222',
    title: 'İkinci Eşya',
  },
  {
    id: '333',
    title: 'Üçüncü Eşya',
  },
  {
    id: '444',
    title: 'İlk Eşya',
  },
  {
    id: '555',
    title: 'İkinci Eşya',
  },
  {
    id: '666',
    title: 'Üçüncü Eşya',
  },
  {
    id: '777',
    title: 'İlk Eşya',
  },
  {
    id: '888',
    title: 'İkinci Eşya',
  },
  {
    id: '999',
    title: 'Üçüncü Eşya',
  },
];

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListHeaderComponent={() => (
            <View style={styles.header}>
              <Text>   BAŞLIK (HEADER)             MURAT KAYNAR 1046</Text>
            </View>
          )}
          ListFooterComponent={() => (
            <View style={styles.footer}>
              <Text>Footer</Text>
            </View>
          )}
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={() => {}} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    backgroundColor: '#ff0011',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    padding: 45,
    backgroundColor: "aqua",
  },
  footer: {
    padding: 30,
    backgroundColor: "pink",
  },
});

export default App