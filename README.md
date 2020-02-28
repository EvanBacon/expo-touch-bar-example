# expo-touch-bar-example
Example of creating a custom button in the touch bar using Expo/Electron

- `expo init myProject`
- `npx @expo/electron-adapter`
- `yarn expo-electron customize`
- `yarn add react-touchbar-electron`

- Modify `electron/main/index.js`

```diff
+ import { touchBarWrapper } from 'react-touchbar-electron';

function createMainWindow() {
  const browserWindow = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
+  touchBarWrapper(browserWindow);

```

- Modify `App.js`
```diff
import React from 'react';
import { Text, View } from 'react-native';
+ import { TouchBarProvider, Button, TouchBar } from 'react-touchbar-electron';

function App() {
  return (
    <View>
+      <TouchBar>
+        <Button label="expo is cool" onClick={() => {}} />
+      </TouchBar>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

+ export default () => <TouchBarProvider><App /></TouchBarProvider>
```
