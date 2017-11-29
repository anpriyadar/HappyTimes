import { Dimensions, Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
// Precalculate Device Dimensions for better performance
const isTablet = DeviceInfo && DeviceInfo.isTablet && DeviceInfo.isTablet()
const deviceWidth = Dimensions.get('window').width
const x = isTablet ? 375 : deviceWidth
const y = Dimensions.get('window').height
const deviceHeight = x
const ratioX = deviceHeight < 568 ? (deviceHeight < 375 ? 0.825 : 1.1) : 1.25
const iOSDevice = Platform.OS === 'ios'
// We set our base font size value
const baseUnit = 16

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX

function em(value) {
  return unit * value
}

function widthUnit(val) {
  if (x < 720) {
    if (x < 375) {
      return val * 0.7 * x / 100
    }
    return val * 0.825 * x / 100
  }
  return val * 0.725 * x / 100
}

function totalWidth(val) {
  return (val * x) / 100
}

function px(val) {
  if (x < 720) {
    if (isTablet) {
      return val * (Math.min(Dimensions.get('window').width, Dimensions.get('window').height) / 100)
    }
    return val * (y > x ? 1 * y / 100 : 1 * x / 100)
  }
  return val * (y > x ? y / 100 : x / 100)
}

function getFullDeviceWidth(val) {
  return val * (Math.max(Dimensions.get('window').width, Dimensions.get('window').height) / 100)
}

let responsiveTextPadding
if (iOSDevice) {
  responsiveTextPadding = { paddingBottom: 0 }
} else {
  responsiveTextPadding = { paddingBottom: 3 }
}

const deviceFullWidth = isTablet ? (Math.min(Dimensions.get('window').width, Dimensions.get('window').height) - 375) : Dimensions.get('window').width
const deviceFullHeight = isTablet ? Math.min(Dimensions.get('window').height, Dimensions.get('window').width) : Dimensions.get('window').height
const imageViewFullHeight = (deviceFullWidth / 4) * 3

export default responsiveStyle = {
  responsiveTextPadding,
  Width5: {
    width: px(5)
  },
  Width25: {
    width: px(25)
  },
  widthUnit30: {
    width: widthUnit(58)
  },
  Width35: {
    width: px(35)
  },
  Width50: {
    width: px(50)
  },
  Width15: {
    width: px(15)
  },
  Width75: {
    width: px(40)
  },
  width90: {
    width: px(90)
  },
  widthSearchContent: {
    width: widthUnit(118)
  },
  height5: {
    height: px(5)
  },
  height6: {
    height: px(6)
  },
  height7: {
    height: px(7)
  },
  height8: {
    height: px(8)
  },
  height80: {
    height: px(60)
  },
  height20: {
    height: px(20)
  },
  height15: {
    height: px(15)
  },
  height10: {
    height: px(10)
  },
  height19: {
    height: px(19)
  },
  height22: {
    height: px(22)
  },
  height25: {
    height: px(25)
  },
  height30: {
    height: px(30)
  },
  rowDivs : {
    width: px(28),
    height: px(28)
  },
  imgStyles :  {
    width:  px(29),
    height: px(11),
    margin: px(2.5)
  },
  imgStylesCt :  {
    width:  px(44),
    height: px(8),
    margin: px(2.5),
  },
  navBar: {
    flex: 1,
    backgroundColor: '#005abc',
    height: px(18)
  },
  sbarStyle: {
    height: px(18)
  },
  srchInputStyle: {
    height: px(10)
  },
  inputWidth: {
    width:  px(30)
  },
  ImageSize: {
    width: px(25),
    height: px(20)
  },
  searchImg: {
    width: widthUnit(30),
    height: widthUnit(20)
  },
  lotImg: {
    width: px(18),
    height: px(18)
  },
  paddingXs: {
    padding: px(1)
  },
  emFontSize1: {
    fontSize: em(1)
  },
  emFontSizeS: {
    fontSize: em(0.8)
  },
  emFontSize: {
    fontSize: em(1.1)
  },
  emFontSizeM: {
    fontSize: em(0.9)
  },
  emFontSizeXL: {
    fontSize: em(1.8)
  },
  biddinginputimgstyles: {
    height: px(3)
  },
  homeImgStyles: {
    width: px(6),
    height: px(6)
  },
  containerWidth: {
    width: isTablet ? px(30) : widthUnit(36),
    height: isTablet ? px(28) : widthUnit(35)
  },
  borderRightBtm: {
    borderStyle: 'solid',
    borderColor: isTablet ? '#DEDEDE' : '#bbb',
    borderRightWidth: 1,
    borderBottomWidth: isTablet ? 0 : 1,
  },
  borderBottom: {
    borderStyle: 'solid',
    borderColor: isTablet ? '#DEDEDE' : '#bbb',
    borderRightWidth: isTablet ? 1 : 0,
    borderBottomWidth: isTablet ? 0 : 1,
  },
  borderRight: {
    borderStyle: 'solid',
    borderColor: isTablet ? '#DEDEDE' : '#bbb',
    borderRightWidth: 1,
  },
  borderBottomTopGreyThin: {
    borderStyle: 'solid',
    borderColor: isTablet ? '#DEDEDE' : '#bbb',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  top50: {
    top: px(7)
  },
  globImgStyles: {
    width: px(2.5),
    height: px(2.5)
  },
  dropdwnImgStyles: {
    width: px(2.2),
    height: px(1.5),
    marginRight: 5,
    marginLeft: 5
  },
  paddingSearchBar: {
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  searchBarFont: {
    fontSize: 14,
  },
  clickthroughImgStyles: {
    width: px(1.25),
    height: px(2)
  },
  signInDes: {
    fontSize: em(0.9),
    marginTop: px(1.5),
    textAlign: 'center',
    color: '#55585D',
    width: widthUnit(80)
  },
  inputStyles: {
    borderBottomWidth: 1,
    color: 'red'
  },
  makeOfferInput: {
    height: 40,
    backgroundColor: '#fff',
    borderTopWidth: 0,
    borderColor: '#444',
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomWidth: 1,
    borderWidth: 1,
    fontSize: 16,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5
  },
  searchfilterWidth: {
    width: isTablet ? (getFullDeviceWidth(100) - 400) : widthUnit(78)
  },
  empaddingXs: {
    padding: em(0.7)
  },
  empaddingXss: {
    padding: em(0.73)
  },
  empaddingMd: {
    padding: em(0.5)
  },
  bottomPadding: {
    paddingBottom: 5
  },
  fontLeft: {
    textAlign: 'left'
  },
  flexarrow: {
    flex: 0.05
  },
  flexarrowCurncy: {
    flex: 0.22
  },
  flexarrowSm: {
    flex: 0.03
  },
  flexFoutyFive: {
    flex: 0.45
  },
  fullWidth96: {
    width: isTablet ? getFullDeviceWidth(96) : totalWidth(96)
  },
  fullWidth100: {
    width: totalWidth(100)
  },
  lineHeight20: {
    lineHeight: 16
  },
  tutorialImg: {
    width: px(12),
    height: px(12)
  },
  backgroundWhiteSmoke: {
    backgroundColor: '#efefef'
  },
  borderFullWhiteThin: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#FFF',
  },
  scannerImgStyles: {
    width: 30,
    height: 24
  },
  globalImgStyles: {
    width: 25,
    height: 25,
  },
  downArrowImgStyles: {
    width: 20,
    height: 15,
    marginLeft: 5
  },
  newglobImgStyles: {
    width: px(4.5),
    height: px(4.5),
  },
  searchLeft: {
    left: -(px(3) + 3),
    top: (px(5))
  },
  fontGrey: {
    color: '#4C4F55'
  },
  bidStatusWidth: {
    width: 50
  },
  paddingBidStatus: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 10,
  },
  opacityHalf: {
    opacity : 0.5
  },
  snackImgStyles: {
    width: px(3),
    height: px(3)
  },
  snackCloseImg: {
    width: px(2),
    height: px(2)
  },
  fontOffBlack: {
    color: '#333'
  },
  fontHalfBlack: {
    color: '#55585D'
  },
  empaddingMarginXs: {
    paddingRight: em(0.7),
    paddingTop: em(0.7),
    paddingBottom: em(0.7),
    marginLeft:  em(0.7)
  },
  borderBottomGreyThin: {
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#CECDD2',
  },
  backgroundLighterGrey: {
    backgroundColor: '#F7F7F7'
  },
  bottomPaddingSetting: {
    paddingBottom: px(3)
  },
  fullPaddingSm: {
    padding: 3,
  },
  height35: {
    height: 35
  },
  width70: {
    width: 70
  },
  empaddingverticalMd: {
    paddingTop: em(0.5),
    paddingBottom: em(0.5)
  },
  fullWidthImg: {
    width: totalWidth(100),
    height: totalWidth(75),
  },
  emFontSizeL: {
    fontSize: em(1.2)
  },
  width33: {
    width: totalWidth(33)
  },
  width88: {
    width: totalWidth(88)
  },
  tabContainerWidth: {
    width: getFullDeviceWidth(16.6),
    height: px(32)
  },
  regTextBottomPadding: {
    paddingBottom: px(5)
  },
  fullDeviceWidth: {
    width: getFullDeviceWidth(99),
    height: isTablet ? px(40) : px(27),
  },
  tabFullWidth100: {
    width: isTablet ? getFullDeviceWidth(100) : totalWidth(100)
  },
  tabSideFullWidth100: {
    width: isTablet ? 375 : totalWidth(100)
  },
  fullWidth989: {
    width: isTablet ? getFullDeviceWidth(90) : totalWidth(80),
  },
  searchFullWidth96: {
    width: totalWidth(96)
  },
  verticalPaddingSm: {
    paddingTop: 15,
    paddingBottom: 10
  },
  height250: {
    height: 200
  },
  modalStyle: {
    width: isTablet ? getFullDeviceWidth(40) : totalWidth(88),
  },
  pickerStyle: {
    width: isTablet ? getFullDeviceWidth(100) : totalWidth(100),
    height: isTablet ? 300 : 190
  },
  searchBarcustomStyles: {
    width: isTablet ? getFullDeviceWidth(100) - 110 : totalWidth(100) - 108,
    paddingRight: 2
  },
  sidePaddingMd: {
    paddingLeft: 5,
    paddingRight: 15
  },
  lotspaddingXs: {
    paddingTop: px(1),
    paddingBottom: px(0.75),
    paddingLeft: px(1),
    paddingRight: px(1)
  },
  SearchInputPadding: {
    paddingBottom: iOSDevice ? 0 : 5,
    paddingRight: iOSDevice ? 0 : 5,
    paddingTop: iOSDevice ? 0 : 5,
    paddingLeft: iOSDevice ? 3 : 5,
    borderWidth: 0,
    borderColor: '#FFF'
  },
  globalSidePadding: {
    paddingRight: 12,
    paddingLeft: 8
  },
  btnStyles: {
    width: isTablet ? 500 : totalWidth(94),
  },
  lotInfobtnStyles: {
    width: isTablet ? 295 : totalWidth(92),
  },
  width85: {
    width: 85
  },
  lotFullImage: {
    position: 'absolute',
    width: 640,
    height: 480,
    transform: [{ scaleX: (deviceFullWidth / 640) }, { scaleY: (imageViewFullHeight / 480) }],
    top: -Math.abs((imageViewFullHeight - 480) / 2),
    left: -Math.abs((deviceFullWidth - 640) / 2)
  },
  fullWidth50: {
    width: totalWidth(50),
  },
  layoutStyle: {
    backgroundColor: 'red'
  },
  fullWidthBtn: {
    width: isTablet ? 350 : totalWidth(96)
  },
}
