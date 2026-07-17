/* Interest + A-Level combined major matcher · MAJOR FUTURES V4.3 */
(function initCombinedMatcher(){
  const dialog=document.querySelector('#combinedDialog');
  const app=document.querySelector('#combinedApp');
  if(!dialog||!app)return;

  const ORDER=['R','I','A','S','E','C'];
  const STORAGE='major_futures_combined_subjects_v1';
  const GROUP_A=['chemistry','economics'];
  const GROUP_B=['psychology','fm','biology','business'];
  const state={recordId:null,selected:[],showAll:false};

  const lang=()=>document.documentElement.lang==='en'?'en':'zh';
  const local=x=>x&&typeof x==='object'?(x[lang()]??x.zh??x.en):x;
  const esc=s=>String(s??'').replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;'}[c]));
  const subjectName=k=>local(matcherSubjects[k]);
  const majorById=id=>majors.find(m=>m.id===id);
  const profileById=id=>matcherProfiles.find(p=>p.id===id);
  const displayMajor=m=>lang()==='en'?m.en:m.name;
  const displayAltMajor=m=>lang()==='en'?m.name:m.en;
  const texts={
    zh:{
      back:'返回测评结果',eye:'INTEREST × SUBJECTS',title:'兴趣与课程综合匹配',desc:'把你愿意长期做的事情，与目前的A-Level课程准备放在一起看。',record:'测评记录',interestCode:'霍兰德代码',fixed:'固定科目',choose:'完成两组选课',groupA:'第一组选课',groupADesc:'二选一',groupB:'第二组选课',groupBDesc:'四选一',physics:'Physics（可选）',physicsDesc:'申请理工科时更重要',replace:'点击同组另一门课程即可替换',reset:'重新选择',need:'完成两组选课后生成综合结果。',resultTitle:'更值得优先了解的专业',resultDesc:'综合分由兴趣匹配和课程准备共同构成，用来排序探索方向，不代表录取概率。',combined:'综合匹配',interest:'兴趣匹配',subjects:'课程准备',view:'查看完整专业分析',showAll:'查看全部28个专业',showTop:'只看前10个',strong:'兴趣和课程都比较合拍',interestLead:'兴趣明显，课程还要补强',subjectLead:'课程接得上，兴趣再验证',explore:'值得继续探索',noEssential:'常见关键科目缺少：',recommended:'竞争激烈课程常会看重：',portfolio:'这个专业还要重点看作品集或项目。',method:'计算时，课程准备占55%，兴趣结构占45%。关键科目缺失时会限制综合分。',saved:'本次选课会保存在这条测评记录下。',emptyRecord:'找不到这条测评记录，请返回测评记录重新打开。',detailTitle:'为什么排在这里',subjectCombo:'你的课程组合',codeLine:'兴趣代码',bothText:'你对这类专业常见的任务有较强兴趣，课程组合也能接上大部分本科内容。接下来可以把注意力放到具体细分方向、大学课程和真实项目上。',interestText:'你对这类专业的工作方式有兴趣，不过现有选课对申请准备还不够直接。先核对目标大学的先修要求，再决定是否补课程或调整申请方向。',subjectText:'你的课程组合能支持这个专业，但测评中对应的工作兴趣没有特别突出。建议先通过阅读、项目或夏校体验一段时间，再判断是否愿意长期投入。',exploreText:'兴趣和课程都有一定连接，但暂时没有形成明显优势。可以先比较相近专业，找到更具体的学习内容和工作场景。'
    },
    en:{
      back:'Back to assessment result',eye:'INTEREST × SUBJECTS',title:'Combined interest and subject match',desc:'Compare the work you are willing to do with your current A-level preparation.',record:'Assessment record',interestCode:'Holland code',fixed:'Fixed subjects',choose:'Complete two choice groups',groupA:'Choice group one',groupADesc:'Choose one',groupB:'Choice group two',groupBDesc:'Choose one',physics:'Physics (optional)',physicsDesc:'More important for engineering and physical sciences',replace:'Click another subject in the same group to replace it',reset:'Reset subjects',need:'Complete both choice groups to generate combined results.',resultTitle:'Majors worth exploring first',resultDesc:'The combined score brings together interests and subject preparation. It is a ranking aid, not an admission probability.',combined:'Combined match',interest:'Interest fit',subjects:'Subject preparation',view:'Open full major analysis',showAll:'Show all 28 majors',showTop:'Show top 10 only',strong:'Interests and subjects align well',interestLead:'Strong interest; subjects need strengthening',subjectLead:'Subjects fit; interest needs testing',explore:'Worth further exploration',noEssential:'Common key subject missing: ',recommended:'Selective courses often value: ',portfolio:'Portfolio or project quality remains important.',method:'Subject preparation contributes 55% and interest fit 45%. Missing key subjects limits the combined score.',saved:'This subject selection is saved with the assessment record.',emptyRecord:'This assessment record could not be found. Return to assessment history and open it again.',detailTitle:'Why it ranks here',subjectCombo:'Your subjects',codeLine:'Interest code',bothText:'You show interest in the typical work of this major, and your subjects connect well with undergraduate study. The next step is to compare pathways, university modules, and real projects.',interestText:'The work itself appeals to you, but your current subjects are a less direct preparation route. Check prerequisite requirements before deciding whether to add preparation or adjust the target course.',subjectText:'Your subjects support this major, but the related work interests were not especially strong in the assessment. Try a sustained reading, project, or summer-school experience before committing.',exploreText:'There is some connection in both interests and subjects, but no clear advantage yet. Compare neighbouring majors and focus on the actual learning and work involved.'
    }
  };
  const tx=k=>texts[lang()][k]||k;

  function loadSelections(){
    try{return JSON.parse(localStorage.getItem(STORAGE)||'{}')||{};}catch(_){return {};}
  }
  function saveSelections(){
    if(!state.recordId)return;
    const all=loadSelections();all[state.recordId]=state.selected;try{localStorage.setItem(STORAGE,JSON.stringify(all));}catch(_){}
  }
  function getRecord(){return window.HollandAssessment?.getRecord?.(state.recordId)||window.HollandAssessment?.history?.().find(r=>r.id===state.recordId)||null;}
  function valid(){return GROUP_A.some(k=>state.selected.includes(k))&&GROUP_B.some(k=>state.selected.includes(k));}
  function normalize(arr){const max=Math.max(...arr),min=Math.min(...arr);if(max===min)return arr.map(()=>.5);return arr.map(x=>(x-min)/(max-min));}

  function interestScore(record,id){
    const vec=hollandMajorProfiles[id];if(!vec)return 50;
    const student=normalize(ORDER.map(k=>record.result.sums[k]));
    const norm=normalize(vec);
    const rmse=Math.sqrt(norm.reduce((s,x,i)=>s+(x-student[i])**2,0)/6);
    const shape=Math.max(0,1-rmse);
    const top3=record.result.ranked.slice(0,3).map(x=>x.k);
    const majorRank=ORDER.map((k,i)=>({k,v:vec[i]})).sort((a,b)=>b.v-a.v).slice(0,3).map(x=>x.k);
    const overlap=top3.reduce((s,k,i)=>s+(majorRank.includes(k)?[1,.68,.4][i]:0),0)/2.08;
    return Math.round(Math.min(96,48+48*(shape*.78+overlap*.22)));
  }

  function subjectScore(profile){
    const weighted=state.selected.map(k=>({k,w:profile.weights[k]||0})).sort((a,b)=>b.w-a.w);
    let fit=profile.math;
    if(weighted[0])fit+=weighted[0].w;
    if(weighted[1])fit+=weighted[1].w*.75;
    if(weighted[2])fit+=weighted[2].w*.35;
    (profile.synergies||[]).forEach(([keys,bonus])=>{if(keys.every(k=>state.selected.includes(k)))fit+=bonus;});
    const missingEssential=(profile.essential||[]).filter(k=>!state.selected.includes(k));
    const missingRecommended=(profile.recommended||[]).filter(k=>!state.selected.includes(k));
    fit+=(profile.recommended||[]).filter(k=>state.selected.includes(k)).length*4;
    if((profile.essential||[]).length&&!missingEssential.length)fit+=5;
    let score=35+63*Math.pow(Math.max(fit,0)/100,.85);
    if(missingEssential.length)score=Math.min(score,61);
    score=Math.max(38,Math.min(profile.ceiling||98,Math.round(score)));
    return {score,missingEssential,missingRecommended};
  }

  function classify(interest,subject){
    if(interest>=76&&subject>=75)return {key:'strong',text:tx('bothText')};
    if(interest>=78&&subject<70)return {key:'interestLead',text:tx('interestText')};
    if(subject>=80&&interest<70)return {key:'subjectLead',text:tx('subjectText')};
    return {key:'explore',text:tx('exploreText')};
  }

  function calculate(record,profile){
    const interest=interestScore(record,profile.id);
    const subjectData=subjectScore(profile);
    let combined=Math.round(interest*.45+subjectData.score*.55);
    if(subjectData.missingEssential.length)combined=Math.min(combined,66);
    const cls=classify(interest,subjectData.score);
    return {id:profile.id,interest,subject:subjectData.score,combined,classification:cls,missingEssential:subjectData.missingEssential,missingRecommended:subjectData.missingRecommended};
  }

  function subjectChip(k){return `<button type="button" class="combined-subject-chip ${state.selected.includes(k)?'active':''}" data-combined-subject="${k}"><b>${state.selected.includes(k)?'✓':'+'}</b><span>${esc(subjectName(k))}</span></button>`;}
  function group(title,desc,keys){return `<section class="combined-choice-group"><header><strong>${title}</strong><small>${desc}</small></header><div>${keys.map(subjectChip).join('')}</div><p>${tx('replace')}</p></section>`;}
  function recordHead(record){
    const top=record.result.ranked.slice(0,3);
    return `<section class="combined-record-head"><div><p>${tx('record')}</p><h2>${tx('title')}</h2><span>${tx('desc')}</span></div><aside><small>${tx('interestCode')}</small><strong>${record.result.code}</strong><p>${top.map(x=>`${x.k} ${local(hollandTypes[x.k])}`).join(' · ')}</p></aside></section>`;
  }
  function selector(){
    return `<section class="combined-selector"><div class="combined-fixed"><header><strong>${tx('fixed')}</strong><small>CORE SUBJECTS</small></header><div><span>✓ A-Level Mathematics</span><span>✓ A-Level Chinese</span></div></div>${group(tx('groupA'),tx('groupADesc'),GROUP_A)}${group(tx('groupB'),tx('groupBDesc'),GROUP_B)}<section class="combined-choice-group combined-physics"><header><strong>${tx('physics')}</strong><small>${tx('physicsDesc')}</small></header><div>${subjectChip('physics')}</div></section><footer><small>${tx('saved')}</small><button type="button" class="text-btn" data-combined-reset>${tx('reset')}</button></footer></section>`;
  }
  function scoreGauge(label,value,kind){return `<div class="combined-mini-score ${kind}"><span>${label}</span><strong>${value}<small>%</small></strong><i><em style="width:${value}%"></em></i></div>`;}
  function resultCard(record,x,index){
    const m=majorById(x.id),p=profileById(x.id),warnings=[];
    if(x.missingEssential.length)warnings.push(tx('noEssential')+x.missingEssential.map(subjectName).join('、'));
    else if(x.missingRecommended.length)warnings.push(tx('recommended')+x.missingRecommended.map(subjectName).join('、'));
    if(p.portfolio)warnings.push(tx('portfolio'));
    return `<article class="combined-result-card" data-combined-major="${x.id}"><div class="combined-rank">${String(index+1).padStart(2,'0')}</div><div class="combined-result-main"><span>${catName(m.category)}</span><h3>${esc(displayMajor(m))}</h3><small>${esc(displayAltMajor(m))}</small><p>${x.classification.text}</p>${warnings.length?`<aside>${warnings.map(w=>`<b>${esc(w)}</b>`).join('')}</aside>`:''}</div><div class="combined-score-stack"><div class="combined-main-score"><span>${tx('combined')}</span><strong>${x.combined}<small>%</small></strong><em>${tx(x.classification.key)}</em></div>${scoreGauge(tx('interest'),x.interest,'interest')}${scoreGauge(tx('subjects'),x.subject,'subjects')}<button type="button">${tx('view')} →</button></div></article>`;
  }
  function results(record){
    if(!valid())return `<section class="combined-empty"><div class="combined-orbit"><span>${record.result.code}</span><i></i><i></i></div><h3>${tx('need')}</h3><p>${tx('method')}</p></section>`;
    const ranked=matcherProfiles.map(p=>calculate(record,p)).sort((a,b)=>b.combined-a.combined||b.subject-a.subject||b.interest-a.interest);
    const list=state.showAll?ranked:ranked.slice(0,10);
    return `<section class="combined-results"><header><div><p>COMBINED MAJOR MATCH</p><h3>${tx('resultTitle')}</h3><span>${tx('resultDesc')}</span></div><small>${tx('method')}</small></header><div class="combined-results-list">${list.map((x,i)=>resultCard(record,x,i)).join('')}</div><button class="ghost-btn combined-show-all" type="button" data-combined-show>${state.showAll?tx('showTop'):tx('showAll')}</button></section>`;
  }
  function render(){
    const record=getRecord();
    if(!record){app.innerHTML=`<section class="combined-shell"><button class="subpage-back" data-combined-close type="button">← ${tx('back')}</button><div class="combined-empty"><h3>${tx('emptyRecord')}</h3></div></section>`;return;}
    app.innerHTML=`<section class="combined-shell"><button class="subpage-back" data-combined-close type="button">← ${tx('back')}</button>${recordHead(record)}<div class="combined-workspace">${selector()}${results(record)}</div></section>`;
    dialog.scrollTop=0;
  }

  function integratedSection(record,x){
    const subjects=['math','chinese',...state.selected].map(subjectName).join(' · ');
    return `<section class="integrated-combined-section"><div class="integrated-combined-head"><div><span>INTEREST × A-LEVEL</span><h3>${tx('detailTitle')}</h3><p><b>${tx('codeLine')}：</b>${record.result.code}　<b>${tx('subjectCombo')}：</b>${esc(subjects)}</p></div><strong>${x.combined}<small>%</small></strong></div><div class="integrated-combined-scores">${scoreGauge(tx('interest'),x.interest,'interest')}${scoreGauge(tx('subjects'),x.subject,'subjects')}</div><p>${x.classification.text}</p><small>${tx('method')}</small></section><section class="integrated-ai-heading"><span>AI & CAREER OUTLOOK</span><h3>${lang()==='en'?'Future directions and roles':'继续看专业方向与未来岗位'}</h3></section>`;
  }

  function open(recordId){
    state.recordId=recordId;state.showAll=false;
    const stored=loadSelections()[recordId];state.selected=Array.isArray(stored)?stored.filter(k=>[...GROUP_A,...GROUP_B,'physics'].includes(k)):[];
    render();if(!dialog.open)dialog.showModal();document.body.classList.add('dialog-open');
  }
  function close(){if(dialog.open)dialog.close();}

  dialog.addEventListener('click',e=>{
    if(e.target.closest('[data-combined-close]')){close();return;}
    const sub=e.target.closest('[data-combined-subject]');
    if(sub){const k=sub.dataset.combinedSubject;if(k==='physics'){state.selected=state.selected.includes(k)?state.selected.filter(x=>x!==k):[...state.selected,k];}else{const group=GROUP_A.includes(k)?GROUP_A:GROUP_B;state.selected=state.selected.filter(x=>!group.includes(x));state.selected.push(k);}state.showAll=false;saveSelections();render();return;}
    if(e.target.closest('[data-combined-reset]')){state.selected=[];state.showAll=false;saveSelections();render();return;}
    if(e.target.closest('[data-combined-show]')){state.showAll=!state.showAll;render();return;}
    const card=e.target.closest('[data-combined-major]');
    if(card){const record=getRecord(),profile=profileById(card.dataset.combinedMajor),x=calculate(record,profile);openMajor(x.id,integratedSection(record,x));return;}
  });
  dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('dialog-open');});
  document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setTimeout(()=>{if(dialog.open)render();},0)));
  window.CombinedMatcher={open,close};
})();
