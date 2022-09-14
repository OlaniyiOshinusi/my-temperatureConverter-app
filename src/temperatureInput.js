function temperatureInput(props){
    return (
        <div class="container">
            <h1>Temperature Converter</h1>
            <form action="" id="temperatureconverter--form">
                <div class="form__control">
                    <label for="celsius">
                        Celsius
                    </label>
                    <input type="text" name="celsius" id="celsius" required>
                    <button class="button" type="button" onclick="convertToFahrenheit()">Convert To Fahrenheit</button>
                    <br><br>
                </div>
                <div class="form__control">
                    <label for="fahrenheit">
                        Fahrenheit
                    </label>
                    <input type="text" name="fahrenheit" id="fahrenheit">
                    <button class="button" type="button" onclick="convertToCelsius()">Convert To Celsius</button>
                    <br><br>
                </div>
                <div class="form__control">
                    <input class="form__btn" type="reset" name="reset" id="reset">
                </div>
            </form>
        </div>
    );
}

export default temperatureInput;