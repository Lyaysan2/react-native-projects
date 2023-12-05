import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function SettingsScreen({}) {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('main.screens.settings')}</Text>
    </View>
  );
}
