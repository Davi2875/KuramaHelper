const ServerResponse = require("../../src/structures/serverResponses")

var patterns = [
	"pra (para) | que",
	"serve(o|os)",
	"(kurama(-| )|)coins|moedas|dinheiro"
]


module.exports = class WhatAreKuramaCoinsFor extends ServerResponse {
  constructor(client) {
    super(client, patterns, {
      name: "WhatAreKuramaCoinsFor",
      priority: 0,
      ignoreDevs: false,
    })
  }
  
  async run(client, message) {
    message.build(
      message.kuramaReply("Você pode usar os Kurama Coins Para **Apostar** com seus amigos!", "826430254084128829"),
      message.kuramaReply("Também pode **comprar backgrounds** com eles, usando \`d!background\` ou \`d!shop\`! Não se esqueça que pode se casar coma  pessoa que ama! Basta usar \`d!marry\`;", "826431152671817728", false),
      message.kuramaReply("Não se esqueça do \`d!topcoins\`, onde você pode competir pelo 1º Lugar!", "826417964395397160", false)
    )
  }
}
