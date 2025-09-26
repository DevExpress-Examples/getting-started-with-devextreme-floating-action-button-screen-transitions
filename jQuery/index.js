$(function() {
    $("#tab-panel").dxTabPanel({
        items: [{
            title: "Edit Tab",
            template: function() {
                return "<p>Edit tab's content</p>";
            }
        }, {
            title: "Share Tab",
            template: function() {
                return "<p>Share tab's content</p>";
            }
        }],
        onSelectionChanged: function(e) {
            switchSDAs(e.addedItems[0].title);
        }
    });

    DevExpress.config({
        floatingActionButtonConfig: {
            icon: "icon ion-md-share",
            position: {
                my: "right bottom",
                at: "right bottom",
                of: "#app-container",
                offset: "-16 -16"
            }
        }
    });

    const editAction = $("#action-edit").dxSpeedDialAction({
        hint: "Edit",
        icon: "icon ion-md-create",
        onClick: function() {
            showNotification("Edit is clicked")
        }
    }).dxSpeedDialAction("instance");

    const copyAction = $("#action-copy").dxSpeedDialAction({
        hint: "Copy to clipboard",
        icon: "icon ion-md-copy",
        visible: false,
        onClick: function() {
            showNotification("Copied to clipboard")
        }
    }).dxSpeedDialAction("instance");

    const mailAction = $("#action-mail").dxSpeedDialAction({
        hint: "Send by email",
        icon: "icon ion-md-mail",
        visible: false,
        onClick: function() {
            showNotification("Sent by email")
        }
    }).dxSpeedDialAction("instance");

    const facebookAction = $("#action-facebook").dxSpeedDialAction({
        hint: "Share on Facebook",
        icon: "icon ion-logo-facebook",
        visible: false,
        onClick: function() {
            showNotification("Shared on Facebook")
        }
    }).dxSpeedDialAction("instance");

    function switchSDAs(tabTitle) {
        if(tabTitle === "Edit Tab") {
            editAction.option("visible", true);
            copyAction.option("visible", false);
            mailAction.option("visible", false);
            facebookAction.option("visible", false);
        }
        if(tabTitle === "Share Tab") {
            editAction.option("visible", false);
            copyAction.option("visible", true);
            mailAction.option("visible", true);
            facebookAction.option("visible", true);
        }
    }

    function showNotification(message) {
        DevExpress.ui.notify({
            message: message,
            position: {
                my: "left bottom",
                at: "left bottom",
                of: "#app-container",
                offset: "16 -16"
            },
            minWidth: null,
            width: function() {
                return $("#app-container").width() * 0.7;
            }
        }, "info", 1000);
    }
});
