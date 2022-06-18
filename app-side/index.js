AppSideService({
    onInit() {
        console.log('app side service invoke onInit')
        fetch('https://russianwarship.rip/api/v1/statistics/latest')
            .then(function (data) {
                // var sbb = data.body.split(/"forwardConversionRate":|,"backwardConversionRate"/)
                // sb = sbb[1]
            })
    },

    onRun() {
        console.log('app side service invoke onRun')
    },

    onDestroy() {
        console.log('app side service invoke onDestroy')
    }
})