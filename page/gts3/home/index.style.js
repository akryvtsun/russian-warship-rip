export const { width, height, deviceName } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
  text: deviceName,
  x: 42,
  y: 200,
  w: width - 42 * 2,
  h: 100,
  color: 0xffffff,
  text_size: 36,
  align_h: hmUI.align.CENTER_H,
  text_style: hmUI.text_style.WRAP,
}
