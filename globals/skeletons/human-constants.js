// Measurements in cm.
// Directions reference, from character POV:
// - left +x, right -x
// - front +z, back -z

const EIGHT_HEADS = 180 // cm

const ONE_HEAD = EIGHT_HEADS / 8

// Main blocks

export const HEAD_HEIGHT = ONE_HEAD
export const HEAD_WIDTH = ONE_HEAD * 0.8
export const HEAD_DEPTH = ONE_HEAD * 0.8

export const NECK_HEIGHT = ONE_HEAD / 2
export const NECK_WIDTH = 12
export const NECK_DEPTH = 12

export const CHEST_HEIGHT = ONE_HEAD / 2
export const CHEST_WIDTH = ONE_HEAD * 1.6
export const CHEST_DEPTH = ONE_HEAD * 0.8

export const STOMACH_HEIGHT = ONE_HEAD / 2
export const STOMACH_WIDTH = ONE_HEAD * 1.5
export const STOMACH_DEPTH = ONE_HEAD * 0.8

export const ABDOMEN_HEIGHT = ONE_HEAD / 2
export const ABDOMEN_WIDTH = ONE_HEAD * 0.8
export const ABDOMEN_DEPTH = ONE_HEAD * 0.8

export const HIP_HEIGHT = ONE_HEAD / 2
export const HIP_WIDTH = ONE_HEAD * 1.4
export const HIP_DEPTH = ONE_HEAD * 0.8

// Arms

export const SHOULDER_DEPTH = CHEST_DEPTH * 0.8
export const SHOULDER_HEIGHT = CHEST_HEIGHT
export const SHOULDER_WIDTH = SHOULDER_HEIGHT
export const SHOULDER_OFFSET_X = CHEST_WIDTH / 2
export const SHOULDER_OFFSET_Y = CHEST_HEIGHT - (SHOULDER_HEIGHT / 2)

export const ARM_UPPER_HEIGHT = ONE_HEAD * 0.88
export const ARM_UPPER_WIDTH = SHOULDER_WIDTH * 0.9
export const ARM_UPPER_DEPTH = SHOULDER_DEPTH * 0.9
export const ARM_UPPER_OFFSET_X = SHOULDER_WIDTH / 2
export const ARM_UPPER_OFFSET_Y = SHOULDER_HEIGHT / 2

export const ARM_LOWER_HEIGHT = ARM_UPPER_HEIGHT
export const ARM_LOWER_WIDTH = ARM_UPPER_WIDTH
export const ARM_LOWER_DEPTH = ARM_UPPER_DEPTH

// Legs

export const LEG_UPPER_HEIGHT = ONE_HEAD * 2 // till bottom of knee
export const LEG_UPPER_WIDTH = ONE_HEAD / 1.6
export const LEG_UPPER_DEPTH = ONE_HEAD / 1.4

export const LEG_LOWER_HEIGHT = ONE_HEAD * 1.8
export const LEG_LOWER_WIDTH = ONE_HEAD / 2
export const LEG_LOWER_DEPTH = ONE_HEAD / 1.5

export const LEG_OFFSET = ONE_HEAD / 2.5

export const FOOT_HEIGHT = ONE_HEAD / 2
export const FOOT_WIDTH = ONE_HEAD / 1.5
export const FOOT_DEPTH = ONE_HEAD / 1.5

// Hands

const HAND_SCALE = 1

export const PALM_HEIGHT = (ONE_HEAD / 1.8) * HAND_SCALE
export const PALM_WIDTH = ARM_LOWER_WIDTH * 1.1 * HAND_SCALE
export const PALM_DEPTH = ARM_LOWER_DEPTH * 0.4 * HAND_SCALE

const FINGER_BASE_HEIGHT = PALM_HEIGHT * 0.45
const FINGER_MID_HEIGHT = PALM_HEIGHT * 0.35
const FINGER_TIP_HEIGHT = PALM_HEIGHT * 0.2
const FINGER_WIDTH = PALM_WIDTH / 4
const FINGER_DEPTH = PALM_DEPTH

const THUMB_HEIGHT_SCALE = 1.2
export const THUMB_DEPTH = FINGER_DEPTH
export const THUMB_WIDTH = FINGER_WIDTH
export const THUMB_OFFSET_X = PALM_WIDTH / 2
export const THUMB_BASE_HEIGHT = FINGER_BASE_HEIGHT * THUMB_HEIGHT_SCALE
export const THUMB_MID_HEIGHT = FINGER_MID_HEIGHT * THUMB_HEIGHT_SCALE
export const THUMB_TIP_HEIGHT = FINGER_TIP_HEIGHT * THUMB_HEIGHT_SCALE

const INDEX_HEIGHT_SCALE = 0.93
export const INDEX_WIDTH = FINGER_WIDTH
export const INDEX_DEPTH = FINGER_DEPTH
export const INDEX_OFFSET_X = (PALM_WIDTH / 2) - (INDEX_WIDTH / 2)
export const INDEX_BASE_HEIGHT = FINGER_BASE_HEIGHT * INDEX_HEIGHT_SCALE
export const INDEX_MID_HEIGHT = FINGER_MID_HEIGHT * INDEX_HEIGHT_SCALE
export const INDEX_TIP_HEIGHT = FINGER_TIP_HEIGHT * INDEX_HEIGHT_SCALE

const MIDDLE_HEIGHT_SCALE = 1
export const MIDDLE_WIDTH = FINGER_WIDTH
export const MIDDLE_DEPTH = FINGER_DEPTH
export const MIDDLE_OFFSET_X = (PALM_WIDTH / 2) - INDEX_WIDTH - (MIDDLE_WIDTH / 2)
export const MIDDLE_BASE_HEIGHT = FINGER_BASE_HEIGHT * MIDDLE_HEIGHT_SCALE
export const MIDDLE_MID_HEIGHT = FINGER_MID_HEIGHT * MIDDLE_HEIGHT_SCALE
export const MIDDLE_TIP_HEIGHT = FINGER_TIP_HEIGHT * MIDDLE_HEIGHT_SCALE

const RING_HEIGHT_SCALE = 0.90
export const RING_WIDTH = FINGER_WIDTH
export const RING_DEPTH = FINGER_DEPTH
export const RING_OFFSET_X = -RING_WIDTH / 2
export const RING_BASE_HEIGHT = FINGER_BASE_HEIGHT * RING_HEIGHT_SCALE
export const RING_MID_HEIGHT = FINGER_MID_HEIGHT * RING_HEIGHT_SCALE
export const RING_TIP_HEIGHT = FINGER_TIP_HEIGHT * RING_HEIGHT_SCALE

const PINKY_HEIGHT_SCALE = 0.7
export const PINKY_WIDTH = FINGER_WIDTH
export const PINKY_DEPTH = FINGER_DEPTH
export const PINKY_OFFSET_X = -RING_WIDTH - (PINKY_WIDTH / 2)
export const PINKY_BASE_HEIGHT = FINGER_BASE_HEIGHT * PINKY_HEIGHT_SCALE
export const PINKY_MID_HEIGHT = FINGER_MID_HEIGHT * PINKY_HEIGHT_SCALE
export const PINKY_TIP_HEIGHT = FINGER_TIP_HEIGHT * PINKY_HEIGHT_SCALE
