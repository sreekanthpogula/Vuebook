export default function consoleRouterGuard(to, from, next) {

    console.log(to, from, next)
    next(true)
//     console.log(from)
//     console.log('these are global routes')
//            return next();
    }