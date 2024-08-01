# ios-wallet-sender
Barebone .pkpass web server to send your loyalty cards especially to old iOS devices.

# Why ?
Safari on iOS 6 cannot browse anymore the websites that can be used to generate .pkpass files. So my workflow is to visit them on PC with devtools enabled to create the cards, then I download the cards on my PC as .pkpass, then I can use this tool to send them easily to my iPhone.
iOS 6 handled pkpass files only in Safari (and the server has to send a special header) or in the iMessage or Mail app so this little app will allow you to transfer them pretty easily and fastly. Configuring the Mail on iOS 6 app can be painful nowadays...

# How to use
Your iOS device has to be in the same network as your PC !

1) npm install
2) npm start
3) Connect to http://yourlocalip:8000/getpass
4) Put any "pass.pkpass" in the folder of this project. Visit again http://yourlocalip:8000/getpass from your iOS device : it should now ask to add the loyalty card. You can swap pass.pkpass to add another one without having to reboot again this little server.

# Enjoy !
