$(function() {
  main()
})

function setHTMLTable(data, tableId, header = false) {
  tpart = document.getElementById(tableId)
  trow = tpart.insertRow(-1)

  data.map(value => {
    cell = header ? document.createElement('th') : document.createElement('td')
    cell.innerHTML = value
    trow.appendChild(cell)
  })
}

const main = async () => {
  let tableData = {
    title: 'Chained Farms Network',
    heading: ['Name', 'Pools', 'Token', 'Max Supply', 'Link'],
    rows: [
      [
        'The Main Farm',
        `<a href="/mainchain/main">Various</a>`,
        'CFN',
        '1,000,000',
        '<a href="https://main.chainedfarms.network">Link</a>',
      ],
      [
        'The RollerCoaster',
        `<a href="/mainchain/sub1">Various</a>`,
        'SFN1',
        '642,000,000',
        '<a href="https://sub1.chainedfarms.network">Link</a>',
      ],
    ],
  }

  setHTMLTable(tableData.heading, 'thead', true)
  for (data of tableData.rows) {
    setHTMLTable(data, 'tbody')
  }

  hideLoading()
}
