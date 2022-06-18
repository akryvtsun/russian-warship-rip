import { TEXT_STYLE } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

let { widget } = getApp()._options.globalData

Page({
    onInit() {
        logger.debug('page onInit invoked')
    },

    build() {
        logger.debug('page build invoked')

        widget = hmUI.createWidget(hmUI.widget.TEXT, {
            ...TEXT_STYLE,
        })
        widget.setProperty(hmUI.prop.MORE, {
            text: "data ".repeat(40)
        })

        setTimeout(function () {
            widget.setProperty(hmUI.prop.MORE, {
                text: "data request sent: " + hmBle.connectStatus()
            })

            let buf = Buffer.from('message')
            hmBle.send(buf.buffer, buf.byteLength);
        }, 3000);
    },

    onDestroy() {
        logger.debug('page onDestroy invoked')
    },
})