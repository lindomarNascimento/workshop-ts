import hello from './module/hello'
import qtdButtons from './module/qtdButtons'
import Element from './module/elements'
// import EplusUtils from './module/element'
// hello('Hellou world')

// test('more','minus', 'number')


// const propsQtdButtons = {
//     btnMore: 'more',
//     btnMinus: 'minus',
//     qtyInput: 'number'
// }

// qtdButtons(propsQtdButtons)

const linkMyAccount = Element({
    elementType: 'a',
    classes: ['teste'],
    text: "um link qualquer ai",
    href: "/vai"
})

const container = document.querySelector('.container')

console.log(`container`, container)
container?.appendChild(linkMyAccount)