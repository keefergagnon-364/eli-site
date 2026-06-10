const phone=document.getElementById('phone');
phone.addEventListener('input',e=>{
let v=e.target.value.replace(/\D/g,'').slice(0,10);
if(v.length>6)v=`(${v.slice(0,3)}) ${v.slice(3,6)}-${v.slice(6)}`;
else if(v.length>3)v=`(${v.slice(0,3)}) ${v.slice(3)}`;
else if(v.length>0)v=`(${v}`;
e.target.value=v;
});

document.getElementById('serviceNeeded').addEventListener('change',e=>{
document.getElementById('otherServiceWrapper').classList.toggle('hidden',e.target.value!=='other');
});

const desc=document.getElementById('description');
const counter=document.getElementById('counter');
desc.addEventListener('input',()=>counter.textContent=`${desc.value.length} / 1000`);

const drop=document.getElementById('dropZone');
const photos=document.getElementById('photos');
const list=document.getElementById('fileList');

drop.onclick=()=>photos.click();

photos.addEventListener('change',showFiles);

drop.addEventListener('dragover',e=>e.preventDefault());
drop.addEventListener('drop',e=>{
e.preventDefault();
photos.files=e.dataTransfer.files;
showFiles();
});

function showFiles(){
list.innerHTML='';
[...photos.files].forEach(f=>{
const div=document.createElement('div');
div.textContent=f.name;
list.appendChild(div);
});
}

document.getElementById('serviceRequestForm').addEventListener('submit',async e=>{
e.preventDefault();
document.getElementById('formMessage').textContent='Ready for Jobber API integration.';
});