import {
  SHOULDER_HEIGHT,
  SHOULDER_WIDTH,
  SHOULDER_DEPTH
} from '../../skeletons/human-constants'

export default {
  id: 'b0-shoulder-left',
  name: 'B0 - Shoulder (Left)',
  p: [
    {
      id: '0',
      rT: 'g',
      rI: 'box',
      cs: true,
      rs: true,
      o: true,
      s: {
        x: SHOULDER_WIDTH / 2,
        y: SHOULDER_HEIGHT / 2,
        z: SHOULDER_DEPTH / 2
      },
      p: {
        y: (SHOULDER_HEIGHT / 2) - 2,
        z: SHOULDER_DEPTH / 8
      }
    }
  ]
}
