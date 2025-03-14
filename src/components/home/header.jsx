import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../../theme/color';
import { Logo,Plus,Messenger,Heart } from '../../utils/icons';

const {RED, WHITE} = COLORS;

const Header = () => {
  return (
    <View style={styles.header}>
      <Logo />

      <View style={styles.actions}>
        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotConteiner}>
            <View style={styles.dot} />
          </View>
          <Heart size={24} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <View style={styles.dotConteiner}>
            <View style={styles.dot} />
          </View>
          <Messenger size={24} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Plus size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 45,
    alignItems: 'center',
    paddingBottom: 4,
  },
  actions: {
    flexDirection: 'row',
    gap: 24,
  },
  dotConteiner: {
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 2,
    width: 11,
    height: 11,
    backgroundColor: WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    backgroundColor: RED,
    width: 8,
    height: 8,
    borderRadius: 8,
  },
});