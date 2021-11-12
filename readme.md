# Development Environment
Install nodejs(include node + npm): https://nodejs.org/dist/v4.4.4/node-v4.4.4-x64.msi
  - node: v4.4.4
  - npm: v2.15.1
Install ionic by running: $ npm install -g ionic@1.7.15
  - ionic: 1.7.15

#######run ionic client as web#######
1. $ npm install
2. $ ionic serve
3. > http://localhost:8100


#######run it in android#######
1. $ npm install -g cordova ionic
2. install android sdk (your can install android studio which include sdk)
3. create a avd(better with android 23 - v6.0)
4. change the restful url from localhost to 10.0.2.2
5. $ ionic platform add android
6. $ ionic build android
7. $ ionic emulate android (if app not installed, just Ctrl C and rerun the command)
