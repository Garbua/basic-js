const MODERN_ACTIVITY = 15; 
const HALF_LIFE_PERIOD = 5730;
const K = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {

  if(sampleActivity === null || parseFloat(sampleActivity) > MODERN_ACTIVITY || isNaN(parseFloat(sampleActivity)) || typeof(sampleActivity) !== "string" || parseFloat(sampleActivity) <= 0){
    return false;
  }
  return Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/K);
};
