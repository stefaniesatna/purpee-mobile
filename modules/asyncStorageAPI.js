import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorageValue = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch {
        return 1
    }
}

export const getStorageValue = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch {
        return 1
    }
}