## React Native UI Kit

I often find myself rewriting or copy/pasting certain custom React Native components.

This repo attempts to address that by providing myself with a central place to store all my reusable components.

#### Getting Started
```npm install kevvor-react-native-ui-kit```

#### Usage:

Button:
```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'kevvor-react-native-ui-kit';

class App extends Component {
    render() {
        return (
            <View>
                <Text>Hello, World</Text>
                <Button
                    color='hexCode'
                    height='int'
                    width='int'
                    fontSize='int' // Font size of button text
                >"Button Title"</Button>
            </View>
        );
    }
}

```
