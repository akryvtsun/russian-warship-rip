//import { MessageBuilder } from '../shared/message'

//const messageBuilder = new MessageBuilder()
const { messageBuilder } = getApp()._options.globalData

AppSideService({
    onInit() {
        console.log('app side service invoke onInit')

        messageBuilder.listen(() => {
        })
        messageBuilder.on('request', (ctx) => {
            const jsonRpc = messageBuilder.buf2Json(ctx.request.payload)
            if (jsonRpc.method === 'GET_TODO_LIST') {
                ctx.response({
                    data: {jsonrpc: 'hmrpcv1', result: "TEST DATA"},
                })
            }
        })
    },

    onRun() {
        console.log('app side service invoke onRun')
    },

    onDestroy() {
        console.log('app side service invoke onDestroy')
    }
})