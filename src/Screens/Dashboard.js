import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import Header from '../Components/Header';
import SwipeUpDown from 'react-native-swipe-up-down';
import CategoryList from './CategoryList';
import { Card } from 'react-native-paper';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
    };
  }

  onAddTocart = item => {
    const array = [...this.state.cartList];
    const index = array.indexOf(item);
    if (index !== -1) {
      array[index].qty += 1;
    } else {
      item.qty = item.qty + 1;
      array.push(item);
    }

    this.setState({cartList: array});
  };

  getItemTotal = () => {
    const array = [...this.state.cartList];
    let total = 0;
    array.forEach(element => {
      total = element.price + total;
    });

    return total;
  };

  getItemQty = () => {
    const array = [...this.state.cartList];
    let total = 0;
    array.forEach(element => {
      total = element.qty + total;
    });

    return total;
  };

  getCartTotal = () => {
    const array = [...this.state.cartList];
    let total = 0;
    array.forEach(element => {
      total = element.qty * element.price + total;
    });

    return total;
  };
  render() {
    const {cartList} = this.state;
    // eslint-disable-next-line react/no-unstable-nested-components
    const Item = ({item}) => (
      <TouchableOpacity
        onPress={() => this.onAddTocart(item)}
        style={styles.item}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.title}> Rs.{item.price}</Text>
      </TouchableOpacity>
    );

    const Category = ({item}) => (
      <TouchableOpacity
        // onPress={() => this.onAddTocart(item)}
        style={styles.item}>
        <Text style={styles.title}>{item}</Text>
      </TouchableOpacity>
    );
    return (
      <SafeAreaView>
        <Header />

        <View style={styles.mainWrapper}>
          <View style={styles.itemListWrapper}>
            <View style={{flexDirection: 'column',flex:1}}>
              <View style={{flex: 1}}>
                <FlatList
                  data={itemList}
                  renderItem={({item}) => <Item item={item} />}
                  keyExtractor={item => item.name}
                  numColumns={4}
                />
              </View>
              <Card style={{elevation:5,position:'absolute',bottom:'12%',backgroundColor:'#222121',borderColor:'white',borderWidth:5}}>
                <FlatList
                  data={categories}
                  renderItem={({item}) => <Category item={item} />}
                  keyExtractor={item => item.name}
                  numColumns={4}
                />
              </Card>
            </View>
          </View>
          <View style={styles.cartWrapper}>
            <View style={styles.cartTableHead}>
              <Text style={styles.tableHead}>Item Name</Text>
              <Text style={styles.tableHead}>Price</Text>
              <Text style={styles.tableHead}>QTY</Text>
              <Text style={styles.tableHead}>Total</Text>
            </View>
            <View style={{height: '60%'}}>
              <FlatList
                data={cartList}
                renderItem={({item}) => <CartItem data={item} />}
                keyExtractor={item => item.name}
              />
            </View>

            <View
              style={{
                height: 50,
                flexDirection: 'row',
                backgroundColor: '#D36767',
              }}>
              <Text style={styles.tableHead}>{cartList.length}</Text>
              <Text style={styles.tableHead}>{this.getItemTotal()}</Text>
              <Text style={styles.tableHead}>{this.getItemQty()}</Text>
              <Text style={styles.tableHead}>{this.getCartTotal()}</Text>
            </View>

            <View
              style={{
                height: 80,
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
                marginBottom: 10,
              }}>
              <TouchableOpacity style={styles.hold}>
                <Text style={styles.btnText}>Hold</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.clear}>
                <Text style={styles.btnText}>Clear</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bill}>
                <Text style={styles.btnText}>Bill</Text>
              </TouchableOpacity>
            </View>

            <View style={{height: 20}}></View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const CartItem = ({data}) => (
  <View style={styles.cartItem}>
    <Text style={styles.cartItemText}>{data.name}</Text>
    <Text style={styles.cartItemText}>{data.price}</Text>
    <Text style={styles.cartItemText}>{data.qty}</Text>
    <Text style={styles.cartItemText}>{data.price * data.qty}</Text>
  </View>
);

const itemList = [
  {
    name: ' 1 Plate Idli',
    qty: 0,
    price: 30,
  },
  {
    name: 'Single Idli',
    qty: 0,
    price: 15,
  },
  {
    name: 'Single Poori',
    qty: 0,
    price: 20,
  },
  {
    name: 'Plate poori',
    qty: 0,
    price: 40,
  },
  {
    name: 'Khali Dosa',
    qty: 0,
    price: 20,
  },
  {
    name: 'Masal Dosa',
    qty: 0,
    price: 40,
  },
];

const categories=[
  "Breakfast","Meals","Snacks","Cold-drinks"
]

const styles = StyleSheet.create({
  mainWrapper: {
    height: '100%',
    flexDirection: 'row',
  },
  itemListWrapper: {
    flex: 1.5,
    backgroundColor: '#222121',
  },
  cartWrapper: {
    flex: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
  },
  item: {
    width: '22%',
    backgroundColor: 'white',
    height: 80,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  cartTableHead: {
    flexDirection: 'row',
    backgroundColor: '#222121',
  },
  tableHead: {
    width: '25%',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    padding: 10,
  },
  cartItem: {
    backgroundColor: '#D7D2E6',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  cartItemText: {
    width: '25%',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
  },
  hold: {
    width: '30%',
    backgroundColor: '#53D823',
    borderRadius: 10,
    justifyContent: 'center',
  },
  clear: {
    width: '30%',
    backgroundColor: '#D30B0B',
    borderRadius: 10,
    justifyContent: 'center',
  },
  bill: {
    width: '30%',
    backgroundColor: '#14C107',
    borderRadius: 10,
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default Dashboard;
