import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function HomeScreen({}) {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('main.screens.home.title')}</Text>
    </View>
  );
}
