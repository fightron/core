import {
  NECK_HEIGHT,
  SHOULDER_OFFSET,
  CHEST_HEIGHT,
  STOMACH_HEIGHT,
  ABDOMEN_HEIGHT,
  HIP_HEIGHT,
  ARM_UPPER_HEIGHT,
  ARM_LOWER_HEIGHT,
  PALM_HEIGHT,
  FINGER_SEGMENT_HEIGHT,
  FINGER_SEGMENT_HEIGHT_90,
  FINGER_SEGMENT_HEIGHT_80,
  THUMB_WIDTH,
  THUMB_OFFSET,
  THUMB_SEGMENT_HEIGHT,
  INDEX_OFFSET,
  MIDDLE_OFFSET,
  RING_OFFSET,
  PINKY_OFFSET,
  LEG_UPPER_HEIGHT,
  LEG_LOWER_HEIGHT,
  LEG_OFFSET,
  FOOT_HEIGHT,
  FOOT_DEPTH
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
    { id: 'SL' /* Shoulder Left */, par: 'C', rO: 'YXZ', p: { x: SHOULDER_OFFSET, y: CHEST_HEIGHT } },
    { id: 'SR', par: 'C', rO: 'YXZ', p: { x: -SHOULDER_OFFSET, y: CHEST_HEIGHT } },
    { id: 'AUL' /* Arm Upper Left */, par: 'SL', p: { x: 10, y: -10 } },
    { id: 'AUR', par: 'SR', p: { x: -10, y: -10 } },
    { id: 'ALL' /* Arm Lower Left */, par: 'AUL', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'ALR', par: 'AUR', p: { y: -ARM_UPPER_HEIGHT } },
    { id: 'PL' /* Palm Left */, par: 'ALL', p: { y: -ARM_LOWER_HEIGHT } },
    { id: 'PR', par: 'ALR', p: { y: -ARM_LOWER_HEIGHT } },
    { id: 'TBL' /* Thumb */, par: 'PL', p: { x: THUMB_OFFSET } },
    { id: 'TML', par: 'TBL', p: { x: THUMB_WIDTH / 2, y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TTL', par: 'TML', p: { y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TBR', par: 'PR', p: { x: -THUMB_OFFSET } },
    { id: 'TMR', par: 'TBR', p: { x: -THUMB_WIDTH / 2, y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'TTR', par: 'TMR', p: { y: -THUMB_SEGMENT_HEIGHT } },
    { id: 'IBL' /* Index */, par: 'PL', p: { x: INDEX_OFFSET, y: -PALM_HEIGHT } },
    { id: 'IML', par: 'IBL', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'ITL', par: 'IML', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'IBR', par: 'PR', p: { x: -INDEX_OFFSET, y: -PALM_HEIGHT } },
    { id: 'IMR', par: 'IBR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'ITR', par: 'IMR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'MBL' /* Middle */, par: 'PL', p: { x: MIDDLE_OFFSET, y: -PALM_HEIGHT } },
    { id: 'MML', par: 'MBL', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MTL', par: 'MML', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MBR', par: 'PR', p: { x: -MIDDLE_OFFSET, y: -PALM_HEIGHT } },
    { id: 'MMR', par: 'MBR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'MTR', par: 'MMR', p: { y: -FINGER_SEGMENT_HEIGHT } },
    { id: 'RBL' /* Ring */, par: 'PL', p: { x: RING_OFFSET, y: -PALM_HEIGHT } },
    { id: 'RML', par: 'RBL', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RTL', par: 'RML', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RBR', par: 'PR', p: { x: -RING_OFFSET, y: -PALM_HEIGHT } },
    { id: 'RMR', par: 'RBR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'RTR', par: 'RMR', p: { y: -FINGER_SEGMENT_HEIGHT_90 } },
    { id: 'PBL' /* Pinky */, par: 'PL', p: { x: PINKY_OFFSET, y: -PALM_HEIGHT } },
    { id: 'PML', par: 'PBL', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PTL', par: 'PML', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PBR', par: 'PR', p: { x: -PINKY_OFFSET, y: -PALM_HEIGHT } },
    { id: 'PMR', par: 'PBR', p: { y: -FINGER_SEGMENT_HEIGHT_80 } },
    { id: 'PTR', par: 'PMR', p: { y: -FINGER_SEGMENT_HEIGHT_80 } }
  ]
}
