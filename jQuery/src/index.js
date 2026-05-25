$(() => {
  DevExpress.config({
    floatingActionButtonConfig: {
      icon: 'share',
      position: {
        my: 'right bottom',
        at: 'right bottom',
        of: '#app-container',
        offset: '-16 -16',
      },
    },
  });

  const editAction = $('#action-edit')
    .dxSpeedDialAction({
      hint: 'Edit',
      icon: 'edit',
      onClick() {
        showNotification('Edit is clicked');
      },
    })
    .dxSpeedDialAction('instance');

  const copyAction = $('#action-copy')
    .dxSpeedDialAction({
      hint: 'Copy to clipboard',
      icon: 'copy',
      visible: false,
      onClick() {
        showNotification('Copied to clipboard');
      },
    })
    .dxSpeedDialAction('instance');

  const mailAction = $('#action-mail')
    .dxSpeedDialAction({
      hint: 'Send by email',
      icon: 'email',
      visible: false,
      onClick() {
        showNotification('Sent by email');
      },
    })
    .dxSpeedDialAction('instance');

  const socialAction = $('#action-social')
    .dxSpeedDialAction({
      hint: 'Share on Social Media',
      icon: 'link',
      visible: false,
      onClick() {
        showNotification('Shared on Social Media');
      },
    })
    .dxSpeedDialAction('instance');

  $('#tab-panel').dxTabPanel({
    items: [
      {
        title: 'Edit Tab',
        template() {
          return '<p>Edit tab\'s content</p>';
        },
      },
      {
        title: 'Share Tab',
        template() {
          return '<p>Share tab\'s content</p>';
        },
      },
    ],
    onSelectionChanged(e) {
      switchSDAs(e.addedItems[0].title);
    },
  });

  function switchSDAs(tabTitle) {
    if (tabTitle === 'Edit Tab') {
      editAction.option('visible', true);
      copyAction.option('visible', false);
      mailAction.option('visible', false);
      socialAction.option('visible', false);
    }
    if (tabTitle === 'Share Tab') {
      editAction.option('visible', false);
      copyAction.option('visible', true);
      mailAction.option('visible', true);
      socialAction.option('visible', true);
    }
  }

  function showNotification(message) {
    DevExpress.ui.notify(
      {
        message,
        position: {
          my: 'left bottom',
          at: 'left bottom',
          of: '#app-container',
          offset: '16 -16',
        },
        minWidth: 0,
        width: 320 * 0.7,
      },
      'info',
      1000,
    );
  }
});
