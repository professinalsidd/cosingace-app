import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CardsTypes} from '../../types';
import {COLORS, LAYOUT} from '../../themes/theme';
import {Button, Card, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const CardComp = ({
  headerTitle,
  type,
  label,
  description,
  link,
}: CardsTypes) => {
  const navigation = useNavigation();
  return (
    <View style={{}}>
      <View style={[LAYOUT.flexRowBetween]}>
        <View>
          <Text variant="labelLarge">{headerTitle}</Text>
        </View>
        <Button onPress={() => navigation.navigate(link as never)} style={{}}>
          See All
        </Button>
      </View>
      <Card style={styles.card}>
        <Text variant="labelMedium">{label}</Text>
        <Text variant="labelSmall" style={styles.des}>
          {description}
        </Text>
      </Card>
    </View>
  );
};

export default CardComp;

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
    padding: '3%',
    elevation: 5,
    marginVertical: '2%',
    shadowColor: COLORS.LIGHT_GREEN,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREEN,
  },
  des: {marginVertical: 2},
});
