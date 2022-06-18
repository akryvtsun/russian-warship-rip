App({
    globalData: {
        widget: null
    },

    onCreate(options) {
        console.log('app on create invoke')

        hmBle.createConnect(function (index, data, size) {

            getApp()._options.globalData.widget.setProperty(hmUI.prop.MORE, {
                text: "DATA RECEIVED"
            })
        })
    },

    onDestroy(options) {
        console.log('app on destroy invoke')
        hmBle.disConnect()
    }
})
