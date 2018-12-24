import printMe from './print.js'
import './styles.css'

const debug = function() {
    if (process.env.NODE_ENV !== 'production') {
        console.log('Looks like we are in development mode!')
    }
}

const component = function() {
    let element = document.createElement('div')
    var btn = document.createElement('button')

    element.innerHTML = ['Hello', 'webpack'].join(' ')

    btn.innerHTML = 'Click me and check the console'
    btn.onclick = printMe

    element.appendChild(btn)

    return element
}

const addComponent = function() {
    let element = component()
    document.body.appendChild(element)
}

const __main = function() {
    debug()
    addComponent()
}

__main()
