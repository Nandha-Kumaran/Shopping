import { DefaultTheme } from "@react-navigation/native";
import colors from "../Config/colors";

export default{
    ...DefaultTheme,
    colors:{
        ...DefaultTheme.colors,
        primary: colors.primary,
        backgroud:colors.white,
    }
};