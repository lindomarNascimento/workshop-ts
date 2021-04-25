import { qtdButtonsProps } from '../interface'

const qtdButtons = ({btnMore, btnMinus, qtyInput}: qtdButtonsProps) => {
    const $btnMore = document.querySelector<HTMLButtonElement>(`.${btnMore}`)
    const $btnMinus = document.querySelector<HTMLButtonElement>(`.${btnMinus}`)
    const $qtyInput = (document.querySelector(`.${qtyInput}`)) as HTMLInputElement

    let qtdNumber = Number($qtyInput.value)

    console.log('$qtyInput :>> ', $qtyInput);
    $qtyInput?.addEventListener('input', (e) => {
        $qtyInput.value = $qtyInput.value.replace(/[^\d]/g, '');
    })

    $btnMore?.addEventListener('click', () => {
        console.log('certin')
        qtdNumber += 1   
        $qtyInput.value = String(qtdNumber)
    })

    $btnMinus?.addEventListener('click', () => {
        console.log('certin')

        if (qtdNumber > 1) {
            qtdNumber -= 1
            $qtyInput.value = String(qtdNumber)
        }
    })
}

export default qtdButtons
