import React from 'react'

export default function CelsiusRow() {
  return (
    <div class="form__control">
        <label for="celsius">
            Celsius
        </label>
        <input type="text" name="celsius" id="celsius" required>
        <button class="button" type="button" onclick="convertToFahrenheit()">Convert To Fahrenheit</button>
        <br><br>
    </div>
  )
}
