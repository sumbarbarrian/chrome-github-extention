const nodes = document.querySelectorAll("[data-test-id=custom-label-Priority]")
if (nodes.length > 0) {
    nodes.forEach( node => {
        node.style.color = 'white'
        node.style.borderRadius = '4px'
        const content = node.querySelector('span')

        const icon = document.createElement('span')
        icon.style.transform = 'rotate(-90deg)'
        icon.style.display = 'inline-block'
        icon.style.fontSize = '10px'
        icon.style.marginRight = '10px'

        if(node.textContent === 'Normal') {
            node.style.background = 'green'
            icon.textContent = '≫'
        }

        if(node.textContent === 'Major') {
            node.style.background = '#8B0000'
            icon.textContent = '⋙'
        }

        if(node.textContent === 'Low') {
            node.style.background = '#adaee6'
            icon.textContent = '>'
        }
        content.prepend(icon)
    })
}