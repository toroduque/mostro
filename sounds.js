import Sound from 'react-native-sound';

const kick_01 = new Sound('./JK_BD_02.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const kick_02 = new Sound('./JK_BD_06.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const brush_01 = new Sound('./JK_BRSH_01.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const brush_02 = new Sound('./JK_BRSH_02.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const hihat_01 = new Sound('./JK_HH_01.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const hihat_02 = new Sound('./JK_HH_02.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const perc_01 = new Sound('./JK_PRC_03.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const perc_02 = new Sound('./JK_PRC_04.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const perc_03 = new Sound('./JK_PRC_05.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const perc_04 = new Sound('./JK_PRC_06.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const perc_05 = new Sound('./JK_PRC_09.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const snare_01 = new Sound('./JK_SNR_01.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})
const snare_02 = new Sound('./JK_SNR_02.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})
const snare_03 = new Sound('./JK_SNR_03.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const snare_04 = new Sound('./JK_SNR_04.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})

const snare_05 = new Sound('./JK_SNR_07.wav', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log(error)
    return;
  }
})


let sounds = []

sounds.push(
  kick_01,
  kick_02,
  snare_01,
  snare_02,
  snare_03,
  snare_04,
  snare_05,
  brush_01,
  brush_02,
  hihat_01,
  hihat_02,
  perc_01,
  perc_02,
  perc_03,
  perc_04,
  perc_05
)

export default sounds
