Sweet Spot App Project
======================

This project is a React Native project that runs on Expo.

In order to run this project, Expo must be installed first.

It consists of installing:

* Node.js
* Git
* Watchman for macOS or Linux users

Documentation on this can be found here: <https://docs.expo.dev/get-started/installation/>

For consistency this project was developed on a Linux system.

To install NodeJS on a Linux system we followed this guide here: <https://www.codingcodax.dev/blog/install-node-js-on-linux>

For Windows users, WSL can be used to run the project in a Linux environment.

Documentation on installing WSL can be found here: <https://docs.microsoft.com/en-us/windows/wsl/setup/environment>

Once Expo has been installed, execute the following commands in order to download the project and install all necessary node modules.

```bash
git clone https://github.com/obada503/sweetSpot_Demo

cd sweetSpot_Demo/

npm install
```

From here, feel free to delete the .git folder if not planning on contributing to the project, with the following command.

```bash
rm -rf .git
```

At this point, execute the following command in order to start up the expo server.

```bash
expo start
```

Now with the expo server running, in order for the server to be able to connect over LAN, add the following rules to your firewall:

* Incoming Protocol: TCP, Port: 19000
* Incoming Protocol: UDP, Port: 19000

The outgoing rules for TCP/UPD for port 19000 should already be on by default, but if it is not, enable those as well.

From here, press d to toggle the developer interface, which will appear on <http://localhost:19002>

And that is it!

Feel free to connect to Expo over LAN, localhost, or even through an tunnel!

Over LAN and tunnel the project will run on either an Android or iOS device installed with the Expo Go app.

Or feel free to install and connect to an Android or iOS emulator/simulator. Connecting over Expo Go seems to be the easiest option for this purpose as well.
