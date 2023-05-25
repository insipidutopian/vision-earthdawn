/**
 * The vision mode for Ghostly Gaze.
 */
export class VisionModeGhostlyGaze extends VisionMode {
    detectionMode = "ghostlyGaze";

    constructor() {
        super({
            id: "ghostlyGaze",
            label: "VISIONED4.GhostlyGaze",
            canvas: {
                shader: ColorAdjustmentsSamplerShader,
                uniforms: { contrast: 0, saturation: -1.0, brightness: 0 }
            },
            lighting: {
                levels: {
                    [VisionMode.LIGHTING_LEVELS.DIM]: VisionMode.LIGHTING_LEVELS.BRIGHT
                },
                background: { visibility: VisionMode.LIGHTING_VISIBILITY.REQUIRED }
            },
            vision: {
                darkness: { adaptive: false },
                defaults: { attenuation: 0, contrast: 0, saturation: -1.0, brightness: 0 }
            }
        });
    }
}
