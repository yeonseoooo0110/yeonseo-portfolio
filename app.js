// 지원 공고별로 페이지가 나뉜다. <body data-page-track="monetization|business">
const TRACKS = {
 monetization: {
  label: '유료화 기획 인턴',
  intro: '유저 행동과 전환 구조를 바꾼 네 가지 프로젝트입니다.',
  order: ['message', 'self', 'automation', 'intake'],
  portfolio: ['files/bm-portfolio.pdf', '이연서_카카오게임즈_유료화_포트폴리오.pdf'],
  resume: ['files/bm-resume.pdf', '이연서_카카오게임즈_유료화_이력서_경력기술서.pdf']
 },
 business: {
  label: 'MMORPG 사업 인턴',
  intro: '서비스 이슈 대응, 사용자 경험 개선, 운영 효율, 유관부서 협업에 관한 네 가지 프로젝트입니다.',
  titles: {self:'분쟁 신청 전에<br>사용자가 직접 해결하도록', automation:'처리 병목을 찾아 자동화하고<br>운영 여력 확보', intake:'분쟁 신청 앞단에서<br>개입 여부 판단', message:'메시지 구조를 바꿔<br>후속 행동 개선'},
  order: ['self', 'automation', 'intake', 'message'],
  portfolio: ['files/rpg-portfolio.pdf', '이연서_카카오게임즈_RPG_포트폴리오.pdf'],
  resume: ['files/rpg-resume.pdf', '이연서_카카오게임즈_RPG_이력서_경력기술서.pdf']
 }
};
const currentTrack = document.body.dataset.pageTrack === 'business' ? 'business' : 'monetization';
const TRACK = window.TRACK = TRACKS[currentTrack];

