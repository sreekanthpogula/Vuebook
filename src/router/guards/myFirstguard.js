export default function consoleRouterGuard(to, from, next) {

    console.log(to)
    console.log(from)
    console.log('printing')
           return next();
    }