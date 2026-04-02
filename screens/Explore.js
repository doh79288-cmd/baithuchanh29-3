import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native';
import { Ionicons, Feather, MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const cardWidth = (width - 55) / 2; 

const categories = [
  {
    id: '1',
    name: 'Fresh Fruits\n& Vegetable',
    image: require('../assets/cat-veg.png'),
    bgColor: 'rgba(83, 177, 117, 0.1)',
    borderColor: '#53B175',
  },
  {
    id: '2',
    name: 'Cooking Oil\n& Ghee',
    image: require('../assets/cat-oil.png'),
    bgColor: 'rgba(248, 164, 76, 0.1)',
    borderColor: '#F8A44C',
  },
  {
    id: '3',
    name: 'Meat & Fish',
    image: require('../assets/cat-meat.png'),
    bgColor: 'rgba(247, 165, 147, 0.25)',
    borderColor: '#F7A593',
  },
  {
    id: '4',
    name: 'Bakery & Snacks',
    image: require('../assets/cat-bakery.png'),
    bgColor: 'rgba(211, 176, 224, 0.25)',
    borderColor: '#D3B0E0',
  },
  {
    id: '5',
    name: 'Dairy & Eggs',
    image: require('../assets/cat-dairy.png'),
    bgColor: 'rgba(253, 229, 152, 0.25)',
    borderColor: '#FDE598',
  },
  {
    id: '6',
    name: 'Beverages',
    image: require('../assets/cat-bev.png'),
    bgColor: 'rgba(183, 223, 245, 0.25)',
    borderColor: '#B7DFF5',
  },
];

export default function Explore({ navigation }) {
  
  // Component phụ cho Tab Item bên dưới
  const TabItem = ({ label, icon, type = 'feather', active = false }) => {
    const Color = active ? "#53B175" : "#181725";
    return (
      <TouchableOpacity 
        style={styles.tabItem}
        onPress={() => {
          if (label === "Shop") navigation.navigate("Home");
        }}
      >
        {type === 'feather' && <Feather name={icon} size={24} color={Color} />}
        {type === 'ionicons' && <Ionicons name={icon} size={24} color={Color} />}
        {type === 'mci' && <MaterialCommunityIcons name={icon} size={24} color={Color} />}
        <Text style={[styles.tabLabel, { color: Color }]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[
        styles.catCard, 
        { backgroundColor: item.bgColor, borderColor: item.borderColor }
      ]}
      activeOpacity={0.8}
      onPress={() => item.id === '6' && navigation.navigate("Beverages")}
    >
      <Image source={item.image} style={styles.catImage} resizeMode="contain" />
      <Text style={styles.catName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Find Products</Text>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={22} color="#181725" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search Store" 
          style={styles.searchInput}
          placeholderTextColor="#7C7C7C"
        />
      </View>

      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper} 
      />

      {/* Thêm Bottom Tab giống trang Home */}
      <View style={styles.bottomTabContainer}>
        <TabItem label="Shop" icon="storefront-outline" type="mci" />
        <TabItem label="Explore" icon="search" type="ionicons" active={true} />
        <TabItem label="Cart" icon="shopping-cart" type="feather" />
        <TabItem label="Favourite" icon="heart" type="feather" />
        <TabItem label="Account" icon="user" type="feather" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#181725',
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F3F2',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 15,
    paddingHorizontal: 15,
    alignItems: 'center',
    height: 52,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    fontWeight: '600',
    color: '#181725',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 110, // Tăng padding để không bị Tab che mất item cuối
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  catCard: {
    width: cardWidth,
    height: 189,
    borderRadius: 18,
    borderWidth: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  catImage: {
    width: '100%',
    height: 90,
    marginBottom: 15,
  },
  catName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#181725',
    textAlign: 'center',
    lineHeight: 22,
  },
  /* Styles cho Bottom Tab */
  bottomTabContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 12,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // Đổ bóng cho tab
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabItem: {
    alignItems: 'center',
    width: width / 5,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 4,
  },
});