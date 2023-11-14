import {observer} from "mobx-react";
import {
    ActivityIndicator, Button,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";
import {useEffect} from "react";
import {useRootStore} from "../hooks/useRootStore";


export const DataScreen = observer(({navigation: {navigate}}) => {
        const { dataStore } = useRootStore();

        useEffect(() => {
            dataStore.getData();
        }, []);

        return <SafeAreaView style={styles.container}>
            <Button
                title='Remove all data from local store'
                onPress={() => dataStore.removeDataFromLocal()}
            />
            <ScrollView style={styles.content}>
                {!dataStore.isLoading ? (
                    dataStore.data.map((data, i) => {
                        return (
                            <View key={`item_${i}`} style={styles.data}>
                                <Text style={styles.dataId}>{data.id}</Text>
                                <Text style={styles.dataTitle}>{data.title}</Text>
                            </View>
                        );
                    })
                ) : (
                    <ActivityIndicator />
                )}
            </ScrollView>
        </SafeAreaView>
    }
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 16
    },
    data: {
        margin: 8,
        padding: 8,
    },
    dataId: {
        fontWeight: 'bold',
        marginBottom: 8
    },
    dataTitle: {
        color: 'gray'
    }
})