import AsyncStorage from "@react-native-async-storage/async-storage";

export const setStorageValue = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e){
        console.log("setStorageValue did not work", e)
    }
    console.log("setStorageValue is done executing")
}

export const getStorageValue = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e){
        console.log("getStorageValue did not work", e)
    }
    console.log("getStorageValue is done executing")
}