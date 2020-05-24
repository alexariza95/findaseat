import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';
import axios from 'axios';

class BookList extends React.Component {

  state = {
      books: [],
      isLoading: true,
      errors: null
    };

  getBooks(){
    axios.get('https://demo6823895.mockable.io/findaseat')
      .then(response => {
            const data = response.data
            console.log(data)
            const list = data.map( u =>
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ margin: 10 }}>{u.isbn}</Text>
              <Text style={{ margin: 10 }}>{u.title}</Text>
              </View>
            )
            this.setState({list})
       })

      .then(books => {
            this.setState({
              books,
              isLoading: false
            });
          })
          // We can still use the `.catch()` method since axios is promise-based
          .catch(error => this.setState({ error, isLoading: false }));

      }

  async componentDidMount() {
    this.getBooks();
  }

  render() {
    const { isLoading, books } = this.state;
            return (
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        {this.state.list}
                    </View>
            );
  }
}
export default BookList;