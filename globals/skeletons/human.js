import {
  NECK_HEIGHT,
  CHEST_HEIGHT,
  STOMACH_HEIGHT,
  ABDOMEN_HEIGHT,
  HIP_HEIGHT,

  SHOULDER_OFFSET_X,
  SHOULDER_OFFSET_Y,
  ARM_UPPER_OFFSET_X,
  ARM_UPPER_OFFSET_Y,
  ARM_UPPER_HEIGHT,
  ARM_LOWER_HEIGHT,
  PALM_HEIGHT,

  LEG_UPPER_HEIGHT,
  LEG_LOWER_HEIGHT,
  LEG_OFFSET,
  FOOT_HEIGHT,
  FOOT_DEPTH,

  THUMB_BASE_HEIGHT,
  THUMB_MID_HEIGHT,
  THUMB_WIDTH,
  THUMB_OFFSET_X,

  INDEX_OFFSET_X,
  INDEX_BASE_HEIGHT,
  INDEX_MID_HEIGHT,

  MIDDLE_OFFSET_X,
  MIDDLE_BASE_HEIGHT,
  MIDDLE_MID_HEIGHT,

  RING_OFFSET_X,
  RING_BASE_HEIGHT,
  RING_MID_HEIGHT,

  PINKY_OFFSET_X,
  PINKY_BASE_HEIGHT,
  PINKY_MID_HEIGHT
} from './human-constants'

export default {
  id: 'h',
  n: 'Human',
  b: [

    /* Root */ { id: '_' },
    { id: 'Cn' /* Center */, par: '_', p: { y: HIP_HEIGHT + LEG_UPPER_HEIGHT + LEG_LOWER_HEIGHT + FOOT_HEIGHT } },

    { id: 'W' /* Waist/Hip */, par: 'Cn', rO: 'YXZ' },

    { id: 'LUL' /* Leg Upper Left */, par: 'W', rO: 'XZY', p: { x: LEG_OFFSET, y: -HIP_HEIGHT } },
    { id: 'LUR', par: 'W', rO: 'XZY', p: { x: -LEG_OFFSET, y: -HIP_HEIGHT } },
    { id: 'LLL' /* Leg Lower Left */, par: 'LUL', p: { y: -LEG_UPPER_HEIGHT } },
    { id: 'LLR', par: 'LUR', p: { y: -LEG_UPPER_HEIGHT } },
    { id: 'FL' /* Foot Left */, par: 'LLL', rO: 'XZY', p: { y: -LEG_LOWER_HEIGHT } },
    { id: 'FR', par: 'LLR', rO: 'XZY', p: { y: -LEG_LOWER_HEIGHT } },
    { id: 'TL' /* Toes Left */, par: 'FL', p: { y: -FOOT_HEIGHT, z: FOOT_DEPTH } },
    { id: 'TR', par: 'FR', p: { y: -FOOT_HEIGHT, z: FOOT_DEPTH } },

    { id: 'A' /* Abdomen */, par: 'Cn' },
    { id: 'S' /* Stomach */, par: 'A', p: { y: ABDOMEN_HEIGHT } },
    { id: 'C' /* Chest */, par: 'S', p: { y: STOMACH_HEIGHT } },
    { id: 'N' /* Neck */, par: 'C', p: { y: CHEST_HEIGHT } },
    { id: 'H' /* Head */, par: 'N', p: { y: NECK_HEIGHT } },

    { id: 'SL' /* Shoulder Left */, par: 'C', rO: 'YXZ', p: { x: SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y } },
    { id: 'SR', par: 'C', rO: 'YXZ', p: { x: -SHOULDER_OFFSET_X, y: SHOULDER_OFFSET_Y } },
    { id: 'AUL' /* Arm Upper Left */, par: 'SL', p: { x: ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y } },
    { id: 'AUR', par: 'SR', p: { x: -ARM_UPPER_OFFSET_X, y: -ARM_UPPER_OFFSET_Y } },
    { id: 'ALL' /* Arm Lower Left */, par: 'AUL', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'ALR', par: 'AUR', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'PL' /* Palm Left */, par: 'ALL', p: { y: -ARM_LOWER_HEIGHT } },
    { id: 'PR', par: 'ALR', p: { y: -ARM_LOWER_HEIGHT } },

    { id: 'TBL' /* Thumb */, par: 'PL', p: { x: THUMB_OFFSET_X } },
    { id: 'TML', par: 'TBL', p: { x: THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT } },
    { id: 'TTL', par: 'TML', p: { y: -THUMB_MID_HEIGHT } },
    { id: 'TBR', par: 'PR', p: { x: -THUMB_OFFSET_X } },
    { id: 'TMR', par: 'TBR', p: { x: -THUMB_WIDTH / 2, y: -THUMB_BASE_HEIGHT } },
    { id: 'TTR', par: 'TMR', p: { y: -THUMB_MID_HEIGHT } },

    { id: 'IBL' /* Index */, par: 'PL', p: { x: INDEX_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'IML', par: 'IBL', p: { y: -INDEX_BASE_HEIGHT } },
    { id: 'ITL', par: 'IML', p: { y: -INDEX_MID_HEIGHT } },
    { id: 'IBR', par: 'PR', p: { x: -INDEX_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'IMR', par: 'IBR', p: { y: -INDEX_BASE_HEIGHT } },
    { id: 'ITR', par: 'IMR', p: { y: -INDEX_MID_HEIGHT } },

    { id: 'MBL' /* Middle */, par: 'PL', p: { x: MIDDLE_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'MML', par: 'MBL', p: { y: -MIDDLE_BASE_HEIGHT } },
    { id: 'MTL', par: 'MML', p: { y: -MIDDLE_MID_HEIGHT } },
    { id: 'MBR', par: 'PR', p: { x: -MIDDLE_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'MMR', par: 'MBR', p: { y: -MIDDLE_BASE_HEIGHT } },
    { id: 'MTR', par: 'MMR', p: { y: -MIDDLE_MID_HEIGHT } },

    { id: 'RBL' /* Ring */, par: 'PL', p: { x: RING_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'RML', par: 'RBL', p: { y: -RING_BASE_HEIGHT } },
    { id: 'RTL', par: 'RML', p: { y: -RING_MID_HEIGHT } },
    { id: 'RBR', par: 'PR', p: { x: -RING_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'RMR', par: 'RBR', p: { y: -RING_BASE_HEIGHT } },
    { id: 'RTR', par: 'RMR', p: { y: -RING_MID_HEIGHT } },

    { id: 'PBL' /* Pinky */, par: 'PL', p: { x: PINKY_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'PML', par: 'PBL', p: { y: -PINKY_BASE_HEIGHT } },
    { id: 'PTL', par: 'PML', p: { y: -PINKY_MID_HEIGHT } },
    { id: 'PBR', par: 'PR', p: { x: -PINKY_OFFSET_X, y: -PALM_HEIGHT } },
    { id: 'PMR', par: 'PBR', p: { y: -PINKY_BASE_HEIGHT } },
    { id: 'PTR', par: 'PMR', p: { y: -PINKY_MID_HEIGHT } }
  ]
}
