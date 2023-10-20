import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const menuItems = [
    {
      id: '1',
      name: 'Spaghetti Carbonara',
      cuisine: 'Italian',
      fontWeight: 'bold',
      price: 800,
      image: require('./assets/food/pic1.jpg'),
      description: 'Delicious pasta dish with creamy sauce and bacon.',
    },
    {
      id: '2',
      name: 'Sushi Rolls',
      cuisine: 'Japanese',
      price: 400,
      image: require('./assets/food/pic2.jpg'),
      description: 'Fresh and tasty sushi rolls with various fillings.',
    },
    {
      id: '3',
      name: 'Chicken Tikka Masala',
      cuisine: 'Indian',
      price: 200,
      image: require('./assets/food/pic3.jpg'),
      description: 'Spicy chicken curry served with rice and naan.',
    },
    {
      id: '4',
      name: 'Burger and Fries',
      cuisine: 'American',
      price: 300,
      image: require('./assets/food/pic4.jpg'),
      description: 'Classic burger and crispy fries.',
    },
    {
      id: '5',
      name: 'Pad Thai',
      cuisine: 'Thai',
      price: 650,
      image: require('./assets/food/pic5.jpg'),
      description: 'Stir-fried noodles with shrimp and vegetables.',
    },
  ];
 
  const [searchText, setSearchText] = useState(''); // State to store the search input

  // Filter the menuItems based on the search text
  const filteredMenuItems = menuItems.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );
  
  
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FF6B6B', '#FF6BCF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.header}
      >
        
          <Image
          source={require('./assets/logo/logo1.png')} // Add your logo image path
          style={styles.logo}
        />
        <Text style={styles.headerText}>Food App</Text>
      </LinearGradient>

       
        
      <TextInput
        style={styles.searchInput}
        placeholder="Search for dishes"
        onChangeText={setSearchText}
        value={searchText}
      />

      <FlatList
        data={filteredMenuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Image source={item.image} style={styles.itemImage} />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemCuisine}>{item.cuisine}</Text>
              <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
            </View>
          </View>
        )}
      />
      <View style={styles.footer}>
        <Image
          source={require('./assets/dilvery/dil1.jpg')}
          style={styles.footerIcon}
        />
        <View style={styles.categoryContainer}>
          <Text style={styles.category}>Categories</Text>
        </View>
        <Image
          source={require('./assets/cart/cart1.png')}
          style={styles.footerIcon}
        />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    padding: 15,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width:30, // Adjust the width of the logo
    height:30, // Adjust the height of the logo
    marginRight:50, // Add some margin between the logo and text
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    textShadowColor: 'rgba(0, 0, 0, 0.75',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    justifyContent: 'center'
  },
  
  searchInput: {
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemCuisine: {
    fontSize: 14,
    color: 'gray',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
  itemDescription: {
    fontSize: 14,
    color: 'black',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footerIcon: {
    width: 30,
    height: 30,
  },
  categoryContainer: {
    flex: 1,
    alignItems: 'center',
  },
  category: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
