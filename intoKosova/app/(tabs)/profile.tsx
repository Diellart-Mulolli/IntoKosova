import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { FadeInUp } from "react-native-reanimated";
import { colors } from "@/styles/commonStyles";
import { IconSymbol } from "@/components/ui/icon-symbol";

export default function ProfileScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);
  const [verificationStep, setVerificationStep] = useState(1);

  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [newPassword, setNewPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [sentCode, setSentCode] = useState(null);

  // Helper function
  const generateCode = () =>
    Math.floor(100000 + Math.random() * 900000).toString();

  const calculateAge = (day, month, year) => {
    const today = new Date();
    let age = today.getFullYear() - year;
    const m = today.getMonth() + 1 - month;
    if (m < 0 || (m === 0 && today.getDate() < day)) age--;
    return age;
  };

  // =====================
  // SIGN UP
  // =====================
  const handleSignUp = () => {
    setErrorMessage("");

    if (!emailOrPhone || !password || !fullName || !birthDate) {
      setErrorMessage("Please fill all fields to sign up.");
      return;
    }

    // Validate date
    const regex =
      /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
    if (!regex.test(birthDate)) {
      setErrorMessage("Please enter a valid birth date (DD/MM/YYYY).");
      return;
    }

    const [day, month, year] = birthDate.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getDate() !== day || date.getMonth() + 1 !== month) {
      setErrorMessage("Please enter a valid calendar date.");
      return;
    }

    const age = calculateAge(day, month, year);
    if (age < 16) {
      setErrorMessage("You must be at least 16 years old to register.");
      return;
    }

    // Validate email or phone
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/;
    const isEmail = emailRegex.test(emailOrPhone);
    const isPhone = phoneRegex.test(emailOrPhone);
    if (!isEmail && !isPhone) {
      setErrorMessage("Please enter a valid email or phone number.");
      return;
    }

    // Validate password
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrorMessage(
        "Password must have at least 8 characters, one uppercase letter, and one special character."
      );
      return;
    }

    // Prevent duplicate
    const exists = registeredUsers.some(
      (u) => u.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase()
    );
    if (exists) {
      Alert.alert("Account exists", "This email or phone number is already registered.");
      return;
    }

    const newUser = { emailOrPhone, password, fullName, birthDate };
    setRegisteredUsers([...registeredUsers, newUser]);
    setCurrentUser(newUser);
    setIsAuthenticated(true);
    Alert.alert("🎉 Account created!", "Welcome to IntoKosova!");
  };

  // =====================
  // SIGN IN
  // =====================
  const handleSignIn = () => {
    const foundUser = registeredUsers.find(
      (u) =>
        u.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase() &&
        u.password === password
    );

    if (foundUser) {
      setIsAuthenticated(true);
      setCurrentUser(foundUser);
      setErrorMessage("");
      setAttempts(0);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 5) {
        Alert.alert(
          "Too many attempts",
          "You’ve reached the maximum of 5 login attempts. Try again later."
        );
        return;
      }
      setErrorMessage("Incorrect credentials. Please try again.");
    }
  };

  // =====================
  // FORGOT PASSWORD FLOW
  // =====================
  const handleSendVerification = () => {
    const foundUser = registeredUsers.find(
      (u) => u.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase()
    );
    if (!foundUser) {
      setErrorMessage("No account found with this email or phone.");
      return;
    }

    const code = generateCode();
    setSentCode(code);
    setVerificationStep(2);
    Alert.alert("📩 Verification Code Sent", `A 6-digit code has been sent (simulated).`);
    setErrorMessage("");
  };

  const handleVerifyCode = () => {
    if (verificationCode === sentCode) {
      setVerificationStep(3);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid verification code.");
    }
  };

  const handleChangePassword = () => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
    if (!passwordRegex.test(newPassword)) {
      setErrorMessage(
        "Password must have at least 8 characters, one uppercase letter, and one special character."
      );
      return;
    }

    const updatedUsers = registeredUsers.map((u) =>
      u.emailOrPhone.toLowerCase() === emailOrPhone.toLowerCase()
        ? { ...u, password: newPassword }
        : u
    );
    setRegisteredUsers(updatedUsers);

    Alert.alert("✅ Password Updated", "You can now log in with your new password.");
    setForgotPassword(false);
    setVerificationStep(1);
    setNewPassword("");
    setVerificationCode("");
    setSentCode(null);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    setEmailOrPhone("");
    setPassword("");
  };

  // =====================
  // AUTH SCREENS
  // =====================
  if (!isAuthenticated) {
    return (
      <SafeAreaView style={styles.authContainer}>
        <Animated.View entering={FadeInUp.springify()}>
          <Text style={styles.authTitle}>
            {forgotPassword
              ? "Reset Password"
              : isSignUp
              ? "Create your account"
              : "Welcome back"}
          </Text>

          {forgotPassword ? (
            <>
              {verificationStep === 1 && (
                <>
                  <TextInput
                    placeholder="Email or phone number"
                    style={styles.input}
                    value={emailOrPhone}
                    onChangeText={setEmailOrPhone}
                  />
                  {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                  <Pressable
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    onPress={handleSendVerification}
                  >
                    <Text style={styles.buttonText}>Send Verification Code</Text>
                  </Pressable>
                </>
              )}

              {verificationStep === 2 && (
                <>
                  <TextInput
                    placeholder="Enter verification code"
                    style={styles.input}
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                    keyboardType="numeric"
                  />
                  {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                  <Pressable
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    onPress={handleVerifyCode}
                  >
                    <Text style={styles.buttonText}>Verify Code</Text>
                  </Pressable>
                </>
              )}

              {verificationStep === 3 && (
                <>
                  <TextInput
                    placeholder="Enter new password"
                    style={styles.input}
                    value={newPassword}
                    onChangeText={setNewPassword}
                    secureTextEntry
                  />
                  {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
                  <Pressable
                    style={[styles.button, { backgroundColor: colors.primary }]}
                    onPress={handleChangePassword}
                  >
                    <Text style={styles.buttonText}>Change Password</Text>
                  </Pressable>
                </>
              )}

              <Pressable
                onPress={() => {
                  setForgotPassword(false);
                  setVerificationStep(1);
                }}
              >
                <Text style={styles.linkText}>Back to Sign In</Text>
              </Pressable>
            </>
          ) : (
            <>
              {isSignUp && (
                <>
                  <TextInput
                    placeholder="Full name"
                    style={styles.input}
                    value={fullName}
                    onChangeText={setFullName}
                  />

                  {/* ✅ Date input with validation */}
                  <View style={{ width: "100%" }}>
                    <TextInput
                      placeholder="DD/MM/YYYY"
                      style={[
                        styles.input,
                        {
                          borderColor:
                            errorMessage.includes("birth date") ||
                            errorMessage.includes("16 years") ||
                            errorMessage.includes("calendar")
                              ? "#e63946"
                              : "#ddd",
                        },
                      ]}
                      value={birthDate}
                      onChangeText={(text) => {
                        let formatted = text.replace(/[^\d/]/g, "");
                        if (formatted.length === 2 && !formatted.includes("/")) {
                          formatted = formatted + "/";
                        } else if (
                          formatted.length === 5 &&
                          formatted.lastIndexOf("/") === 2
                        ) {
                          formatted = formatted + "/";
                        }
                        if (formatted.length > 10) return;
                        setBirthDate(formatted);

                        const regex =
                          /^([0-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
                        if (!regex.test(formatted)) return;

                        const [day, month, year] = formatted.split("/").map(Number);
                        const date = new Date(year, month - 1, day);
                        if (date.getDate() !== day || date.getMonth() + 1 !== month) {
                          setErrorMessage("Please enter a valid calendar date.");
                          return;
                        }

                        const age = calculateAge(day, month, year);
                        if (age < 16) {
                          setErrorMessage("You must be at least 16 years old to register.");
                        } else {
                          setErrorMessage("");
                        }
                      }}
                      keyboardType="numeric"
                      maxLength={10}
                    />
                    {errorMessage &&
                    (errorMessage.includes("birth date") ||
                      errorMessage.includes("16 years") ||
                      errorMessage.includes("calendar")) ? (
                      <Text style={styles.errorText}>{errorMessage}</Text>
                    ) : null}
                  </View>
                </>
              )}

              <TextInput
                placeholder="Email or phone number"
                style={styles.input}
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
              />

              <TextInput
                placeholder="Password"
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />

              {errorMessage &&
              !errorMessage.includes("birth date") &&
              !errorMessage.includes("calendar") &&
              !errorMessage.includes("16 years") ? (
                <Text style={styles.errorText}>{errorMessage}</Text>
              ) : null}

              <Pressable
                style={[styles.button, { backgroundColor: colors.primary }]}
                onPress={isSignUp ? handleSignUp : handleSignIn}
              >
                <Text style={styles.buttonText}>
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Text>
              </Pressable>

              {!isSignUp && (
                <Pressable onPress={() => setForgotPassword(true)}>
                  <Text style={[styles.linkText, { marginTop: 8 }]}>
                    Forgot Password?
                  </Text>
                </Pressable>
              )}

              <Pressable onPress={() => setIsSignUp(!isSignUp)}>
                <Text style={styles.linkText}>
                  {isSignUp
                    ? "Already have an account? Sign In"
                    : "Don't have an account? Sign Up"}
                </Text>
              </Pressable>
            </>
          )}
        </Animated.View>
      </SafeAreaView>
    );
  }

  // =====================
  // PROFILE
  // =====================
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View entering={FadeInUp.springify()} style={styles.header}>
        <View style={styles.profileImage}>
          <IconSymbol name="person.fill" size={40} color="#fff" />
        </View>
        <Text style={styles.profileName}>{currentUser?.fullName}</Text>
        <Text style={styles.profileEmail}>{currentUser?.emailOrPhone}</Text>
      </Animated.View>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Places Visited</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
        </View>

        <Pressable style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.buttonText}>Log Out</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  authContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 30,
    backgroundColor: "#f9fafb",
  },
  authTitle: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: colors.primary,
    textAlign: "center",
  },
  input: {
    width: 300,
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 14,
    borderColor: "#ddd",
    borderWidth: 1,
    fontSize: 16,
  },
  button: {
    width: 300,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: { color: "#fff", fontWeight: "600", fontSize: 16 },
  linkText: {
    color: colors.primary,
    marginTop: 16,
    textAlign: "center",
    fontWeight: "500",
    fontSize: 15,
  },
  errorText: {
    color: "#e63946",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 14,
  },
  header: { alignItems: "center", marginTop: 40 },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  profileName: { fontSize: 24, fontWeight: "700", color: colors.text },
  profileEmail: { fontSize: 15, color: colors.textSecondary, marginBottom: 20 },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: colors.card,
    borderRadius: 16,
  },
  statItem: { alignItems: "center" },
  statNumber: { fontSize: 18, fontWeight: "bold", color: colors.primary },
  statLabel: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
  logoutButton: {
    backgroundColor: "#FF6B6B",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 50,
  },
});