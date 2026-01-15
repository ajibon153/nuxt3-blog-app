export default defineNuxtPlugin(() => {
    return {
        provide: {
            successMessage: (message: string) => 'Success: ' + message
        }
    }
})
