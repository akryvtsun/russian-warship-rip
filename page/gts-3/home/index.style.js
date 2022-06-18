export const { width, height } = hmSetting.getDeviceInfo()

export const TEXT_STYLE = {
  x: 42,
  y: 80,
  w: width - 42 * 2,
  h: height - 120,
  color: 0xffffff,
  text_size: 26,
  align_h: hmUI.align.LEFT,
  align_v: hmUI.align.TOP,
  text_style: hmUI.text_style.WRAP,
}