// kpi 타입: bar(전→후 막대) · gauge(실측 vs 기준선) · chip(단일 수치)
const missions = [
 {id:'message',code:'01',title:'메시지를 바꿔,<br>다음 행동까지',tag:'메시지 · CTA · 행동 전환',description:'중요한 안내를 놓치는 사용자에게, 해야 할 일이 명확히 보이도록.',metric:'25% → 68.3%',metricLabel:'메시지 클릭률',other:'48.8%',otherLabel:'확인서 제출률 · +15.8%p',
  steps:['분쟁 안내가 일반 문의 알림에 묻혀 <b>클릭률 25%</b>','더 보내기보다 <b>다음 행동이 보이는 구조</b>로','채팅방 메시지로 전환 · <b>헤더→본문→CTA→FAQ</b> 재구성','<b>클릭률 68.3%</b> · 확인서 제출률 <b>+15.8%p</b>'],
  kpis:[{type:'bar',label:'메시지 클릭률',from:25,to:68.3,unit:'%',max:100},{type:'bar',label:'사실관계 확인서 제출률',from:33,to:48.8,unit:'%',max:100,badge:'+15.8%p'}],
  visual:{type:'images',title:'실제 화면',items:[['assets/msg-asis.jpg','As-Is · 일반 문의 알림'],['assets/msg-tobe.jpg','To-Be · CTA가 있는 채팅방 메시지']]},
  problem:'분쟁 답변이 일반 문의 알림에 섞여 메시지 클릭률이 25%에 그쳤습니다. 절차, FAQ, 확인서 요청을 놓치면 후속 행동과 처리까지 지연됐습니다.',decision:'안내를 더 많이 보내기보다, 중요한 내용을 알아보고 다음 행동으로 넘어갈 수 있는 메시지 구조가 필요했습니다.',action:'긴 문의 답변을 채팅방의 제너릭 메시지로 전환했습니다. 헤더, 핵심 본문, CTA, FAQ를 재구성하고 신청인에게는 증빙폼을, 피신청인에게는 사실관계 확인서를 연결했습니다.',result:'메시지 클릭률은 25%에서 68.3%로 개선됐습니다. 확인서 제출률은 48.8%로, 15.8%p 상승했습니다.',graphic:'message'},
 {id:'self',code:'02',title:'운영자를 기다리지<br>않아도 되도록',tag:'셀프 해결 · 유관부서 협업',description:'분쟁센터에 들어오기 전에, 사용자가 직접 해결할 수 있는 경로.',metric:'51% → 98.6%',metricLabel:'유저 자체합의',other:'49% → 2%',otherLabel:'어드민 취소',
  steps:['바로구매 오픈 후 <b>분쟁 4.4배</b> · 유저가 직접 확정·취소 불가','운영자가 다 처리하기보다 <b>셀프 해결 경로</b> 먼저','당근페이 협업 · <b>유저 간 구매확정·거래취소</b> 기능 추가','자체합의 <b>98.6%</b> · 어드민 취소 <b>2%</b>'],
  kpis:[{type:'bar',label:'유저 자체합의',from:51,to:98.6,unit:'%',max:100},{type:'bar',label:'어드민 취소',from:49,to:2,unit:'%',max:100,down:true},{type:'chip',value:'약 25시간 ↓',label:'구매확정 리드타임'},{type:'chip',value:'약 26시간 ↓',label:'거래취소 리드타임'}],
  visual:{type:'flow',title:'해결 경로의 변화',asis:['문제제기','직접 확정·취소 불가','분쟁 신청','운영자 처리'],tobe:['문제제기','유저 간 구매확정·거래취소','합의 종료']},
  problem:'바로구매 오픈 이후 분쟁이 약 4.4배 증가했습니다. 문제제기 후 구매확정·거래취소를 직접 할 수 없어 분쟁센터로 들어오는 사용자도 있었고, 불필요한 인입과 정산 보류가 늘었습니다.',decision:'모든 건을 운영자가 처리하기보다, 사용자가 스스로 해결할 수 있는 경로를 먼저 확보해야 한다고 판단했습니다.',action:'당근페이와 협업해 유저 간 구매확정·거래취소 기능을 추가했습니다. 분쟁 진입 전에 사용자가 필요한 다음 행동을 할 수 있도록 개선했습니다.',result:'유저 자체합의는 51%에서 98.6%로 개선됐고, 어드민 취소는 49%에서 2%로 감소했습니다. 구매확정 리드타임은 약 25시간, 거래취소 리드타임은 약 26시간 단축됐습니다.',graphic:'self'},
 {id:'automation',code:'03',title:'처리 병목을 찾아<br>운영 여력 확보',tag:'자동화 · 실험 · 품질 가드레일',description:'가장 오래 걸리는 작업을 줄이고, 품질을 확인하며 적용 범위를 넓히다.',metric:'2.7 → 58건/일',metricLabel:'조정안 발송량',other:'28.5% → 68.2%',otherLabel:'분쟁 해결률',
  steps:['일평균 <b>150건 적체</b> · 병목은 <b>조정안 작성</b>','작성은 줄이고, <b>검수·품질 확인은 유지</b>','조정안 에이전트 + 검수 발송 → <b>자동발송 실험</b>','해결률 <b>68.2%</b> · 첫 응답 <b>1일 이내</b>(실험 기간)'],
  kpis:[{type:'bar',label:'분쟁 해결률',from:28.5,to:68.2,unit:'%',max:100},{type:'bar',label:'조정안 발송량',from:2.7,to:58,unit:'건/일',max:58,badge:'21배'},{type:'bar',label:'바로구매 첫 응답 · 실험 기간',from:10,to:1,unit:'일',max:10,down:true,toText:'1일 이내'},{type:'gauge',label:'핑퐁률 · 품질 가드레일',value:73,limit:85,unit:'%',note:'가드레일 85% 이내'}],
  visual:{type:'pipeline',title:'자동화를 넓혀 간 순서',items:['병목 확인','에이전트로 작성','검수 후 발송','자동발송 실험','가드레일 확인','확대 근거 확보']},
  problem:'일평균 150건이 적체되는 상황에서, 서비스팀과 함께 조정안 작성이 가장 큰 병목임을 확인했습니다.',decision:'작성 시간을 줄이되 검수와 품질 확인을 유지하고, 자동발송 실험은 가드레일을 확인하며 확대해야 했습니다.',action:'내부 조정안 에이전트를 적용하고 검수 후 발송하도록 했습니다. 이후 일반거래 조정안 자동발송을 실험하고, 핑퐁률 등 품질 가드레일을 확인해 바로구매 처리 여력을 확보했습니다.',result:'조정안 발송량은 2.7건에서 58건/일로 증가했고, 분쟁 해결률은 28.5%에서 68.2%로 개선됐습니다. 핑퐁률은 가드레일 85% 대비 73%였습니다. 바로구매 첫 응답은 실험 기간 1일 이내, 관찰 기간 확대 시 평균 2일 이내였습니다.',graphic:'automation'},
 {id:'intake',code:'04',title:'판단 시점을<br>신청 앞단으로',tag:'신청 퍼널 · 사전 분류',description:'인입 이후 분류하던 문제를, 사용자가 신청하는 단계에서 살펴보다.',metric:'−74%',metricLabel:'개입 불필요 인입',other:'사후 → 사전',otherLabel:'개입 여부 판단 시점',
  steps:['인입의 <b>34%</b>가 개입 불필요 · 인입 후에야 판단','체크리스트로는 34→28%뿐 · <b>판단 시점</b>을 바꾼다','챗봇이 <b>신청 단계</b>에서 상황·신청 가능 여부 판단','개입 불필요 인입 <b>−74%</b>'],
  kpis:[{type:'bar',label:'개입 불필요 인입 (개선 전 = 100)',from:100,to:26,unit:'',max:100,down:true,fromText:'개선 전',toText:'−74%'},{type:'bar',label:'체크리스트만 배포했을 때 · 개입 불가 비중',from:34,to:28,unit:'%',max:100,down:true,muted:true}],
  visual:{type:'flow',title:'판단 시점의 이동',asis:['신청','인입','운영자가 개입 여부 판단'],tobe:['챗봇이 상황 판단','신청 가능할 때만 신청','필요한 건만 인입'],extra:{type:'images',items:[['assets/bot-1.jpg','신청 전 체크리스트 (1차 시도)'],['assets/bot-2.jpg','챗봇이 상황 확인'],['assets/bot-3.jpg','챗봇이 신청 가능 여부 안내']]}},
  problem:'전체 인입의 34%가 개입 불필요 대상이었습니다. 인입 후 분류하는 방식만으로는 인입 총량을 줄일 수 없었습니다.',decision:'신청 전 체크리스트를 배포했지만 개입 불가 비중은 34%에서 28%에 머물렀습니다. 안내를 추가하는 것보다 판단 시점을 바꿔야 한다고 봤습니다.',action:'챗봇이 신청 단계에서 분쟁 상황과 신청 가능 여부를 판단하도록 설계했습니다. 개입 여부 확인을 신청 이후에서 신청 앞단으로 옮겼습니다.',result:'개입 불필요 인입은 74% 감소했습니다.',graphic:'intake'}
];
const graphics={
 message:'<rect x="5" y="8" width="63" height="48" rx="3" fill="none" stroke="#5c6a6a"/><path d="M16 20h39M16 29h28M16 38h20" stroke="#71807a" stroke-width="3"/><path d="M80 33h25m-6-5 6 5-6 5" stroke="currentColor" fill="none"/><rect x="118" y="8" width="68" height="48" rx="3" fill="#424b3c" stroke="currentColor"/><path d="M128 21h47M128 30h35" stroke="currentColor" stroke-width="3"/><rect x="128" y="40" width="26" height="7" fill="currentColor"/>',
 self:'<circle cx="25" cy="31" r="16" fill="none" stroke="#70847a"/><path d="M20 31l4 4 8-9" fill="none" stroke="#a8c8b5" stroke-width="2"/><path d="M48 31h35m-6-5 6 5-6 5" stroke="#70847a" fill="none"/><rect x="95" y="9" width="46" height="44" rx="2" fill="#414c3b" stroke="currentColor"/><path d="M108 31l7 7 14-16" fill="none" stroke="currentColor" stroke-width="3"/><path d="M150 31h25m-6-5 6 5-6 5" stroke="currentColor" fill="none"/>',
 automation:'<path d="M8 59h178" stroke="#56645e"/><rect x="18" y="43" width="23" height="16" fill="#536253"/><rect x="59" y="35" width="23" height="24" fill="#7b8863"/><rect x="100" y="20" width="23" height="39" fill="#b6b76b"/><rect x="141" y="4" width="23" height="55" fill="currentColor"/>',
 intake:'<path d="M16 12h43M16 31h43M16 50h43" stroke="#6d7d70" stroke-width="4"/><path d="M70 12l28 19-28 19" fill="none" stroke="#687668"/><path d="M111 6v52" stroke="currentColor" stroke-width="3"/><path d="M126 31h40m-8-8 8 8-8 8" stroke="currentColor" fill="none" stroke-width="2"/>'
};
const notes=[
 {n:'01 / INTEREST',title:'자주 하는 영웅이라서',text:'키리코는 주로 플레이하는 영웅입니다. 자주 사용하는 캐릭터의 외형이기 때문에 스킨에 관심을 갖습니다.'},
 {n:'02 / VALUE',title:'기본 외형보다, 확실히 예쁘게',text:'기본 스킨에서 얼마나 예쁘게 변형됐는지가 구매의 핵심 기준입니다. 단순히 변화가 많은 것보다, 그 변화가 제 취향에 맞아야 합니다.'},
 {n:'03 / TIMING',title:'사고 싶은 스킨을, 미루지 않게',text:'판매 기간이 정해져 있으면 구매를 서두르게 됩니다. 기간 제한이 구매 욕구를 만드는지, 이미 갖고 싶은 상품의 결제 시점을 앞당기는지는 구분해서 살펴볼 질문입니다.'}
];
if(TRACK.titles)missions.forEach(m=>{if(TRACK.titles[m.id])m.title=TRACK.titles[m.id];});
const byId=Object.fromEntries(missions.map(m=>[m.id,m]));
window.MISSIONS=byId;
let currentMission=0;const read=new Set();let lastFocus=null;
const dialog=document.getElementById('mission-dialog');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
function ordered(){return TRACK.order.map(id=>byId[id]);}

