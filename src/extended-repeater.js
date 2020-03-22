module.exports = function repeater(str, options) {
    let result = str;
    let add = '';
    if('addition' in options) {
        let addSeparator = ('additionSeparator' in options) ? options['additionSeparator']: '|';
        let addRepeatTimes;
        if(options['additionRepeatTimes'] === undefined) {
            addRepeatTimes = 1;
        }else{
            addRepeatTimes = options['additionRepeatTimes'];
        }
        add = (addSeparator + options['addition']).repeat(addRepeatTimes);
        add = add.replace(addSeparator, '');
    }
    if('repeatTimes' in options) {
        let repeatTimes;
        if(options['repeatTimes'] === undefined) {
            repeatTimes = 1;
        }else{
            repeatTimes = options['repeatTimes'];
        }
        let sep = ('separator' in options) ? options['separator']: '+';
        result = (sep + str + add).repeat(repeatTimes);
        result = result.replace(sep, '');
    }
    return result; 
};