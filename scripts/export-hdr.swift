// Run on macOS 15+: swift scripts/export-hdr.swift
import Foundation
import CoreImage
import ImageIO

let context = CIContext()
let colorSpace = CGColorSpace(name: CGColorSpace.sRGB)!
for filename in ["IMG_6115.HEIC", "IMG_6819.HEIC", "IMG_8214.heic"] {
    let input = URL(fileURLWithPath: "images/" + filename)
    guard let sdr = CIImage(contentsOf: input, options: [.applyOrientationProperty: true, .expandToHDR: false]),
          let hdr = CIImage(contentsOf: input, options: [.applyOrientationProperty: true, .expandToHDR: true]) else {
        fatalError("Cannot decode \(filename)")
    }
    let scale = min(1, 1600 / max(sdr.extent.width, sdr.extent.height))
    let transform = CGAffineTransform(scaleX: scale, y: scale)
    let output = URL(fileURLWithPath: "assets/travel/" + input.deletingPathExtension().lastPathComponent.lowercased() + "-hdr.jpg")
    try context.writeJPEGRepresentation(of: sdr.transformed(by: transform).settingProperties([:]), to: output,
        colorSpace: colorSpace, options: [
            .hdrImage: hdr.transformed(by: transform),
            CIImageRepresentationOption(rawValue: kCGImageDestinationLossyCompressionQuality as String): 0.85
        ])
    guard let source = CGImageSourceCreateWithURL(output as CFURL, nil),
          CGImageSourceCopyAuxiliaryDataInfoAtIndex(source, 0, kCGImageAuxiliaryDataTypeISOGainMap) != nil else {
        fatalError("Missing ISO HDR gain map: \(output.path)")
    }
    let properties = CGImageSourceCopyPropertiesAtIndex(source, 0, nil)! as NSDictionary
    precondition(properties[kCGImagePropertyGPSDictionary] == nil, "Unexpected GPS metadata")
    print("Verified ISO HDR gain map: \(output.lastPathComponent)")
}
