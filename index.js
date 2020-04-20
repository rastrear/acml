const cherrio = require('cheerio');
const fetch = require('node-fetch');

/**
 * Consulta a página de rastreamento e retorna os dados do pacote
 * @param {string|number} code
 * @return {Promise} Dados do pacote em json
 */
async function scraping(code) {
  const res = await fetch(`https://hmg.onlineapp.com.br/EDIv2_rastreioML/Rastreio/MercadoLivre?TrackingNumber=${code}`);
  const $ = cherrio.load(await res.text());

  const number = $('#numeroCotacao p span.fonteNormal').text();
  const events = $('.timeline .timeline-item .timeline-content').map((i, el) => ({
    status: $(el).find('.status').text().trim(),
    date: $(el).find('.date').text().trim(),
    location: $(el).find('> span').text().trim(),
  })).get();

  return { number, events };
}

/**
 * Consulta todos os eventos de um pacote
 * @param {string|number} code Código de rastreio do produto
 * @return {Promise} Dados do do produto em json
 */
module.exports.allEvents = (code) => scraping(code);
