import { NativeModules } from 'react-native'

const DocumentScanner = () => {

  const documentScanner = NativeModules.RNDocumentScanner

  return {
    startScan = (param) => {
      documentScanner.startScan(param.savePath, param.callback)
    },
    detectRectangle = (param) => {
      documentScanner.detectRectangle(param.path, param.callback)
    },
    dismiss = () => {
      documentScanner.dismiss()
    },
  }
}

export default DocumentScanner
