import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import wateringImg from '../assets/watering.png';

export function Welcome() {
  return (
    <View>
      <Text>
        Gerencie suas plantas de forma fácil.
      </Text>

      <Image source={wateringImg} />

      <TouchableOpacity>
        <Text>Não esqueca mais de regar suas plantas.
        Nós cuidadmos de lembrar voçe sempre que precisar.
      </Text>
      </TouchableOpacity>
    </View>
  )
}