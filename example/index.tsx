import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Box } from '@chakra-ui/react';

import { Providers } from './Providers';
import { ExampleForm } from './components/ExmpleForm';

const App = () => {
  return (
    <Providers>
      <Box pt={40} maxW="600px" m="0 auto">
        <ExampleForm />
      </Box>
    </Providers>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