// 다운로드 링크(상단 메뉴·프로필 등 data-download 요소)
function linkDownloads(root=document){root.querySelectorAll('[data-download]').forEach(a=>{const [href,name]=TRACK[a.dataset.download];a.href=href;a.setAttribute('download',name);});}
linkDownloads();
document.querySelectorAll('[data-track-label]').forEach(el=>el.textContent=TRACK.label);

function renderMissions(){const grid=document.getElementById('mission-grid');if(!grid)return;grid.innerHTML=ordered().map(m=>`<button class="mission-card" data-mission="${m.id}" aria-label="${m.title.replace('<br>',' ')} 미션 열기"><div class="card-code"><span>MISSION ${m.code}</span><b>${read.has(m.id)?'열람 완료 ✓':'실무 기록'}</b></div><div class="card-graphic"><svg viewBox="0 0 200 70" aria-hidden="true">${graphics[m.graphic]}</svg></div><h3>${m.title}</h3><p>${m.description}</p><div class="card-bottom"><span>${m.metric}<span class="card-tag">${m.metricLabel}</span></span><span>↗</span></div></button>`).join('');document.getElementById('read-count').textContent=`열람 ${read.size} / 4`;grid.querySelectorAll('[data-mission]').forEach(b=>b.addEventListener('click',()=>openMission(b.dataset.mission)));}

