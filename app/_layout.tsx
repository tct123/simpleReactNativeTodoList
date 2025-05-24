import isDarkMode from "@/components/CheckDarkMode";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
export default function RootLayout() {
    return (<>
        <Stack>
            <Stack.Screen name="index" options={{ title: "Today's tasks" }} />
        </Stack>
        <StatusBar style={isDarkMode() ? "light" : "dark"} />
    </>
    );
}
