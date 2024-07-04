//  mobiscroll.setOptions({
//      locale: mobiscroll
//          .localeEn, // Specify language like: locale: mobiscroll.localePl or omit setting to use default
//      theme: 'ios', // Specify theme like: theme: 'ios' or omit setting to use default
//      themeVariant: 'light' // More info about themeVariant: https://mobiscroll.com/docs/javascript/datepicker/api#opt-themeVariant
//  });


//  mobiscroll.datepicker('#demo-mobile-picker-mobiscroll', {
//      controls: ['calendar'], // More info about controls: https://mobiscroll.com/docs/javascript/datepicker/api#opt-controls
//      touchUi: true
//  });
//  mobiscroll.datepicker('#pic#demo-mobile-picker-mobiscroll', {
//      controls: ['calendar', 'time'],
//      touchUi: true
//  });

mobiscroll.setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

mobiscroll.datepicker('#demo', {
    controls: ['calendar', 'time'],
    display: 'inline',
});

mobiscroll.datepicker('#demo-timegrid', {
    controls: ['calendar', 'timegrid'],
    display: 'inline',
});