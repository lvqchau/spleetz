import React, { Component } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './Debt.component.style'
import COLORS from '../../assets/colors'
import Avatar from '../../components/Avatar'

export default class DebtItem extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isPaying: false
    }
  }

  acceptBill = async (bill, id) => {
    await this.setState({isPaying: true})
    await this.props._acceptBill(item.billId, item.id)
    this.setState({isPaying: false})
  }

  render() {
    const { user, item, displayPrice, getTotalPrice } = this.props
    return (
      <View>
        <Avatar source={user.avatarUrl} size={36} style={{ borderColor: 'white', borderWidth: 1, marginRight: 5 }} />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <View>
            <Text style={styles.debtStatus}>You lend
								<Text style={styles.debtInfo}> {user.fullname.split(' ')[0]}</Text>
              <Text style={[styles.debtInfo, styles.moneyInfo]}> {displayPrice(getTotalPrice(item.items))}</Text>
            </Text>
          </View>
          <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end' }}>
            {
              this.state.isPaying ?
                <ActivityIndicator size={25} color="#0000ff" />
                :
                <>
                  {
                    item.status === 'undone'
                      ?
                      <TouchableOpacity onPress={() => this.acceptBill(item.billId, item.id)} >
                        <Text style={{ color: COLORS.aqua }}>PAID</Text>
                      </TouchableOpacity>
                      :
                      <View>
                        <Ionicons name="ios-checkmark" size={30} color={COLORS.green} />
                      </View>
                  }
                </>
            }
          </View>
        </View>
      </View>
    )
  }
}
