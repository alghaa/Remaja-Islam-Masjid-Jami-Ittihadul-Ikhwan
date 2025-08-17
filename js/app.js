/* Simple SPA untuk daftar anggota organisasi */
const state = {
  route: (location.hash || '#overview').replace('#',''),
  players: [
    { Nama: 'Alif', umur: 20, jabatan: 'Ketua Pelaksana' },
    { Nama: 'Fauzan', umur: 21, jabatan: 'Wakil Ketua'},
    { Nama: 'Reza', umur: 22, jabatan: 'Ketua Acara' }
  ],
  fixtures: [],
  transfers: [],
  news: []
};

const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

function setRoute(route){
  state.route = route;
  location.hash = route;
  render();
  highlightActiveTab();
  toast(`Navigated to ${route}`);
}

function highlightActiveTab(){
  $$('.tab').forEach(t=>t.classList.toggle('active', t.dataset.route===state.route));
}

function renderOverview(){
  return `
  <div class="card">
    <div class="section-title">Selamat Datang</div>
    <p>Website ini menampilkan daftar anggota organisasi.</p>
  </div>`;
}

function renderSquad(){
  return `
  <div class="card">
    <div class="section-title">Daftar Anggota</div>
    <table class="table" id="squadTable">
      <thead>
        <tr>
          <th>Nama</th><th>Umur</th><th>Jabatan</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>`;
}

function mountTable(){
  const tbody = document.querySelector('#squadTable tbody');
  tbody.innerHTML = '';
  const rows = state.players.map(p=>`
    <tr>
      <td>${p.Nama}</td>
      <td>${p.umur}</td>
      <td>${p.jabatan}</td>
    </tr>
  `).join('');
  tbody.innerHTML = rows;
}

function renderFixtures(){
  return `<div class="card"><div class="section-title">Fixtures</div><p>Tidak ada data.</p></div>`;
}

function renderTransfers(){
  return `<div class="card"><div class="section-title">Transfers</div><p>Tidak ada data.</p></div>`;
}

function renderNews(){
  return `<div class="card"><div class="section-title">News</div><p>Tidak ada berita.</p></div>`;
}

function renderMarketValue(){
  return `<div class="card"><div class="section-title">Informasi</div><p>Tidak ada data market value, karena ini bukan tim bola.</p></div>`;
}

function toast(msg){
  const t = $('.toast'); t.textContent = msg; t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 1600);
}

function render(){
  const root = $('#app');
  const map = {
    overview: renderOverview,
    squad: renderSquad,
    fixtures: renderFixtures,
    transfers: renderTransfers,
    news: renderNews,
    marketvalue: renderMarketValue,
  };
  root.innerHTML = (map[state.route] || renderOverview)();
  if(state.route==='squad'){ mountTable(); }
}

window.addEventListener('hashchange', ()=>{
  state.route = (location.hash || '#overview').replace('#','');
  render(); highlightActiveTab();
});

window.addEventListener('DOMContentLoaded', ()=>{
  render(); highlightActiveTab();
});
