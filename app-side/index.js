import { MessageBuilder } from '../shared/message'

const messageBuilder = new MessageBuilder()

const logger = DeviceRuntimeCore.HmLogger.getLogger('russian-warship-rip')

AppSideService({
    onInit() {
        logger.log('app side service invoke onInit')

        messageBuilder.call('TEST DATA FROM CALL')

        messageBuilder.listen(() => {})
        messageBuilder.on('request', (ctx) => {
            const jsonRpc = messageBuilder.buf2Json(ctx.request.payload)
            if (jsonRpc.method === 'GET_TODO_LIST') {
                ctx.response({
                    data: {jsonrpc: 'hmrpcv1', result: 'TEST DATA'},
                })
            }
        })
    },

    onRun() {
        logger.log('app side service invoke onRun')
    },

    onDestroy() {
        logger.log('app side service invoke onDestroy')
    }
})