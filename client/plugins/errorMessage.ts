export default defineNuxtPlugin(() => {
    return {
        provide: {
            errorMessage: (message: string) => 'Error: ' + message
        }
    }
})
