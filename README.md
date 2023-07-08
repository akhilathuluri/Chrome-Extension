# Currency Exchange Chrome Extension

This is a Chrome extension that allows users to convert currencies quickly using exchange rates from an API. The extension consists of an HTML file, a JavaScript file, and a manifest file.

## Getting Started

To use this extension, follow the instructions below:

1. Clone the repository or download the source code files.
2. Open the Google Chrome browser.
3. Go to the extensions page by typing `chrome://extensions` in the address bar.
4. Enable the Developer mode toggle switch located in the top-right corner.
5. Click on the Load unpacked button and select the folder containing the downloaded source code files.
6. The extension should be loaded and ready to use.

## Files

The following files are included in this repository:

* `index.html`: This is the main HTML file that defines the user interface of the extension. It contains a form with an input field, a dropdown select, and a button to trigger the currency conversion. The conversion result is displayed in a <div> element.

* `exchange.js`: This JavaScript file contains the code responsible for handling the currency conversion logic. It retrieves user input, makes an API request to fetch exchange rates, calculates the converted price, and updates the HTML with the result.

* `manifest.json`: This is the manifest file that provides information about the extension. It specifies the extension's name, version, description, and other details. It also defines the default icon and the HTML file to be used as the extension's popup.


## Usage

Once the extension is installed and enabled in Chrome, follow the steps below to use it:

1. Click on the extension icon in the browser toolbar to open the popup.
2. Enter the amount to be converted in the input field.
3. Select the currency from the dropdown list.
4. Click on the "Convert Currency" button.
5. The result of the currency conversion will be displayed in the popup.

## API Key
The extension uses an API key to make requests to an exchange rate API. The API key is stored in the `exchange.js` file. Please make sure to replace the `apiKey` constant with your own API key before using the extension.

## Support
If you encounter any issues or have any questions or suggestions, please feel free to open an issue in the GitHub repository.

## License
This project is licensed under the MIT License.

### output url link
https://akhilathuluri.github.io/Chrome-Extension/

#### screenshots as extension
![image](https://github.com/akhilathuluri/Chrome-Extension/assets/89147384/ee00beb7-f853-49fc-aad8-856e6778a8ea)


