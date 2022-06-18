import {TEXT_STYLE} from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

Page({
    onInit() {
        logger.debug('page onInit invoked')
    },

    build() {
        logger.debug('page build invoked')
        const text = hmUI.createWidget(hmUI.widget.TEXT, {
            ...TEXT_STYLE,
        })
        text.setProperty(hmUI.prop.MORE, {
            text: "device 1 Name 22 device 333 Name 444 device 555 Name 666 device 777 Name device 1 Name 22 device 333 Name 444 device 555 Name 666 device 777 Name device 1 Name 22 device 333 Name 444 device 555 Name 666 device 777 Name device 1 Name 22 device 333 Name 444 device 555 Name 666 device 777 Name",
        })
    },

    onDestroy() {
        logger.debug('page onDestroy invoked')
    },
})