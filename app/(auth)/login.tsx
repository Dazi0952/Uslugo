import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from "@/styles/auth.styles"
import { COLORS } from "@/constants/theme"
import { Ionicons } from "@expo/vector-icons" 
import { useSSO } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'

export default function Login() {

    const {startSSOFlow} = useSSO()
    const router = useRouter();

    const handleGoogleSignIn = async () => {
        try {
            const {createdSessionId,setActive}=await startSSOFlow({strategy:"oauth_google"})

            if(setActive && createdSessionId){
                setActive({session:createdSessionId});
                router.replace("/(tabs)");
            }
        } catch (error) {
            console.error("OAuth error:", error);
            
        }
    }
  return (
    <><View style={styles.container}>
          <View style={styles.brandSection}>
              <View style={styles.logoContainer}>
                  <Ionicons name="clipboard-outline" size={32} color={COLORS.primary} />
              </View>
              <Text style={styles.appName}>USLUGO</Text>
              <Text style={styles.tagline}> yeeeee </Text>
          </View>
      </View>


      <View style={styles.loginSection}>
        <TouchableOpacity
            style={styles.googleButton}
            onPress={handleGoogleSignIn}
            activeOpacity={0.9}
        >
        <View style={styles.googleIconContainer}>
            <Ionicons name='logo-google' size={24} color={COLORS.surface} />
        </View>
        <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      </>

  );
}