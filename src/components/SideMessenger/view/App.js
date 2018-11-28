import * as React from 'react';
import Maximized from './Maximized';
import Minimized from './Minimized';
import { ThemeProvider, FixedWrapper } from '@livechat/ui-kit';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <FixedWrapper.Root minimizedOnInit>
          <FixedWrapper.Maximized>
            <Maximized {...this.props} />
          </FixedWrapper.Maximized>
          <FixedWrapper.Minimized active={true}>
            <Minimized {...this.props} />
          </FixedWrapper.Minimized>
        </FixedWrapper.Root>
      </ThemeProvider>
    );
  }
}

export default App;
