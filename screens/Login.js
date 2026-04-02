import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image, // Thêm dòng này để sử dụng component Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Login({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      
      {/* Nút Back - Thêm mới */}
      <TouchableOpacity 
        style={{ marginTop: 20, marginBottom: 10 }} 
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="chevron-back" size={28} color="#181725" />
      </TouchableOpacity>

      {/* Logo - Đã thay đổi emoji bằng hình ảnh */}
      <View style={styles.logoBox}>
        {/* Thay thế: <Text style={{ fontSize: 40 }}>🥕</Text> bằng Image bên dưới */}
        <Image
          source={require("../assets/Group 3.png")} // Đường dẫn tới file ảnh của bạn
          style={styles.logoImage} // Định nghĩa style mới bên dưới
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Login</Text>
      <Text style={styles.sub}>Enter your emails and password</Text>

      {/* Email */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          defaultValue="imshuvo97@gmail.com"
          style={styles.input}
        />
      </View>

      {/* Password */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Password</Text>

        <View style={styles.passwordRow}>
          <TextInput
            secureTextEntry={!passwordVisible}
            style={styles.input}
            defaultValue="12345678"
          />

          <TouchableOpacity
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye" : "eye-off"}
              size={20}
              color="#999"
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot */}
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      {/* Sign up */}
      <View style={styles.signupRow}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signup}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  logoBox: {
    alignItems: "center",
    marginTop: 30,
  },
  
  // Style mới cho logo ảnh
  logoImage: {
    width: 50, // Căn chỉnh kích thước ảnh phù hợp
    height: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },

  sub: {
    color: "#777",
    marginBottom: 30,
  },

  inputBox: {
    marginBottom: 20,
  },

  label: {
    color: "#999",
    marginBottom: 5,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 8,
    flex: 1,
  },

  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
  },

  forgot: {
    textAlign: "right",
    color: "#777",
    marginBottom: 20,
  },

  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  signupRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  signup: {
    color: "#53B175",
    fontWeight: "bold",
  },
});