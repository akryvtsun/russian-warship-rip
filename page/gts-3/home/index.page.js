import { TEXT_STYLE } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('russian-warship-rip')

const { messageBuilder } = getApp()._options.globalData

let widget

Page({
    onInit() {
        logger.log('page onInit invoked')

        messageBuilder.on('call', ({ payload: buf }) => {
            const json = messageBuilder.buf2Json(buf)
            widget.setProperty(hmUI.prop.MORE, {
                text: json
            })
        })
    },

    build() {
        logger.log('page build invoked')

        widget = hmUI.createWidget(hmUI.widget.TEXT, {
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
            .catch((res) => {})
    },

    onDestroy() {
        logger.log('page onDestroy invoked')
    },
})