const fmt=v=>Number.isInteger(v)?String(v):v.toFixed(1);
function kpiHTML(k){
 if(k.type==='chip')return `<div class="kpi kpi-chip"><strong>${k.value}</strong><span>${k.label}</span></div>`;
 if(k.type==='gauge')return `<div class="kpi kpi-gauge"><div class="kpi-head"><span>${k.label}</span><strong>${k.value}${k.unit}</strong></div><div class="gauge"><i class="fill" style="--w:${k.value}%"></i><b class="limit" style="left:${k.limit}%"><em>기준 ${k.limit}${k.unit}</em></b></div><small>${k.note}</small></div>`;
 const fromText=k.fromText||fmt(k.from)+k.unit, toText=k.toText||fmt(k.to)+k.unit;
 return `<div class="kpi kpi-bar${k.muted?' muted':''}"><div class="kpi-head"><span>${k.label}</span>${k.badge?`<em class="badge">${k.badge}</em>`:''}</div><div class="bars"><div class="bar before"><i style="--w:${k.from/k.max*100}%"></i><span>${fromText}</span></div><div class="bar after${k.down?' down':''}"><i style="--w:${Math.max(k.to/k.max*100,2)}%"></i><span>${toText} ${k.down?'↓':'↑'}</span></div></div></div>`;
}
function chain(items,cls=''){return `<div class="chain ${cls}">${items.map(t=>`<span>${t}</span>`).join('<b aria-hidden="true">→</b>')}</div>`;}
function visualHTML(v){
 if(!v)return'';
 let inner='';
 if(v.type==='images')inner=`<div class="shots">${v.items.map(([src,cap])=>`<figure><img src="${src}" alt="${cap}" loading="lazy"><figcaption>${cap}</figcaption></figure>`).join('')}</div>`;
 if(v.type==='flow')inner=`<div class="flow-compare"><div class="flow-row asis"><small>BEFORE</small>${chain(v.asis)}</div><div class="flow-row tobe"><small>AFTER</small>${chain(v.tobe)}</div></div>`+(v.extra?visualHTML(v.extra):'');
 if(v.type==='pipeline')inner=chain(v.items,'pipeline');
 return v.title?`<section class="visual"><h3 class="visual-title">${v.title}</h3>${inner}</section>`:inner;
}
function openMission(id){currentMission=ordered().findIndex(m=>m.id===id);lastFocus=document.activeElement;renderDialog();if(!dialog.open){dialog.showModal();document.body.style.overflow='hidden';}document.getElementById('close-dialog').focus();}
window.openMission=openMission;
function renderDialog(){const list=ordered(),m=list[currentMission];read.add(m.id);renderMissions();document.getElementById('dialog-code').textContent=`MISSION ${String(currentMission+1).padStart(2,'0')} / ${m.tag}`;
 const labels=['문제','판단','실행','결과'];
 document.getElementById('mission-content').innerHTML=`<article class="dialog-body v2"><div class="dialog-kicker">당근마켓 · 분쟁조정 CX 개선</div><h2 id="dialog-title">${m.title.replace('<br>',' ')}</h2>
 <div class="kpi-grid">${m.kpis.map(kpiHTML).join('')}</div>
 <ol class="step-cards">${m.steps.map((s,i)=>`<li class="${i===3?'is-result':''}"><span>0${i+1} ${labels[i]}</span><p>${s}</p></li>`).join('')}</ol>
 ${visualHTML(m.visual)}
 <details class="more"><summary>자세히 읽기 <span>＋</span></summary>${[['문제',m.problem],['판단',m.decision],['실행',m.action],['결과',m.result]].map(([k,t])=>`<div class="story-block"><span>${k}</span><p>${t}</p></div>`).join('')}</details>
 <a class="source-link" data-download="portfolio">원본 포트폴리오 PDF 받기 ↓</a></article>`;
 linkDownloads(document.getElementById('mission-content'));
 const body=document.querySelector('#mission-content .dialog-body');
 if(reducedMotion)body.classList.add('play');else requestAnimationFrame(()=>requestAnimationFrame(()=>body.classList.add('play')));
 document.getElementById('dialog-position').textContent=`${currentMission+1} / ${list.length}`;document.getElementById('prev-mission').disabled=currentMission===0;document.getElementById('next-mission').disabled=currentMission===list.length-1;dialog.scrollTop=0;}
