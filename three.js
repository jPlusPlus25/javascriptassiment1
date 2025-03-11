let eids=[101,102,103,104]
//create noe array boundan exiting array
let vids=[]
for(let eid of eids){
    vids.push(eid)
}
console.log(vids)
console.log(eids)
vids[0]='100'
console.log(vids)