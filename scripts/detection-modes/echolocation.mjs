import { DetectionModeBlindsight } from "./blindsight.mjs";

/**
 * The detection mode for Echolocation.
 */
export class DetectionModeEcholocation extends DetectionModeBlindsight {
    priority = 499;

    constructor() {
        super({
            id: "echolocation",
            label: "VISIONED4.Echolocation",
            type: DetectionMode.DETECTION_TYPES.SOUND,
            angle: true
        });
    }

    /** @override */
    _canDetect(visionSource, target) {
        // Echolocation doesn't work while deafened.
        const source = visionSource.object;
        return !(source instanceof Token && source.document.hasStatusEffect(CONFIG.specialStatusEffects.DEAF)
            && super._canDetect(visionSource, target));
    }
}