document.getElementById('close-dialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('close',()=>{document.body.style.overflow='';const id=ordered()[currentMission].id;const target=document.querySelector(`[data-mission="${id}"]`);(target||lastFocus)?.focus();});dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const step=d=>{const n=currentMission+d;if(n>=0&&n<missions.length){currentMission=n;renderDialog();document.getElementById('close-dialog').focus();}};
document.getElementById('prev-mission').addEventListener('click',()=>step(-1));document.getElementById('next-mission').addEventListener('click',()=>step(1));
dialog.addEventListener('keydown',e=>{if(e.target.tagName==='SUMMARY')return;if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1);});
function showNote(i){const el=document.getElementById('purchase-note');if(!el)return;const n=notes[i];el.innerHTML=`<span class="note-number">${n.n}</span><h3>${n.title}</h3><p>${n.text}</p>`;document.querySelectorAll('[data-note]').forEach(b=>b.setAttribute('aria-pressed',String(Number(b.dataset.note)===i)));}document.querySelectorAll('[data-note]').forEach(b=>b.addEventListener('click',()=>showNote(Number(b.dataset.note))));
// 상단 다운로드 메뉴: 바깥 클릭·Esc로 닫기
const dl=document.querySelector('.dl-menu');if(dl){document.addEventListener('click',e=>{if(dl.open&&!dl.contains(e.target))dl.open=false;});dl.addEventListener('keydown',e=>{if(e.key==='Escape'){dl.open=false;dl.querySelector('summary').focus();}});}
renderMissions();showNote(0);
// HTML 파일을 더블클릭(file://)으로 열면 브라우저가 ES 모듈(office.js)을 막아 3D·이동이 동작하지 않는다.
if(location.protocol==='file:'){const fb=document.getElementById('world-fallback');if(fb){fb.hidden=false;fb.querySelector('h2').textContent='파일로 열면 3D 오피스가 동작하지 않아요.';fb.querySelector('p').textContent='로컬 서버(python3 -m http.server)나 배포된 URL로 열어 주세요. 아래 버튼으로 내용은 바로 볼 수 있어요.';}}
if(location.protocol==='file:'){const fb=document.getElementById('world-fallback');fb.querySelector('[data-destination=work]').onclick=()=>openMission(TRACK.order[0]);fb.querySelectorAll('button:not([data-destination=work])').forEach(x=>x.hidden=true);}
