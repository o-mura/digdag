/* eslint-env jest */

jest.mock('../style.less', () => jest.fn())

window.URL = {
  createObjectURL: () => {}
}
