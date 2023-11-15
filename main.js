const { TextInput, TouchableOpacity } = require("react-native");

const configuration = new configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

const Main = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleInput = async () => {
        try{


        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <View style={style.container}>
            <Text style={styles.title}>AI Chatbot</Text>
            <View style={styles.chatContainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Type your message here"
                        onChangeText={(text)} => setInput(text)}
                        value={input}
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleInput}>
                        <Text style={styles.sendButtonText}>Send</Text>
                    </TouchableOpacity>
                    <View style={style.outputContainer}>
                        <Text style={styles.output}>{output}</Text>
                    </View>
                </View>
            </View>
     
        </View>
    )
        <View style={Styles.container}>


        </View>
}