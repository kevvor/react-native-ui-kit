## React Native UI Kit

I often find myself rewriting and copy/pasting my custom React Native components across projects.

This repo addresses that by providing a central place to store all my reusable components.

### Getting Started
```npm install kevvor-react-native-ui-kit --save```

### Usage:

Button:
```js
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { Button } from 'kevvor-react-native-ui-kit';

class ExampleApp extends Component {
    render() {
        return (
            <View>
                <Text>Hello, World</Text>
                <Button
                    color='hexCode'
                    height='int'
                    width='int'
                    fontSize='int' // Font size of button text
                >
                    "Button Title"
                </Button>
            </View>
        );
    }
}

```
