import { useCallback, useState } from 'react';
import './App.css';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';

import TabPanel, { Item } from 'devextreme-react/tab-panel';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import config from 'devextreme/core/config';
import type { GlobalConfig } from 'devextreme/common';
import notify from 'devextreme/ui/notify';
import type { TabPanelTypes } from 'devextreme-react/tab-panel';
import type { Properties as ToastProperties } from 'devextreme/ui/toast';

const globalConfig: GlobalConfig = {
  floatingActionButtonConfig: {
    icon: 'share',
    position: {
      my: 'right bottom',
      at: 'right bottom',
      of: '#app-container',
      offset: '-16 -16',
    },
  },
};

config(globalConfig);

function showNotification(message: string): void {
  const options: ToastProperties = {
    message,
    position: {
      my: 'left bottom',
      at: 'left bottom',
      of: '#app-container',
      offset: '16 -16',
    },
    width: 320 * 0.7,
    minWidth: 0,
  };

  notify(options, 'info', 1000);
}

function App(): JSX.Element {
  const [currentTab, setCurrentTab] = useState<string>('Edit tab');

  const switchSDAs = useCallback(
    (e: TabPanelTypes.SelectionChangedEvent): void => {
      setCurrentTab(e.addedItems[0].title);
    },
    [],
  );

  const handleEditClick = useCallback((): void => {
    showNotification('Edit is clicked');
  }, []);

  const handleCopyClick = useCallback((): void => {
    showNotification('Copied to clipboard');
  }, []);

  const handleMailClick = useCallback((): void => {
    showNotification('Sent by email');
  }, []);

  const handleSocialClick = useCallback((): void => {
    showNotification('Shared on Social Media');
  }, []);

  return (
    <div id="app-container">
      <TabPanel onSelectionChanged={switchSDAs}>
        <Item title="Edit tab">
          <p>Edit tab&apos;s content</p>
        </Item>
        <Item title="Share tab">
          <p>Share tab&apos;s content</p>
        </Item>
      </TabPanel>
      <SpeedDialAction
        hint="Edit"
        icon="edit"
        visible={currentTab === 'Edit tab'}
        onClick={handleEditClick}
      />
      <SpeedDialAction
        hint="Copy to clipboard"
        icon="copy"
        visible={currentTab === 'Share tab'}
        onClick={handleCopyClick}
      />
      <SpeedDialAction
        hint="Send by email"
        icon="email"
        visible={currentTab === 'Share tab'}
        onClick={handleMailClick}
      />
      <SpeedDialAction
        hint="Share on Social Media"
        icon="link"
        visible={currentTab === 'Share tab'}
        onClick={handleSocialClick}
      />
    </div>
  );
}

export default App;
