# azul-cargo-mercado-livre

Rastreamento de pacotes do Mercado Livre enviados pela Azul Cargo

## Instalação

```bash
  npm i --save @rastrear/azul-cargo-mercado-livre
```

## Exemplo

```javascript
const rastrear = require('@rastrear/azul-cargo-mercado-livre');

rastrear.allEvents('1111111').then((res) => {
  console.log(res);
  // {
  //   number: '111-11111111',
  //   events: [
  //     {
  //       status: '250 - Corte De Carga Do Veiculo',
  //       date: '14/04/2020 20:57',
  //       location: 'MELP2 - GUARULHOS / SP'
  //     },
  //     {
  //       status: '100 - Emissao Do Conhecimento De Transporte.',
  //       date: '14/04/2020 20:38',
  //       location: 'MELP2 - GUARULHOS / SP'
  //     },
  //     ...
  //   ]
  // }
});
```

#
