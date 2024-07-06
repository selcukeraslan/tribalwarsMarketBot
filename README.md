Tribal Wars Market Bot

# Description:

This bot automates resource exchange operations in a web interface. It monitors the stock levels of three resources (wood, stone, iron) displayed in a table. If any resource's stock exceeds 200 units, it calculates and inputs 80% of the current stock value into the respective input field for purchasing. After inputting the value, it clicks the submit button associated with each resource.

Upon submitting, it waits for 0.5 seconds to allow for the new page to load. Once the new page is loaded, it attempts to click the confirmation button ("Confirm") if it is present on the page. After confirming, it clears the input field to prepare for the next iteration.

Additionally, the bot checks for a specific warning message ("Insufficient quantity of this resource for exchange"). If this message appears, indicating insufficient resources for exchange, the bot automatically clicks the cancel button ("Cancel") associated with the warning message to handle the error gracefully.

The bot repeats these actions every 5 seconds to continually monitor and process resource exchange operations as needed.

# How to Use:

To use the bot effectively, follow these steps:

1. **Setup Environment:**
   - Ensure you have the necessary environment set up where the bot can run. This typically involves having a browser with developer tools accessible.

2. **Load Web Interface:**
   - Open the web interface where the resource exchange operations are performed. This interface should display the current stock levels of wood, stone, and iron in a table format.

3. **Inspect Elements:**
   - Use the browser's developer tools (usually accessible via right-click > Inspect) to identify the HTML elements associated with:
     - Wood stock (`premium_exchange_stock_wood`)
     - Stone stock (`premium_exchange_stock_stone`)
     - Iron stock (`premium_exchange_stock_iron`)
     - Buy input fields (`buy_wood`, `buy_stone`, `buy_iron`)
     - Submit buttons (`btn-premium-exchange-buy`)
     - Confirmation button (`btn-confirm-yes`)
     - Cancel button (`btn-confirm-no`)

4. **Configure and Run the Bot:**
   - Copy and paste the provided JavaScript code into the browser's console. This code will automate the process based on the identified HTML elements.
   - Adjust any specific thresholds or timing delays as necessary within the code (e.g., changing the stock threshold from 200 to a different value).

5. **Execute the Script:**
   - Once the code is pasted into the console, press Enter to execute it. The bot will start monitoring the stock levels and automatically perform the exchange operations according to the configured logic.

6. **Monitor and Adjust:**
   - Keep the browser window open and visible to monitor the bot's actions. Ensure that it correctly identifies stock levels, inputs the correct values, and handles any error messages gracefully.

7. **Terminate or Modify:**
   - To stop the bot, simply close the browser window or stop the JavaScript execution in the console. Modify the code as needed for different scenarios or to enhance functionality based on specific requirements.




###End
