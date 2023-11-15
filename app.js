const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main"component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
