import {TEXT_STYLE} from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

const { messageBuilder } = getApp()._options.globalData

Page({
    onInit() {
        logger.debug('page onInit invoked')
    },

    build() {
        logger.debug('page build invoked')

        let widget = hmUI.createWidget(hmUI.widget.TEXT, {
            ...TEXT_STYLE,
        })
        widget.setProperty(hmUI.prop.MORE, {
            text: "data ".repeat(40)
        })

        messageBuilder
            .request({
                jsonrpc: 'hmrpcv2',
                method: 'GET_TODO_LIST',
                params: {},
            })
            .then(({result}) => {
                widget.setProperty(hmUI.prop.MORE, {
                    text: result
                })
            })
            .catch((res) => {
            })
    },

    onDestroy() {
        logger.debug('page onDestroy invoked')
    },
})