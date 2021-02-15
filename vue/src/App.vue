<template>
    <div id="app-container">
        <DxTabPanel
            @selection-changed="switchSDAs">
            <DxItem title="Edit tab">
                <template #default>
                    <p>Edit tab's content</p>
                </template>
            </DxItem>
            <DxItem title="Share tab">
                <template #default>
                    <p>Share tab's content</p>
                </template>
            </DxItem>
        </DxTabPanel>
        <DxSpeedDialAction
            hint="Edit"
            icon="ion ion-md-create"
            :visible="currentTab === 'Edit tab'"
            @click="showNotification('Edit is clicked')"
        />
        <DxSpeedDialAction
            hint="Copy to clipboard"
            icon="ion ion-md-copy"
            :visible="currentTab === 'Share tab'"
            @click="showNotification('Copied to clipboard')"
        />
        <DxSpeedDialAction
            hint="Send by email"
            icon="ion ion-md-mail"
            :visible="currentTab === 'Share tab'"
            @click="showNotification('Sent by email')"
        />
        <DxSpeedDialAction
            hint="Share on Facebook"
            icon="ion ion-logo-facebook"
            :visible="currentTab === 'Share tab'"
            @click="showNotification('Shared on Facebook')"
        />
    </div>
</template>

<script>
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
// Custom icons by Ionicons
import 'ionicons/dist/css/ionicons.css';

import DxTabPanel, { DxItem } from 'devextreme-vue/tab-panel';
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';

import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';

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

export default {
    components: {
        DxTabPanel,
        DxItem,
        DxSpeedDialAction
    },
    data() {
        return {
            currentTab: 'Edit tab'
        }
    },
    methods: {
        switchSDAs(e) {
            this.currentTab = e.addedItems[0].title;
        },
        showNotification(message) {
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
            }, "info", 1000);
        }
    }
}
</script>
<style>
.dx-fa-button-icon, .dx-fa-button-icon-close {
    text-align: center;
}

p {
    text-align: center;
}

#app-container {
    height: 360px;
    width: 320px;
    border: 1px solid black;
}

.dx-tabpanel .dx-tabs-wrapper {
    display: flex;
    flex-flow: row nowrap;
}

.dx-tab {
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
    justify-content: center;
}
</style>