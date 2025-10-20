<script setup lang="ts">
import { ref } from 'vue';
import { DxTabPanel, DxItem } from 'devextreme-vue/tab-panel';
import DxSpeedDialAction from 'devextreme-vue/speed-dial-action';
import type { DxTabPanelTypes } from 'devextreme-vue/tab-panel';
import type { GlobalConfig } from 'devextreme/common';
import type { Properties as ToastProperties } from 'devextreme/ui/toast';
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';
import type { TabItem } from '../types';

const floatingActionButtonConfig: GlobalConfig = {
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

config(floatingActionButtonConfig);

const currentTab = ref<string>('Edit tab');

const switchSDAs = (e: DxTabPanelTypes.SelectionChangedEvent): void => {
  const addedItem = e.addedItems[0] as TabItem;
  currentTab.value = addedItem.title;
};

const showNotification = (message: string): void => {
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
};
</script>

<template>
  <div id="app-container">
    <DxTabPanel @selection-changed="switchSDAs">
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
      icon="edit"
      :visible="currentTab === 'Edit tab'"
      @click="showNotification('Edit is clicked')"
    />
    <DxSpeedDialAction
      hint="Copy to clipboard"
      icon="copy"
      :visible="currentTab === 'Share tab'"
      @click="showNotification('Copied to clipboard')"
    />
    <DxSpeedDialAction
      hint="Send by email"
      icon="email"
      :visible="currentTab === 'Share tab'"
      @click="showNotification('Sent by email')"
    />
    <DxSpeedDialAction
      hint="Share on Social Media"
      icon="link"
      :visible="currentTab === 'Share tab'"
      @click="showNotification('Shared on Social Media')"
    />
  </div>
</template>

<style scoped>
.dx-fa-button-icon, .dx-fa-button-icon-close {
  text-align: center;
}

#app-container {
  height: 360px;
  width: 320px;
  border: 1px solid rgb(221 221 221);
}

p {
  font-size: 14px;
  text-align: center;
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

