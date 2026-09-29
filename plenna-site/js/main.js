/* =====================================================================
   FOTOS DOS CARDS  -  para trocar uma foto, edite SÓ o caminho da linha.
   Pode usar qualquer nome e extensão (.jpg, .jpeg, .png, .webp).
   Exemplo:  "Pediatria": "images/especialidades/minha-foto-pediatria.png",
   ===================================================================== */
const FOTO={
  "Pediatria":                        "images/especialidades/pediatra.jpg",
  "Alergia e Imunologia":             "images/especialidades/alergia-e-imunologia.jpg",
  "Clínica Geral":                    "images/especialidades/clinica-geral.jpg",
  "Nutrologia":                       "images/especialidades/nutrologia.jpg",
  "Ortopedia e Traumatologia":        "images/especialidades/ortopedia-e-traumatologia.jpg",
  "Cirurgia Vascular":                "images/especialidades/cirurgia-vascular.jpg",
  "Urologia":                         "images/especialidades/urologia.jpg",
  "Ginecologia e Obstetrícia":        "images/especialidades/ginecologia-e-obstetricia.jpg",
  "Dermatologia Clínica e Estética":  "images/especialidades/dermatologia-clinica-e-estetica.jpg",

  "Fonoaudiologia":                   "images/infantil/fonoaudiologia.jpg",
  "Neuropsicopedagogia":              "images/infantil/neuropsicopedagogia.jpg",
  "Neuropsicologia":                  "images/infantil/neuropsicologia.jpg"
};
/* ===================================================================== */

const P=[["Pediatria","Dra. Claudia Cristina Di Giorgio Viu","CRM 100826/SP · RQE 25549"],["Alergia e Imunologia","Dra. Claudia Cristina Di Giorgio Viu","CRM 100826/SP · RQE 37922"],["Clínica Geral","Dr. Luigi Kenji Annicchino","CRM 75655"],["Nutrologia","Dr. Luigi Kenji Annicchino","CRM 75655"],["Ortopedia e Traumatologia","Dr. Raimundo Pelegrini","CRM 88733 · RQE 66840"],["Cirurgia Vascular","Dr. Gilberto Martins","CRM 71134 · RQE 57573"],["Urologia","Dr. Alexandre Piovesan","CRM 73848 · RQE 40418"],["Ginecologia e Obstetrícia","Dra. Gabriela Rezende",""],["Dermatologia Clínica e Estética","Dra. Mayara Carvalho","CRM 92368"]];
const I=[["Fonoaudiologia","Nicoly Silva","Atendimento pediátrico e juvenil."],["Neuropsicopedagogia","Renata Momesso","Rastreio de TDAH e Autismo."],["Neuropsicologia","Rafaela Cintra",""]];
const U=["USG Bolsa Escrotal", "USG Próstata via Abdominal", "USG Abdome Superior", "USG Abdome Total", "USG Ultrassom Obstétrico", "USG Órgão e Estrutura Axilas", "USG Parede Abdominal", "USG Pélvico Ginecológico", "USG Mão / Punho / Pé / Tornozelo / Ombro Direito ou Esquerdo / Cotovelo", "USG Pé / Perna / Braço e Antebraço / Joelho", "USG Transfontanela", "USG Fossa Supraclaviculares", "USG Globo Ocular", "USG Região Inguinal", "USG Partes Moles", "USG Região Cervical", "USG Tireoide", "USG Transvaginal", "USG Transvaginal com Preparo para Endometriose", "USG de Mama", "USG Vias Urinárias / Aparelho Urinário", "USG Próstata Transretal", "USG Joelho Direito", "USG Abdome Total com Doppler", "USG Tireoide com Doppler", "USG Doppler de Carótidas e Vertebrais"];
const cd=(t,n,s,i)=>`<div class="card"><div class="ph b${i%3+1}"><i>${t[0]}</i><img src="${FOTO[t]||''}" alt="${t}" loading="lazy" onerror="console.warn('Imagem não encontrada:',this.getAttribute('src'));this.remove()"></div><div class="pl"><h3>${t}</h3><b>${n}</b><small>${s}</small></div></div>`;
const e=P.map((p,i)=>cd(p[0],p[1],p[2],i)).join('');e1.innerHTML=e;e2.innerHTML=e;
document.querySelectorAll('[data-inf]').forEach(x=>x.innerHTML=I.map((p,i)=>cd(p[0],p[1],p[2],i)).join(''));
document.querySelectorAll('[data-us]').forEach(x=>x.innerHTML=U.map(u=>`<li>${u}</li>`).join(''));document.querySelectorAll('[data-us8]').forEach(x=>x.innerHTML=['USG Transvaginal','USG de Mama','USG Abdome Total','USG Tireoide','USG Ultrassom Obstétrico','USG Próstata Transretal','USG Bolsa Escrotal','USG Doppler de Carótidas e Vertebrais'].map(u=>`<li>${u}</li>`).join(''));
const pages=[...document.querySelectorAll('.pg')].map(p=>p.id);
function r(){const h=location.hash.slice(1);const id=pages.includes(h)?h:'inicio';document.querySelectorAll('.pg').forEach(p=>p.classList.toggle('on',p.id==id));document.querySelectorAll('nav a').forEach(a=>a.classList.toggle('on',a.hash=='#'+id));nv.classList.remove('o');scrollTo(0,0)}
const mqh=P.map(p=>`<span>${p[0]}</span>`).join('');mq.innerHTML=mqh+mqh;
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.card,.two>*,section h2,.sub,.ey').forEach((x,i)=>{x.classList.add('rv');x.style.transitionDelay=(i%3)*90+'ms';io.observe(x)});
const pb=document.getElementById('pb');addEventListener('scroll',()=>{pb.style.width=scrollY/(document.documentElement.scrollHeight-innerHeight)*100+'%'},{passive:true});
document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const r=c.getBoundingClientRect();c.style.setProperty('--x',e.clientX-r.left+'px');c.style.setProperty('--y',e.clientY-r.top+'px')}});
addEventListener('hashchange',r);r();bg.onclick=()=>nv.classList.toggle('o');