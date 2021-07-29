//TODO Swap email address for a real one 
import * as Linking from 'expo-linking';

export const emailSupport = () => {
    Linking.openURL('mailto:support@example.com')
}
