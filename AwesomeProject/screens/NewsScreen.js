import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function NewsScreen({}) {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('main.screens.news')}</Text>
    </View>
  );
}
