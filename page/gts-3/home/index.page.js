import { TEXT_STYLE } from './index.style'

const logger = DeviceRuntimeCore.HmLogger.getLogger('helloworld')

Page({
  onInit() {
    logger.debug('page onInit invoked')
  },

  build() {
    logger.debug('page build invoked')
    hmUI.createWidget(hmUI.widget.TEXT, {
      ...TEXT_STYLE,
    })
  },

  onDestroy() {
    logger.debug('page onDestroy invoked')
  },
})