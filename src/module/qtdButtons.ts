const qtdButtons = (btnMore: string, btnMinus: string, qtyInput: string) => {
    const $btnMore: HTMLButtonElement | null = document.querySelector(`.${btnMore}`)
    const $btnMinus: HTMLButtonElement | null = document.querySelector(`.${btnMinus}`)
    const $qtyInput = (<HTMLInputElement>document.querySelector(`.${qtyInput}`))

    let qtdNumber = Number($qtyInput.value)

    console.log('$qtyInput :>> ', $qtyInput);
    $qtyInput?.addEventListener('input', (e) => {
        $qtyInput.value = $qtyInput.value.replace(/[^\d]/g, '');
    })

    $btnMore?.addEventListener('click', () => {
        qtdNumber += 1   
        $qtyInput.value = String(qtdNumber)
    })

    $btnMinus?.addEventListener('click', () => {
        if (qtdNumber > 1) {
            qtdNumber -= 1
            $qtyInput.value = String(qtdNumber)
        }
    })
}

export default qtdButtons
