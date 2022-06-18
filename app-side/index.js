AppSideService({
    onInit() {
        console.log('app side service invoke onInit')

        messaging.peerSocket.addListener('message', (payload) => {
            // The Buffer here is polyfill.
            //const message = JSON.parse(Buffer.from(payload).toString('utf-8'))

            // fetch('https://russianwarship.rip/api/v1/statistics/latest')
            //     .then(function (data) {
            //         // var sbb = data.body.split(/"forwardConversionRate":|,"backwardConversionRate"/)
            //         // sb = sbb[1]
            //         const noteBuffer = Buffer.from(data.body)
            //         messaging.peerSocket.send(noteBuffer.buffer)
            //     })
            messaging.peerSocket.send(payload)
        })
    },

    onRun() {
        console.log('app side service invoke onRun')
    },

    onDestroy() {
        console.log('app side service invoke onDestroy')
    }
})