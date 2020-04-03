import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Button } from 'react-native-elements'
import { db } from '../config/firebase'



export class Home extends Component {
  state = {
    users: []
  }

  componentDidMount() {
    db.collection('users').get().then(querySnapshot => {
      this.setState({users: querySnapshot.docs.map(doc => doc.data())})
    })
  }

  render() {
    const { users } = this.state

    const userNames = users.map(user => <Text key={user.id}>{JSON.stringify(user)}</Text>)

    return (
      <View style={styles.container}>
        {userNames}
        <Button title="Click me!"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
