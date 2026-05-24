import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
import config from 'devextreme/core/config';
import { GlobalConfig } from 'devextreme/common';
import { DxTabPanelTypes } from 'devextreme-angular/ui/tab-panel';
import { Properties as ToastProperties } from 'devextreme/ui/toast';

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

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  currentTab: string;

  constructor() {
    this.currentTab = 'Edit tab';
  }

  switchSDAs(e: DxTabPanelTypes.SelectionChangedEvent): void {
    this.currentTab = e.addedItems[0].title;
  }

  showNotification(message: string): void {
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
}
