# POC
# React Native PrintTrackingMobileApp

This is a simple React Native application for barcode scanning. The app allows operators on the print floor to scan work order, equipment ID, and operator ID barcodes. It makes API requests to inquire about a work order or move a work order to the next queue.

## Installation

Ensure you have Node.js and npm installed on your machine.

1. Clone the repository:

```bash
git clone https://github.com/csaiikumar/POC.git

Navigate to the project directory:

```bash
cd POC

Install dependencies:

```bash
npm install

##Running the App
Android
Run the following command to start the app on an Android emulator or connected device:


```bash
npx react-native run-android

iOS
Run the following command to start the app on an iOS simulator or connected device:

```bash
npx react-native run-ios

**##Usage**
The app will open on the Home screen.
Press the "Start Scanning" button to begin barcode scanning.
Scan the operator badge, equipment ID, and work order ID.
The app will transition through the Scanner screen to the Result screen, displaying the scanned data.




