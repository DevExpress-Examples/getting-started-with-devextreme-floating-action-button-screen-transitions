import React from 'react';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
// Custom icons by Ionicons
import 'ionicons/dist/css/ionicons.css';

import './App.css';

import TabPanel, { Item } from 'devextreme-react/tab-panel';
import SpeedDialAction from 'devextreme-react/speed-dial-action';
import config from 'devextreme/core/config';
import notify from 'devextreme/ui/notify';

class App extends React.Component {
    constructor(props) {
        super(props);
        config({
            floatingActionButtonConfig: {
                icon: 'icon ion-md-share',
                position: {
                    my: 'right bottom',
                    at: 'right bottom',
                    of: '#app-container',
                    offset: '-16 -16'
                }
            }
        });
        this.state = {
            currentTab: 'Edit tab'
        }
        this.switchSDAs = this.switchSDAs.bind(this);
    }
    switchSDAs(e) {
        this.setState({
            currentTab: e.addedItems[0].title
        });
    }
    
    render() {
        return (
            <div id="app-container">
                <TabPanel
                    onSelectionChanged={this.switchSDAs}>
                    <Item title="Edit tab">
                        <p>Edit tab's content</p>
                    </Item>
                    <Item title="Share tab">
                        <p>Share tab's content</p>
                    </Item>
                </TabPanel>
                <SpeedDialAction
                    hint="Edit"
                    icon="icon ion-md-create"
                    visible={this.state.currentTab === 'Edit tab'}
                    onClick={() => showNotification('Edit is clicked')}
                />
                <SpeedDialAction
                    hint="Copy to clipboard"
                    icon="icon ion-md-copy"
                    visible={this.state.currentTab === 'Share tab'}
                    onClick={() => showNotification('Copied to clipboard')}
                />
                <SpeedDialAction
                    hint="Send by email"
                    icon="icon ion-md-mail"
                    visible={this.state.currentTab === 'Share tab'}
                    onClick={() => showNotification('Sent by email')}
                />
                <SpeedDialAction
                    hint="Share on Facebook"
                    icon="icon ion-logo-facebook"
                    visible={this.state.currentTab === 'Share tab'}
                    onClick={() => showNotification('Shared on Facebook')}
                />
            </div>
        );
    }
}

function showNotification(message) {
    notify({
        message: message,
        position: {
            my: 'left bottom',
            at: 'left bottom',
            of: '#app-container',
            offset: '16 -16'
        },
        minWidth: null,
        width: 320 * 0.7
    }, 'info', 1000);
}

export default App;
