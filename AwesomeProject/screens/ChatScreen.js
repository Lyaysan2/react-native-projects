import {Text, View} from 'react-native';
import {useTranslation} from 'react-i18next';

export default function ChatScreen({}) {
  const {t} = useTranslation();
  return (
    <View>
      <Text>{t('main.screens.chat')}</Text>
    </View>
  );
}
