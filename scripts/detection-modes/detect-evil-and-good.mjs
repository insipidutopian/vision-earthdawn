/**
 * The detection mode for Detect Evil and Good.
 */
export class DetectionModeDetectEvilAndGood extends DetectionMode {
    imprecise = true;
    priority = -2000;

    constructor() {
        super({
            id: "detectEvilAndGood",
            label: "VISIONED4.DetectEvilAndGood",
            type: DetectionMode.DETECTION_TYPES.OTHER,
            walls: false,
            angle: false
        });
    }

    /** @override */
    static getDetectionFilter() {
        return this._detectionFilter ??= GlowOverlayFilter.create({
            glowColor: [1, 1, 0, 1]
        });
    }

    /** @override */
    _canDetect(visionSource, target) {
        if (!(target instanceof Token)) return false;
        const actor = target.actor;
        if (!(actor && actor.type === "npc")) return false;
        const type = actor.system.details.type.value;
        return type === "aberration"
            || type === "celestial"
            || type === "elemental"
            || type === "fey"
            || type === "fiend"
            || type === "undead";
    }
}
