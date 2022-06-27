import './shared/device-polyfill'
import { MessageBuilder } from './shared/message'

const logger = DeviceRuntimeCore.HmLogger.getLogger('russian-warship-rip')

const appDevicePort = 20
const appSidePort = 0
const appId = 22813

const messageBuilder = new MessageBuilder({
    appId,
    appDevicePort,
    appSidePort,
})

App({
    globalData: {
        messageBuilder: messageBuilder,
    },

    onCreate(options) {
        logger.log('app on create invoke')
        messageBuilder.connect()
    },

    onDestroy(options) {
        logger.log('app on destroy invoke')
        messageBuilder.disConnect()
    }
})
